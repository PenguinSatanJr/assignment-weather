import request from './request';

const get = async <T>(url: string): Promise<T> => {
  const data = await request({ method: 'GET', url });

  return data as T;
};

export default get;
