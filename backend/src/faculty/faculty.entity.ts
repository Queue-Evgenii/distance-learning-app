import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Speciality } from '../speciality/speciality.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Speciality, (speciality) => speciality.faculty)
  specialities: Speciality[];
}
