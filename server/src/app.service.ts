import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Injectable()
export class AppService {
  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }
}

// create live vote system using graphql and nestjs

// user with id name

// create a vote with id title description and option
