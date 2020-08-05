import React from "react";
import Control from "./ControlItem/Control";
import TodoItem from "./InputType/TodoItem";

class TaskList extends React.Component {

    onSubCycle() {
        return this.props.tasks.map(item => {
            return <div key={item.index}>
                <TodoItem value={item.value} index={item.index} handlerUpdate={this.props.onUpd}/>
                <Control index={item.index} onDelete={this.props.onDelete}
                         handlerTaskToProgress={this.props.handlerTaskToProgress}/>
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