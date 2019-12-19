import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import UserProfile from './UserProfile'
import Challenge from './Challenge'

@Entity()
export default class CompletedChallenge {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int', { nullable: true })
  userId: number

  @ManyToOne(() => UserProfile, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  userProfile: UserProfile

  @Column('int', { nullable: true })
  challengeId: number

  @ManyToOne(() => Challenge, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'challengeId' })
  challenge: Challenge

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}