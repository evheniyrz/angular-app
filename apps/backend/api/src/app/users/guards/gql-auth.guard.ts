import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  // canActivate(
  //   context: ExecutionContext
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   return true;
  // }
  // implements CanActivate

  getRequest(context: ExecutionContext) {
    const ctx: GqlExecutionContext = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
