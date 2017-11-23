export class Treeview {
  _id: string;
  name: string;
  url: string;
  description: string;
  icon: string;
  isDisabled: boolean;
  parent?: string;
  children?: Array<Treeview>;
  grade: number;
}
