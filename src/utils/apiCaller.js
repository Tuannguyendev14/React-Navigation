import axios from 'axios';

import * as config from '../redux/constants/config';

export default function callApi(endpoint, method, body) {
  return axios({
    method: method,
    url: `${config.API_URL}/${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}
