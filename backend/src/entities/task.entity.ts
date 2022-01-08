import { StatusEnum } from './../models/data.models';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Task {
@PrimaryGeneratedColumn()
id: number;

@Column()
title: string;

@Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.Suggestion
})
status: string;
};