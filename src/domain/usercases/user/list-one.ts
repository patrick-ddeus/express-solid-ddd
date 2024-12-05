import { User } from '../../entities/User';

export namespace UserListOne {
  export type Input = { id: string };
  export type Output = Promise<User | null>;
}
