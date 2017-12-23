

export function foobar() {
  return dispatch => dispatch(() => {
    console.log('foobar');
  });
}
