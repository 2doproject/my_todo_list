export interface Routine {
  id?: string;
  isDone?: boolean;
  todo?: string;
  type?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  targetDate?: {
    $gte?: Date;
    $lte?: Date;
  };
}
