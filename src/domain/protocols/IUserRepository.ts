import { IRepository } from '@/infra/protocols/IRepository';
import { User } from '../entities/User';
import { UserListOne } from '../usercases/user/list-one';

export interface IUserRepository<Output = User>
  extends IRepository<Output> {
  ListOne(input: UserListOne.Input): Promise<Output | null>;
}
