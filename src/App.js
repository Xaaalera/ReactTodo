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
        this.handlerTaskToProgress = this.handlerTaskToProgress.bind(this);
    }

    handleOnUpdate(data) {
        this.setState(prevState => {
            let newState = prevState.tasks.map(item => {
                if (item.index === data.index) {
                    item = Object.assign({}, item, data)
                }
                return item;
            });
            return {tasks: [...newState]}
        })
    }

    handleCreate(data) {
        this.setState(prevState => {
            return {tasks: [...prevState.tasks, data]}
        })
    }

    handleDelete(index) {
        this.setState(prevState => {
            let newState = prevState.tasks;
            newState = newState.filter(item => item.index !== index);
            return {tasks: [...newState]}
        });
    }

    handlerTaskToProgress(index) {
        let data = this.getItem(index);
        data.done = !data.done;

        this.handleOnUpdate(data);
    }

    getItem(index) {
        return this.state.tasks.find(item => item.index === index);
    }

    render() {

        const progress = this.state.tasks.filter(item => !item.done);
        const done = this.state.tasks.filter(item => item.done);
        return (
            <div>
                <div className="center-todo">
                    <h1 className="todo-header">TODO LIST</h1>
                    <Create onCreate={this.handleCreate}/>
                    <div className="Tasks">
                        <TaskList
                            tasks={progress}
                            onDelete={this.handleDelete}
                            onUpd={this.handleOnUpdate}
                            handlerTaskToProgress={this.handlerTaskToProgress}
                        />
                    </div>
                </div>
                <div className="center-todo">
                    <h1 className="todo-header">Done List</h1>
                    <div className="Done">
                        <TaskList
                            tasks={done}
                            onDelete={this.handleDelete}
                            onUpd={this.handleOnUpdate}
                            handlerTaskToProgress={this.handlerTaskToProgress}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
