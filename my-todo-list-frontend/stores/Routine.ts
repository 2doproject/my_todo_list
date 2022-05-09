import { Routine } from '../interface/routine';
import RootStore from './RootStore';

export default class RoutineStore extends RootStore<Routine> {
  modelName: string;
  constructor() {
    super();
    this.modelName = 'routines';
  }
}
