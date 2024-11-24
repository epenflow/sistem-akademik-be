import { Gender } from 'src/common/enums';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

export class UserDetails {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		type: 'varchar',
		length: 100,
	})
	nama: string;

	@Column({
		type: 'timestamp',
		nullable: true,
	})
	tanggal_lahir: Date;

	@Column({
		type: 'enum',
		enum: Gender,
	})
	jenis_kelamin: Gender;

	@Column({
		type: 'text',
		nullable: true,
	})
	alamat: string;

	@Column({
		type: 'varchar',
		length: 15,
		nullable: true,
	})
	no_telepon: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	delete_at: Date;
}
