export function fetchStatusRequest() {
  return fetch('/api/status');
}

export function fetchAuthRequest() {
  return fetch('/api/auth', {
    credentials: 'same-origin'
  });
}

export function fetchEntryRequest() {
  return fetch('/api/entry');
}

export function updateAuthRequest(password) {
  return fetch('/api/auth', {
    method: 'post',
    credentials: 'same-origin',
    body: JSON.stringify({
      pw: password
    })
  });
}

export function addEntryRequest(comment) {
  return fetch('/api/entry', {
    method: 'put',
    credentials: 'same-origin',
    body: JSON.stringify({
      comment: comment
    })
  });
}
