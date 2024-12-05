import { UserRepository } from '@/domain/repositories/user/use-repository';
import { inject, singleton } from 'tsyringe';

@singleton()
export class UserService {
  constructor(
    @inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}
}
