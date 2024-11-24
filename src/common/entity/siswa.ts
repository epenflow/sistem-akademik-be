import { UserDetails } from 'src/common/entity/user-details';
import { Users } from 'src/common/entity/users';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

@Entity('siswa')
@Index(['id'])
export class Siswa extends UserDetails {
	@Column({
		type: 'varchar',
		length: 100,
		nullable: true,
	})
	status: string;

	/**
	 *
	 * ----------------------------------------------------------
	 * The relations
	 * ----------------------------------------------------------
	 *
	 */
	@OneToOne(() => Users, (user) => user.siswa)
	@JoinColumn({
		name: 'user_id',
	})
	user: Users;
}
