export class OsmcFile {
  _id: string;
  name: string;
  isFolder: boolean;
  isEditable: boolean;

  public constructor() { this.isEditable = false; }
}
