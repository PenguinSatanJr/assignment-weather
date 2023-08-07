export class HttpError extends Error {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

export const retry = (failureCount: number, error: unknown) => {
  const maxNumberOfRetries = 3;

  return (
    error instanceof HttpError &&
    error.code >= 500 &&
    failureCount < maxNumberOfRetries
  );
};

export default retry;
