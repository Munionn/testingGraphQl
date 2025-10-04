import { Resolver } from '@nestjs/graphql';
import { VoteService } from './vote.service';

@Resolver()
export class VoteResolver {
  constructor(private readonly voteService: VoteService) {}
}
