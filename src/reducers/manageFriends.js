export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
      break;
    case "REMOVE_FRIEND":
      let friendIndex = state.friends.findIndex(f => f.id === action.id);
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, friendIndex),
          ...state.friends.slice(friendIndex + 1)
        ]
      };
      break;
    default:
      return state;
  }
}
