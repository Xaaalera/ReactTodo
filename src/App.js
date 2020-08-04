import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import TaskList from "./components/TaskComponent/TaskList";
import Create from "./components/TaskComponent/InputType/Create";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.handleOnUpdate = this.handleOnUpdate.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleOnUpdate(data) {
        if(!data){
            return ;
        }
        this.setState(prevState => {
            let newState = prevState.task.map(item => {
                console.log(item);
                console.log(data);
                if (item.index === data.index) {
                    item = Object.assign({}, item, data)
                }
                return item;
            });
            return {tasks: [...newState]}
        })
    }

    handleCreate(data) {
        if (this.getItem(data.index)) {
            return false;
        }
        this.setState(prevState => {
            return {tasks: [...prevState.tasks, data]}
        })
    }

    handleDelete(index) {
        this.setState(prevState => {
            let newState = prevState.tasks;
            newState = newState.filter(item => item.index !== index);
            return {task: [...newState]}
        });
    }

    handleDone(data) {
        if(!data){
            return ;
        }
        data.done = 1;
        this.handleOnUpdate(data);
    }

    getItem(index) {
        return this.state.tasks.find(item => item.index === index);
    }

    render() {

        const progress = this.state.tasks.filter(item => !item.done);
        const done = this.state.tasks.filter(item => item.done);
        return (
            <div className="center-todo">
                <h1 className="todo-header">TODO LIST</h1>
                <Create onCreate={this.handleCreate}/>
                <div className="Tasks">
                    <TaskList
                        tasks={progress}
                        onDelete={this.handleDelete}
                        onUpd={this.handleOnUpdate}
                        onComplete={this.handleDone}
                    />
                </div>
                <div className="Done">
                </div>
            </div>
        );
    }
}


export default App;
