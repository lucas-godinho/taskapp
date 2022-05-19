export interface UserProps {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

export interface UserContextProps {
  users?: UserProps[];
  loading?: boolean;
}
