import { user } from '../dataBase/data'
export default (state= [], action) => {
  switch(action.type) {
    case 'INITIAL': return state.push(user)
    default : return state;
  }
}