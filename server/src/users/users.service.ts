import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserInput, UpdateUserInput } from './user.input';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
  ];

  findAll() {
    return this.users;
  }
  create(createUserInput: CreateUserInput) {
    const user = {
      id: Math.random().toString(36).substring(2, 15),
      ...createUserInput,
    };
    this.users.push(user);
    return user;
  }
  updateUser(id: string, updateUser: UpdateUserInput) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('user hasnt been found');
    }
    user.name = updateUser.name ?? user.name;
    user.email = updateUser.email ?? user.email;
    return user;
  }
}
