import React from "react";

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.index = this.props.index;
        this.onDelete = this.onDelete.bind(this);
        this.onComplete = this.onComplete.bind(this);
        debugger;

    }

    onDelete() {
        this.props.onDelete(this.index)
    }

    onComplete() {
        this.props.onComplete(this.index);
    }


    render() {
        return (<span>
            <button className="todo-line"><i className="fa fa-trash" aria-hidden="true"
                                             onClick={this.onDelete}/></button>
            <button className="todo-line"><i className="fa  fa-check" aria-hidden="true"
                                             onClick={this.onComplete}/></button>
        </span>);
    }

}

export default Control;