export interface User {
  id?: string;
  identifier?: string;
  name?: string;
  password?: string;
  email?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
}
