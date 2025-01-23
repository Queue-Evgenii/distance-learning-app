import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialityService } from './speciality.service';
import { SpecialityController } from './speciality.controller';
import { Speciality } from './speciality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Speciality])],
  providers: [SpecialityService],
  controllers: [SpecialityController],
})
export class SpecialityModule {}
