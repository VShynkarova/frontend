export class Todo {
  id: number;
  title = '';
  details = '';
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
