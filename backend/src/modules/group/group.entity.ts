import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Speciality } from '../speciality/speciality.entity';
import { User } from '../user/user.entity';
import { Course } from '../course/course.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Speciality, (speciality) => speciality.groups)
  speciality: Speciality;

  @OneToMany(() => User, (user) => user.group)
  students: User[];

  @ManyToOne(() => Course, (course) => course.groups)
  course: Course;
}
