import callApi from './utils';

export const register = data => {
  return callApi('/auth/register', 'POST', data);
};
