import { IRepository } from '@/infra/protocols/IRepository';
import { User } from '../../entities/User';
import { singleton } from 'tsyringe';

@singleton()
export class UserRepository implements IRepository {
  async listOne<Input = { id: string }, Output = {}>(
    input: Input,
  ): Promise<Output> {
    const user: User = {
      id: '1',
      name: 'John Doe',
      password: 'securepassword',
    };
    return user as Output;
  }
}
