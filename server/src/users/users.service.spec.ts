import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserInput, UpdateUserInput } from './user.input';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Query Methods', () => {
    describe('findAll', () => {
      it('should return all users', () => {
        const result = service.findAll();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
      });
    });
  });

  describe('Mutation Methods', () => {
    describe('create', () => {
      it('should create a new user', () => {
        const result = service.create({
          name: 'John Doe',
          email: 'john@example.com',
        } as CreateUserInput);
        expect(result.name).toBe('John Doe');
        expect(result.email).toBe('john@example.com');
      });
    });
    describe('updateUser', () => {
      it('should update a user', () => {
        const result = service.updateUser('1', {
          name: 'John Doe',
          email: 'john@example.com',
        } as UpdateUserInput);
        expect(result.name).toBe('John Doe');
        expect(result.email).toBe('john@example.com');
      });
    });
  });
});
