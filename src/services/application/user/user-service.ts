import { UserRepository } from "@/domain/repositories/user/use-repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository){}
}