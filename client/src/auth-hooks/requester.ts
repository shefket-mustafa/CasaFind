type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestData = Record<string, any> | undefined;
type NavigateFunction = (path: string) => void;

let navigateFunction: NavigateFunction | null = null;

export const setNavigate = (navigate: NavigateFunction) => {
  navigateFunction = navigate;
};

export const requester = async <T = any>(
  method: HttpMethod,
  url: string,
  data?: RequestData
): Promise<T> => {
  const options: RequestInit = {
    method,
    headers: {},
  };

  if (method !== 'GET' && data) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(data);
  }

  const authData = localStorage.getItem('auth');
  if (authData) {
    const parsed = JSON.parse(authData);
    const token = parsed?.accessToken;

    if (token) {
      options.headers = {
        ...options.headers,
        'X-Authorization': token,
      };
    }
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    if (response.status === 403 || response.status === 401) {
      localStorage.removeItem('auth');
      if (navigateFunction) {
        navigateFunction('/login');
      }
    }

    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return (await response.json()) as T;
};

// Keep your original structure with added types
export const get = <T = any>(url: string, options?: RequestData) =>
  requester<T>('GET', url, options);

export const post = <T = any>(url: string, data: RequestData) =>
  requester<T>('POST', url, data);

export const put = <T = any>(url: string, data: RequestData) =>
  requester<T>('PUT', url, data);

export const del = <T = any>(url: string) =>
  requester<T>('DELETE', url);
