import { getCustomRepository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionsCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsService {
  private connectionsRepository: ConnectionsRepository;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ admin_id, socket_id, user_id, id }: IConnectionsCreate) {
    const connection = this.connectionsRepository.create({
      admin_id,
      id,
      socket_id,
      user_id,
    });

    await this.connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionsRepository.findOne({
      user_id,
    });

    return connection;
  }

  async findAllWithoutAdmin() {
    const connections = await this.connectionsRepository.find({
      where: {
        admin_id: null,
      },
      relations: ["user"],
    });

    return connections;
  }

  async findBySocketId(socket_id: string) {
    const connection = await this.connectionsRepository.findOne({
      socket_id,
    });

    return connection;
  }

  async updateAdminID(user_id: string, admin_id: string) {
    const response = await this.connectionsRepository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where("user_id = :user_id", {
        user_id,
      })
      .execute();

    return response;
  }

  async deleteBySocketId(socket_id: string) {
    await this.connectionsRepository
      .createQueryBuilder()
      .delete()
      .where("socket_id = :socket_id", {
        socket_id,
      })
      .execute();
  }
}

export { ConnectionsService };
