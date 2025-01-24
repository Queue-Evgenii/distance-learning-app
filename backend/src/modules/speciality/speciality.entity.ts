import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Faculty } from '../faculty/faculty.entity';
import { Group } from '../group/group.entity';

@Entity()
export class Speciality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.specialities)
  faculty: Faculty;

  @OneToMany(() => Group, (group) => group.speciality)
  groups: Group[];
}
