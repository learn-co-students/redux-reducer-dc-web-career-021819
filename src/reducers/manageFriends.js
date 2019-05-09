export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      state = {
        friends: [...state.friends, action.friend]
      }
      return state
    case "REMOVE_FRIEND":
      let newFriends = [...state.friends]

      for( let i = 0; i < newFriends.length; i++){
         if ( newFriends[i].id === action.id) {
           newFriends.splice(i, 1);
         }
      }
      state = {
        friends: newFriends
      }
      return state
    default:
      return state
  }

}
