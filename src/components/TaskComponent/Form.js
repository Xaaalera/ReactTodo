import React from "react";
import TodoItem from "./TodoItem";

class Form extends React.Component {

    onSubCycle() {
        return  this.props.progress.map(item => <TodoItem key={item.index}  workerParent={this.props.worker} item={item.value} index={item.index}/> );
    }




    render() {
        return (
            <ul>
                <TodoItem  first={true} workerParent={this.props.worker} />
                {this.onSubCycle()}
            </ul>
        )
    }


}

export default Form;