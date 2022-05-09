import axios from 'axios';

export default class RootStore<T> {
  modelName!: string;

  // 등록
  create = async (param: T): Promise<T> => {
    const result = await axios.post(`/${this.modelName}`, param);
    return result.data;
  };

  //수정
  update = async (id: string | number, param: T): Promise<T> => {
    const result = await axios.patch(`/${this.modelName}/${id}`, param);
    return result.data;
  };

  //조회
  getList = async (param?: T): Promise<T> => {
    const result = await axios.get(
      `localhost:4000/api/${this.modelName}`,
      param,
    );
    return result.data;
  };

  // 1건 조회
  getId = async (id: number): Promise<T> => {
    const result = await axios.get(`/${this.modelName}/${id}`);
    return result.data;
  };
  //삭제
  delete = async (id: number): Promise<T> => {
    const result = await axios.delete(`/${this.modelName}/${id}`);
    return result.data;
  };
}
