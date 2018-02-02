export class HandleError {
  static createError(error: any): string {
    console.error('An error occurred', error);
    return error.message || error;
  }
}
