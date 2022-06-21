export interface Routine {
  id?: string;
  isDone?: boolean;
  todo?: string;
  type?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  startDate?: any;
  endDate?: any;
  targetDate?: {
    $gte?: Date;
    $lte?: Date;
  };
}
