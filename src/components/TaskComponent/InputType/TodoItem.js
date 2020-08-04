import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            index: props.index,
        }
        this.prevValue = this.props.value;
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSub = this.onSub.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChangeHandler(event) {
        this.setState({value: event.target.value})
    }

    onSub(e) {
        if (e.key !== 'Enter') {
            return false;
        }
        this.prevValue = this.state.value;
        this.props.handlerUpdate(this.state);
    }

    onBlur() {
        this.setState(() => {
            return {value: this.prevValue}
        });
    }


    render() {
        return (
            <div><input type="text" className="todo-item todo-line" value={this.state.value} onBlur={this.onBlur}
                        onKeyUp={this.onSub} onChange={this.onChangeHandler}/>
            </div>
        )
    }
}

export default TodoItem;