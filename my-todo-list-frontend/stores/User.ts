import axios from 'axios';
import { User } from '../interface/user';
import RootStore from './RootStore';

export default class UserStore {
  static getList = async (): Promise<void> => {
    const result = await axios.get('/api/users');
    return result.data;
  };
}
