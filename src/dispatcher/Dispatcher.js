import Flux from 'flux'; 
import ColorStore from '../store/ColorStore';

const Dispatcher = new Flux.Dispatcher();

Dispatcher.register(function(action){
  switch(action.actionType){
    case 'ADD_COUNTER':
      ColorStore.addCounterHanlder();
      ColorStore.trigger();
      break;
    default:
  }
});

export default Dispatcher;