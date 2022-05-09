import { User } from '../interface/user';
import RootStore from './RootStore';

export default class UserStore extends RootStore<User> {
  modelName: string;
  static getList: any;
  constructor() {
    super();
    this.modelName = 'users';
  }
}
