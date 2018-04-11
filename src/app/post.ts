export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
