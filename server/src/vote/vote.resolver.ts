import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VoteService } from './vote.service';
import { Vote } from './vote.entity';
import { CreateVoteInput, UpdateVoteInput } from './vote.input';

@Resolver(() => Vote)
export class VoteResolver {
  constructor(private readonly voteService: VoteService) {}

  // Query resolver - fetches data
  @Query(() => [Vote])
  votes() {
    return this.voteService.find();
  }

  @Query(() => Vote)
  vote(@Args('id') id: string) {
    return this.voteService.findById(id);
  }

  // Mutation resolver - modifies data
  @Mutation(() => Vote)
  createVote(@Args('createVoteInput') createVoteInput: CreateVoteInput) {
    return this.voteService.create(createVoteInput);
  }

  @Mutation(() => Vote)
  updateVote(
    @Args('id') id: string,
    @Args('updateVoteInput') updateVoteInput: UpdateVoteInput,
  ) {
    return this.voteService.update(id, updateVoteInput);
  }

  @Mutation(() => Boolean)
  deleteVote(@Args('id') id: string) {
    return this.voteService.deleteVote(id);
  }
}
