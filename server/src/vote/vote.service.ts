import { Injectable } from '@nestjs/common';

enum VoteType {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
}

interface Vote {
  id: string;
  userId: string;
  postId: string;
  voteType: VoteType;
}

@Injectable()
export class VoteService {
  private votes: Vote[] = [
    {
      id: '1',
      userId: '1',
      postId: '1',
      voteType: VoteType.UPVOTE,
    },
    {
      id: '2',
      userId: '2',
      postId: '2',
      voteType: VoteType.DOWNVOTE,
    },
  ];
}
