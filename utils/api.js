/**
 * more info and ideas on how to centralize api and access store
 * https://stackoverflow.com/questions/40151178/attach-custom-headers-before-every-fetch-request-in-react-native
 * https://daveceddia.com/access-redux-store-outside-react/#option-1-export-the-store
 */

import fetch from 'cross-fetch';
// import {store} from '../state';

const apiFetch = async function (verb, url, data) {
  const request = {
    method: verb,
  };

  if (data) {
    request.body = JSON.stringify(data);
  }

  return await fetch(url, request);
};

export default apiFetch;
