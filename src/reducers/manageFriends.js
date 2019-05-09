export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const index = state.friends.indexOf(state.friends.find(f => f.id === action.id));
      return { ...state, friends: [...state.friends.slice(0, index), ...state.friends.slice(index + 1)] };
    default:
      return state;
  }
}
