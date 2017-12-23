const defaultState = {
  name: 'derp derp der'
};

const display = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return 'foobar';
    default:
      return state
  }
};

export default display;
