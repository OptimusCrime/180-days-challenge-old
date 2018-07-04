export const fetchStatusRequest = () => {
  return fetch('/api/status');
};

export const fetchAuthRequest =() => {
  return fetch('/api/auth', {
    credentials: 'same-origin'
  });
};

export const fetchEntryRequest = () => {
  return fetch('/api/entryy');
};

export const updateAuthRequest = password => {
  return fetch('/api/auth', {
    method: 'post',
    credentials: 'same-origin',
    body: JSON.stringify({
      pw: password
    })
  });
};

export const addEntryRequest = comment => {
  return fetch('/api/entry', {
    method: 'put',
    credentials: 'same-origin',
    body: JSON.stringify({
      comment: comment
    })
  });
};
