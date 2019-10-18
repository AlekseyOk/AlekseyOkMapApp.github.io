export function addUser(name, password) {
    return {
        type: 'ADD_USER',
        name,
        password
    }
  }