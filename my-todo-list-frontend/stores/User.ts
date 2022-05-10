import axios from 'axios';

export default class UserStore {
  static getList = async (): Promise<void> => {
    axios.defaults.baseURL = 'http://localhost:4000';
    const result = await axios.get('/api/users');
    return result.data;
  };
}
