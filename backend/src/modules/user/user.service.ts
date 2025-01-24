import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(userDto: UserDto): Promise<User> {
    const userExists = await this.userRepository.findOne({
      where: { email: userDto.email },
    });
    if (userExists) {
      throw new UnauthorizedException('User already exists');
    }

    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user).then((res) => {
      res.password = null;
      return res;
    });
  }

  async login({ email, password }: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user || !(await user.validatePassword(password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { id: user.id, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    user.password = null;
    return user;
  }
}
