import React from "react";

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index : props.index
        }
        this.onDelete = this.onDelete.bind(this);
        this.onComplete = this.onComplete.bind(this);

    }

    onDelete() {
        this.props.onDelete(this.state.index);
    }

    onComplete() {
        this.props.handlerTaskToProgress(this.state.index);
    }

    render() {
        return (<span>
            <button className="todo-line" onClick={this.onDelete}><i className="fa fa-trash" aria-hidden="true"
            /></button>
            <button className="todo-line" onClick={this.onComplete}><i className="fa  fa-check" aria-hidden="true"
            /></button>
        </span>);
    }

}
export  default  Control;