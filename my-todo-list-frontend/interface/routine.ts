export interface Routine {
  id?: string;
  isDone?: boolean;
  todo?: string;
  type?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  startDate?: Date | string | undefined;
  endDate?: Date | string | undefined;
  targetDate?: {
    $gte?: Date;
    $lte?: Date;
  };
}
