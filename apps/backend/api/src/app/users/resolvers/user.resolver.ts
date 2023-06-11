import { Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { CurrentUser } from '../decorator/user.decorator';
import { UserEntity } from '../entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  async whoAmI(@CurrentUser() user: UserEntity): Promise<UserEntity> {
    return this.userService.findById(user.id);
  }
}
