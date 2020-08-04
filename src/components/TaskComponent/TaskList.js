import React from "react";
import Control from "./ControlItem/control";
import TodoItem from "./InputType/TodoItem";

class TaskList extends React.Component {

    onSubCycle() {
        return this.props.tasks.map(item => {
            return <div>
                <TodoItem  key={item.index} value={item.value} index={item.index} handlerUpdate={this.props.onUpd}/>
                <Control index={item.index} onDelete={this.props.onDelete}
                         onComplete={this.props.onComplete}/>
            </div>
        });
    }


    render() {
        return (
            <div>
                {this.onSubCycle()}
            </div>
        )
    }


}

export default TaskList;