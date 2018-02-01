export class AddFolderRequest {
  source: string;
  folder: string;
  constructor(source: string, folder: string){
    this.folder = folder;
    this.source = source;
  }
}
