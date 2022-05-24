import axios from 'axios';
import { Routine } from '../interface/routine';

export default class RoutineStore {
  static create = async (param?: unknown): Promise<Routine> => {
    axios.defaults.baseURL = 'http://localhost:4000';
    const result = await axios.post('/api/routines', param);
    return result.data;
  };

  static update = async (
    id: string | number,
    param: unknown,
  ): Promise<Routine> => {
    axios.defaults.baseURL = 'http://localhost:4000';
    const result = await axios.patch(`/api/routines/${id}`, param);
    return result.data;
  };

  static getList = async (param?: unknown): Promise<Routine> => {
    axios.defaults.baseURL = 'http://localhost:4000';
    const result = await axios.get('/api/routines');
    return result.data;
  };

  static getId = async (id: number): Promise<Routine> => {
    const result = await axios.get(`/api/routines/${id}`);
    return result.data;
  };

  static delete = async (id: number): Promise<Routine> => {
    const result = await axios.delete(`/api/routines/${id}`);
    return result.data;
  };
}
