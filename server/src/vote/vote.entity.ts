import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

export enum VoteType {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
}

@ObjectType()
export class Vote {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  postId: string;

  @Field(() => String)
  voteType: VoteType;

  // Computed fields - these are resolved by @ResolveField decorators
  @Field(() => String, { nullable: true })
  postTitle?: string;

  @Field(() => String, { nullable: true })
  userName?: string;

  @Field(() => Int, { nullable: true })
  postVoteCount?: number;

  @Field(() => Int, { nullable: true })
  upvoteCount?: number;

  @Field(() => Int, { nullable: true })
  downvoteCount?: number;
}
