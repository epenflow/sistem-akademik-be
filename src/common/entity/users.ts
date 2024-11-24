import { Guru } from 'src/common/entity/guru';
import { Siswa } from 'src/common/entity/siswa';
import { UserRole } from 'src/common/enums';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	Index,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('users')
@Index(['id', 'username', 'email'])
export class Users {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		type: 'varchar',
		length: 50,
		unique: true,
	})
	username: string;

	@Column({
		type: 'varchar',
		length: 100,
		unique: true,
	})
	email: string;

	@Column({
		type: 'varchar',
	})
	password: string;

	@Column({
		type: 'enum',
		enum: UserRole,
	})
	role: UserRole;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	delete_at: Date;

	/**
	 *
	 * ----------------------------------------------------------
	 * The relations
	 * ----------------------------------------------------------
	 *
	 */
	@OneToOne(() => Siswa, (siswa) => siswa.user)
	siswa: Siswa;

	@OneToOne(() => Guru, (guru) => guru.user)
	guru: Guru;
}
