import { Entity, Column, PrimaryGeneratedColumn, AfterInsert } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  todo: string;
  @Column()
  done: boolean;

  @AfterInsert()
  logInsert() {
    console.log('new Todo ->' + this.todo);
  }
}
