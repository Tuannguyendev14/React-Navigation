import axios from 'axios';
import * as config from './config';

export default function ApiMockApi(endpoint, method, body = {}) {
  return axios({
    method: method,
    url: `${config.API_URL_MOCKAPI}/${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}
