import { Module } from '@nestjs/common';
import { GraphqlResolver } from './graphql.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [GraphqlResolver],
})
export class GraphqlModule {}
