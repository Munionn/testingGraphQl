import { Test, TestingModule } from '@nestjs/testing';
import { VoteResolver } from './vote.resolver';
import { VoteService } from './vote.service';
import { VoteType } from './vote.entity';
import { CreateVoteInput, UpdateVoteInput } from './vote.input';

describe('VoteResolver', () => {
  let resolver: VoteResolver;
  let service: VoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoteResolver, VoteService],
    }).compile();

    resolver = module.get<VoteResolver>(VoteResolver);
    service = module.get<VoteService>(VoteService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('Query Methods', () => {
    it('should return all votes', () => {
      const result = resolver.votes();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThanOrEqual(2);
    });

    it('should return a specific vote by id', () => {
      const result = resolver.vote('1');
      expect(result).toBeDefined();
      expect(result.id).toBe('1');
    });
  });

  describe('Mutation Methods', () => {
    it('should create a new vote', () => {
      const createInput: CreateVoteInput = {
        userId: '3',
        postId: '3',
        voteType: VoteType.UPVOTE,
      };
      
      const result = resolver.createVote(createInput);
      expect(result).toBeDefined();
      expect(result.userId).toBe('3');
      expect(result.postId).toBe('3');
      expect(result.voteType).toBe(VoteType.UPVOTE);
    });

    it('should update a vote', () => {
      const updateInput: UpdateVoteInput = {
        voteType: VoteType.DOWNVOTE,
      };
      
      const result = resolver.updateVote('1', updateInput);
      expect(result).toBeDefined();
      expect(result.voteType).toBe(VoteType.DOWNVOTE);
    });

    it('should delete a vote', () => {
      const result = resolver.deleteVote('1');
      expect(result).toBe(true);
    });
  });
});
