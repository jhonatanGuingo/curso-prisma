
export type ApplicationError = {
  name: string;
  message: string;
};

export type Post = {
  id: number;
  username: string;
  title: string;
  content: string;
  createdAt?: Date;
}