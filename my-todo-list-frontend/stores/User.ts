import axios from 'axios';
import { User } from '../interface/user';

export default class UserStore {
  static create = async (param?: unknown): Promise<User> => {
    axios.defaults.baseURL = 'http://localhost:4000';
    const result = await axios.post('/api/users', param);
    return result.data;
  };

  static update = async (
    id: string | number,
    param: unknown,
  ): Promise<User> => {
    axios.defaults.baseURL = 'http://localhost:4000';
    const result = await axios.patch(`/api/users/${id}`, param);
    return result.data;
  };

  static getList = async (param?: unknown): Promise<User> => {
    axios.defaults.baseURL = 'http://localhost:4000';
    const result = await axios.get('/api/users');
    return result.data;
  };

  static getId = async (id: number): Promise<User> => {
    const result = await axios.get(`/api/users/${id}`);
    return result.data;
  };

  static delete = async (id: number): Promise<User> => {
    const result = await axios.delete(`/api/users/${id}`);
    return result.data;
  };
}
