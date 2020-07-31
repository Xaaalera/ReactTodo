import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Form from "./components/TaskComponent/Form";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: []
        }
        this.onStateUpdate = this.onStateUpdate.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.getItem = this.getItem.bind(this);
    }
    onStateUpdate(props) {
        this.setState(prevState => {
            let newState = prevState.task;
            if(newState.filter(item => item.index === props.index).length) {
                newState = newState.map(x => Object.assign(x, [props].find(y => y.index === x.index)));
            }else{
                newState = [...newState,props];
            }
            return {task:[...newState]};
        });
    }
    removeItem(index) {
        this.setState(prevState => {
            let newState = prevState.task;
            newState  =  newState.filter(item => item.index !== index);
            return {task:[...newState]}
        });
    }
    getItem(index){
         return this.state.task.find(item => item.index === index);
    }

    render() {

        const progress = this.state.task.filter(item => !item.done);
        const done = this.state.task.filter(item => item.done);
        const workInterface = {update: this.onStateUpdate,removeItem: this.removeItem , getItem : this.getItem};
        return (
            <div className="center-todo">
                <h1 className="todo-header">TODO LIST</h1>
                <div className="Tasks">
                    <Form progress={progress}   worker={workInterface} />
                </div>
                <div className="Done">
                </div>
            </div>
        );
    }
}


export default App;
