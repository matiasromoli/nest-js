import * as mongoose from 'mongoose';
mongoose.set('strictQuery', false);

import { LoggerService } from '../../config/logger';
const logg = new LoggerService();

let instance = null;

export class mongoClient {
  async connected() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      return logg.Log('DB connected');
    } catch (error) {
      return logg.Error(error);
    }
  }
  async disconnect() {
    try {
      await (await mongoose.connect(process.env.MONGO_URI)).connection.close();
      return logg.Log('Server disconnected');
    } catch (error) {
      return logg.Error(error);
    }
  }
  static getInstance() {
    if (!instance) {
      instance = new mongoClient();
    }

    return instance;
  }
}
