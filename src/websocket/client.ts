import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessagesService";

interface IParams {
  email: string;
  text: string;
}

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    console.log(socket_id);
    const { email, text } = params as IParams;
    let user_id = null;

    const userExists = await usersService.findByEmail(email);

    // Salvar a conexão com o socket_id, user_id,
    if (!userExists) {
      const user = await usersService.create(email);

      await connectionsService.create({
        socket_id,
        user_id: user.id,
      });

      user_id = user.id;
    } else {
      //Verifica se já existe alguma conexão com esse usuário
      user_id = userExists.id;

      const connection = await connectionsService.findByUserId(userExists.id);

      if (!connection) {
        await connectionsService.create({
          socket_id,
          user_id: userExists.id,
        });
      } else {
        connection.socket_id = socket_id;
        connectionsService.create(connection);
      }
    }

    const message = await messagesService.create({
      text,
      user_id,
    });
  });
});
