import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, user_id, text } = request.body;

    const messagesService = new MessagesService();

    try {
      const message = await messagesService.create({
        admin_id,
        user_id,
        text,
      });

      return response.json(message);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const messagesService = new MessagesService();

      const list = await messagesService.listByUser(id);

      return response.json(list);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { MessagesController };
