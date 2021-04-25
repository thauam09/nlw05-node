import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    // Verificar se o usuário existe
    const userExists = await this.usersRepository.findOne({
      email,
    });

    if (userExists) {
      //Se existir, retorna user
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });

    //se não existir, salvar no DB
    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }

  async findByUserID(id: string) {
    const user = await this.usersRepository.findOne({
      id,
    });

    return user;
  }
}

export { UsersService };
