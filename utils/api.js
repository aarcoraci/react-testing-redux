import fetch from 'cross-fetch';
// import store from '../state';

const apiFetch = async function (verb, url, data) {
  //console.log(store.getState().users);
  const request = {
    method: verb,
  };

  if (data) {
    request.body = JSON.stringify(data);
  }

  return await fetch(url, request);
};

export default apiFetch;
