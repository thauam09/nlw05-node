import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    // Verificar se o usuário existe
    const userExists = await usersRepository.findOne({
      email,
    });

    if (userExists) {
      //Se existir, retorna user
      return userExists;
    }

    const user = usersRepository.create({
      email,
    });

    //se não existir, salvar no DB
    await usersRepository.save(user);

    return user;
  }
}

export { UserService };
