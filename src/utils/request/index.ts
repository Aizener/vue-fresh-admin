import Axios from 'axios';

const axios = Axios.create({
  baseURL: '',
  timeout: 10000,
});

axios.interceptors.request.use(config => {
  return config;
});

axios.interceptors.response.use(result => {
  if (result.status === 200) {
    return result.data;
  }
  return Promise.reject(result);
}, error => {
  return Promise.reject(error);
});

export const get = async <T = unknown>(url: string, params = {}) => {
  const result = await axios.get<string, ExpandObject<T>>(url, params); 
  return result;
}

export const post = async <T = unknown>(url: string, data = {}) => {
  const result = await axios.get<string, ExpandObject<T>>(url, { data }); 
  return result;
}

export const put = async <T = unknown>(url: string, data = {}) => {
  const result = await axios.get<string, ExpandObject<T>>(url, { data: data }); 
  return result;
}

export const del = async <T = unknown>(url: string, data = {}) => {
  const result = await axios.delete<string, ExpandObject<T>>(url, { data: data}); 
  return result;
}
