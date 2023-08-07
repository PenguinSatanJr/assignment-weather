import { HttpError } from './http-error';

export type RequestParams = {
  url: string;
  method: 'GET';
  body?: object;
};

const request = async ({ url, body, method }: RequestParams) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    const { statusText, status } = response;

    throw new HttpError(status, statusText);
  }
  if (response.status === 204) {
    return null;
  }
  return response.json();
};

export default request;
