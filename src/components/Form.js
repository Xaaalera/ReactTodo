import React from "react";
import TodoItem from "./TodoItem";
import {uid} from "react-uid";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formTask: new Map()
        }
        this.updateState = this.updateState.bind(this);
    }

    onSubCycle() {
        let arr = [];
        for (let [index, item] of this.state.formTask) {
            arr.push(<TodoItem key={index} item={item} index={index} onValueAdd={this.updateState}/>)
        }
        return arr;
    }

    updateState(props) {
        this.setState(prevState => {
            let newState = prevState.formTask;
            let index = props.index == 'val-zero' ? uid(props.value) : props.index;
            newState.set(index, props.value);
            return {formTask: newState};

        });
    }


    render() {
        return (
            <ul>
                <TodoItem onValueAdd={this.updateState}/>
                {this.onSubCycle()}
            </ul>
        )
    }


}

export default Form;