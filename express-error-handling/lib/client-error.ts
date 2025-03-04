// here we are extending the existing Error class by adding
// new parameters to be called with ClientError(status, message)
export class ClientError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}
