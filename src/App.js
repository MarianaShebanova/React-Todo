import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // Constructor with state
  constructor() {
    // initialize state
    super();
    this.state = {
      tasks: tasks
    };
  }

  // const [groceries, setGroceries] = useState(groceries);
  // const [anotherOne, setAnotherOne] = useState(groceries);

  // Class methods to update state - these methods will use
  // this.setState (comparable to useState setter functions)
  // addItem() {}

  addItem = newItemText => {
    // add new item to the grocery list
    // need to follow immutability rules
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  changeCompleted = item => {
      item.completed = !item.completed;
  }

  clearCompleted = () => {
      const newTasks = this.state.tasks.filter(function (task) {
          return task.completed !== true
      });
    this.setState({
      tasks: newTasks
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoList tasks={this.state.tasks} changeCompleted={this.changeCompleted}/>
        </div>
        <TodoForm addItem={this.addItem} change={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
