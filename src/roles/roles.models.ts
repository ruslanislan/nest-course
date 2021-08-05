import { User } from '../users/users.model';
import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from './user-roles.model';

interface RoleCreatingAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreatingAttrs> {
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Role value' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    value: string;

    @ApiProperty({ example: 'Administrator', description: 'Role description' })
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}