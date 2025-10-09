import { Injectable, NotFoundException } from '@nestjs/common';
import { Vote, VoteType } from './vote.entity';
import { CreateVoteInput, UpdateVoteInput } from './vote.input';

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

  // Query methods
  find(): Vote[] {
    return this.votes;
  }

  findById(id: string): Vote {
    const vote = this.votes.find((vote) => vote.id === id);
    if (!vote) {
      throw new NotFoundException(`Vote with ID ${id} not found`);
    }
    return vote;
  }

  findByUserId(userId: string): Vote[] {
    return this.votes.filter(vote => vote.userId === userId);
  }

  findByPostId(postId: string): Vote[] {
    return this.votes.filter(vote => vote.postId === postId);
  }

  // Mutation methods
  create(createVoteInput: CreateVoteInput): Vote {
    // Check if user already voted on this post
    const existingVote = this.votes.find(
      vote => vote.userId === createVoteInput.userId && vote.postId === createVoteInput.postId
    );

    if (existingVote) {
      // Update existing vote instead of creating new one
      return this.update(existingVote.id, { voteType: createVoteInput.voteType });
    }

    const vote: Vote = {
      id: Math.random().toString(36).substring(2, 15),
      ...createVoteInput,
    };

    this.votes.push(vote);
    return vote;
  }

  update(id: string, updateVoteInput: UpdateVoteInput): Vote {
    const vote = this.votes.find((vote) => vote.id === id);
    if (!vote) {
      throw new NotFoundException('Vote hasnt been found');
    }

    vote.voteType = updateVoteInput.voteType;
    return vote;
  }

  deleteVote(id: string): boolean {
    const voteIndex = this.votes.findIndex(vote => vote.id === id);
    if (voteIndex === -1) {
      throw new NotFoundException('Vote hasnt been found');
    }

    this.votes.splice(voteIndex, 1);
    return true;
  }

  // Utility methods for computed fields
  getVoteCountForPost(postId: string): number {
    return this.votes.filter(vote => vote.postId === postId).length;
  }

  getUpvoteCountForPost(postId: string): number {
    return this.votes.filter(vote => vote.postId === postId && vote.voteType === VoteType.UPVOTE).length;
  }

  getDownvoteCountForPost(postId: string): number {
    return this.votes.filter(vote => vote.postId === postId && vote.voteType === VoteType.DOWNVOTE).length;
  }

  getUserVoteCount(userId: string): number {
    return this.votes.filter(vote => vote.userId === userId).length;
  }
}
