import Dispatcher from '../dispatcher/Dispatcher';

 const ButtonAction = {
  addCounter: ()=> {
    Dispatcher.dispatch({
      actionType: 'ADD_COUNTER'
    })
  }
}
export default ButtonAction;