import { Field, InputType } from '@nestjs/graphql';
import { VoteType } from './vote.entity';

@InputType()
export class CreateVoteInput {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  postId: string;

  @Field(() => String)
  voteType: VoteType;
}

@InputType()
export class UpdateVoteInput {
  @Field(() => String)
  voteType: VoteType;
}
