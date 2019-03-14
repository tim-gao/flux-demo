import events from 'events';
const EventEmitter = events.EventEmitter;

const ColorStore = Object.assign({},EventEmitter.prototype,{
  count: 0,

  color: 'red',

  getAll: function(){
    return {
      color: this.color,
      count: this.count
    }
  },

  addCounterHanlder : function(){
    this.count ++;
    this.color = this.color ==='red' ? 'green' : 'red'
  },
  attachAddCountEvent: function(callback,context) {
    this.on('add',()=>{
      callback.call(context);
    })
  },
  removeAddCountEvent: function(callback,context){
    this.removeListener('add',()=>{
      callback.call(context);
    });
  },
  trigger: function() {
    this.emit('add');
  }
})

export default ColorStore;