const isBrowser = typeof window !== 'undefined';

export const useHttp = (baseUrl, needToken = false) => {
  const client = new http(baseUrl);

  client.interceptors.request = async (request) => {
    if (isBrowser === true && needToken === true) {
      const token = localStorage.getItem('token');
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return request;
  };

  client.interceptors.response = async (response) => {
    try {
      if (response.status == 401) {
        return {
          response: { message: 'unauthorized' },
          success: false,
        };
      }

      if (response.status == 403) {
        return {
          response: { message: 'forbidden' },
          success: false,
        };
      }

      if (!response.ok && response.status !== 400) {
        return Promise.reject(response);
      }

      const content = await response.text();
      const json = content.length > 0 ? JSON.parse(content) : {};

      return { response: json, success: response.ok };
    } catch (error) {
      // underlying logic error. Eg: json parse error
      // return Promise.reject(error.message);
      return {
        error: error.message || 'Something bad happened',
        response: { message: 'generalError' },
      };
    }
  };

  return client;
};

class http {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    console.log('new http');
  }

  interceptors = {
    request: undefined,
    response: undefined,
  };

  createRequestWithInterceptor = async (method, body = undefined) => {
    const request = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    };
    if (body) request.body = JSON.stringify(body);
    if (typeof this.interceptors.request === 'function') {
      return await this.interceptors.request(request);
    }
    return request;
  };

  fetchWithInterceptor = async (url, request) => {
    if (typeof this.interceptors.response === 'function')
      return await fetch(url, request).then(this.interceptors.response);
    return await fetch(this.baseUrl + pathAndQuery, request);
  };

  get = async (pathAndQuery) => {
    const request = await createRequestWithInterceptor('GET');
    return await this.fetchWithInterceptor(
      this.baseUrl + pathAndQuery,
      request
    );
  };

  post = async (pathAndQuery, body) => {
    const request = await createRequestWithInterceptor('POST', body);
    return await this.fetchWithInterceptor(
      this.baseUrl + pathAndQuery,
      request
    );
  };

  put = async (pathAndQuery, body) => {
    const request = await createRequestWithInterceptor('PUT', body);
    return await this.fetchWithInterceptor(
      this.baseUrl + pathAndQuery,
      request
    );
  };

  delete = async (pathAndQuery, body) => {
    const request = await createRequestWithInterceptor('DELETE', body);
    return await this.fetchWithInterceptor(
      this.baseUrl + pathAndQuery,
      request
    );
  };
}
