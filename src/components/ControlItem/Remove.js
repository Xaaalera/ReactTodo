import React from "react";

class Remove extends React.Component {
    constructor(props) {
        super(props);
        this.index = props.parentProps.index;
        //TODO отказаться от this.first попробовать другой аналог.
        this.first = props.parentProps.first;
        this.onRemoveThis = this.onRemoveThis.bind(this);
    }


    onRemoveThis() {
        this.props.parentProps.onRemove({index: this.index});
    }

    render() {
        return (<button className="todo-line" disabled={this.first}>
            <i className="fa fa-trash" aria-hidden="true"  onClick={this.onRemoveThis} data-key={this.index}/></button>);
    }

}

export default Remove;