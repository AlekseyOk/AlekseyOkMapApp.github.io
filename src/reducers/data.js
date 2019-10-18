const initialState = {
    users: []
  }
  
  export function dataReducer(state = initialState.users, action) {
    switch (action.type) {
      case 'ADD_USER':
        return [ 
            ...state, { 
                name: action.name, 
                password: action.password
            }
        ];
  
      default:
        return state
    }
}