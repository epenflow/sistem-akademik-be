import { UserDetails } from 'src/common/entity/user-details';
import { Users } from 'src/common/entity/users';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

@Entity('guru')
@Index(['id'])
export class Guru extends UserDetails {
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
	@OneToOne(() => Users, (user) => user.guru)
	@JoinColumn({
		name: 'user_id',
	})
	user: Users;
}
