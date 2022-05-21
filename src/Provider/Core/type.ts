export interface TaskProps {
  userId?: number | null;
  id?: number | null;
  title?: string;
  completed?: boolean;
}

export interface UserProps {
  id: number | null;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface CoreContextProps {
  theme: any;
  isDark: boolean;
  toggleTheme: Function;
  users: UserProps[] | any;
  activeUser: UserProps | null;
  setActiveUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
  tasks: TaskProps[] | any;
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[] | any>>;
  activeTask: TaskProps | null;
  setActiveTask: React.Dispatch<React.SetStateAction<TaskProps | null>>;
  createTaskUserById: (task: TaskProps) => Promise<void>;
}
