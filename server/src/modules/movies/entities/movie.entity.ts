import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  external_id: number;

  @Column()
  title: string;

  @Column({ nullable: true, type: 'text' })
  overview: string;

  @Column()
  image: string;
}
