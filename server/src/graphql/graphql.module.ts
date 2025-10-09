import { Module } from '@nestjs/common';
import { GraphqlResolver } from './graphql.resolver';
import { UsersModule } from 'src/users/users.module';
import { VoteModule } from 'src/vote/vote.module';

@Module({
  imports: [UsersModule, VoteModule],
  providers: [GraphqlResolver],
})
export class GraphqlModule {}
