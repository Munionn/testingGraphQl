import { Test, TestingModule } from '@nestjs/testing';
import { VoteService } from './vote.service';
import { VoteResolver } from './vote.resolver';
import { VoteType } from './vote.entity';

describe('VoteService', () => {
  let service: VoteService;
  let resolver: VoteResolver;

  const mockVoteService = {
    postTitle: jest.fn(),
    userName: jest.fn(),
    postVoteCount: jest.fn(),
    upvoteCount: jest.fn(),
    downvoteCount: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: VoteService,
          useValue: mockVoteService,
        },
        VoteResolver,
      ],
    }).compile();

    service = module.get<VoteService>(VoteService);
    resolver = module.get<VoteResolver>(VoteResolver);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(resolver).toBeDefined();
  });
});
