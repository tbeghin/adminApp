export class OsmcFile {
  name: string;
  isFolder: boolean;

  constructor(name?: string, isFolder?: boolean) {
    this.name = name;
    this.isFolder = isFolder;
  }
}