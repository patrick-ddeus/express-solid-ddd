import { container, singleton } from 'tsyringe';
import { User } from '../../entities/User';
import { Repository } from 'typeorm';
import { AppDataSource } from '@/infra/database/datasource';
import { IUserRepository } from '../../protocols/IUserRepository';
import { UserListOne } from '../../usercases/user/list-one';

@singleton()
export class UserRepository implements IUserRepository<User> {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async ListOne(input: UserListOne.Input): UserListOne.Output {
    const user = await this.repository.findOne({ where: { id: +input.id } });

    return user;
  }
}
