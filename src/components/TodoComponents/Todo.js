import React from 'react';

//const Todo = props => {
  //  function handleClick(e) {
    //    e.preventDefault();
      //  props.changeCompleted(props.item);
        //console.log(props.item);
    //}
    //return (
      //  <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
        //    <p >{props.item.task}</p>
        //</div>
    //);
//};
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            completed: false, 
            item: props.item,
            change: props.changeCompleted
         };
        /// This binding is necessary to make `this` work in the callback
       this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e);
        this.state.change(this.state.item);
        this.setState(state => ({
            completed: !state.completed
        }
        ));
    }

    render() {
        return (
            <div onClick={this.handleClick} className={`item${this.state.completed ? ' completed' : ''}`} >
                {this.state.item.task}
            </div>
        );
    }
}

export default Todo;
