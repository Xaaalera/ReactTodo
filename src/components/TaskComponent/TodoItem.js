import React from "react";
import {uid} from "react-uid";
import Remove from "./ControlItem/Remove";


class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.zeroBlock = 0;
        this.state = {
            value: '',
            index: this.zeroBlock,
            done: 0
        }
        if (props.item) {
            this.state.value = props.item;
            this.state.index = props.index;

        }
        this.index = props.index;
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSub = this.onSub.bind(this);
        this.OnFcsOutHandler = this.OnFcsOutHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({value: event.target.value})
    }

    onSub(e) {
        if (e.key !== 'Enter') {
            return null;
        }
        let index = this.state.index === this.zeroBlock ?uid(this.state.value) : this.state.index;
        let update = Object.assign({},this.state,{index});
        this.props.workerParent.update(update);
        let val = this.state.index === this.zeroBlock ? '' : this.state.value;
        this.setState({value: val})
    }

    OnFcsOutHandler() {
        let item = this.props.workerParent.getItem(this.state.index);
        this.setState({value:item? item.value : ''})
    }


    render() {
        return (
            <div><input type="text" className="todo-item todo-line"
                        value={this.state.value}
                        onKeyDown={this.onSub}
                        onChange={this.onChangeHandler}
                        onBlur={this.OnFcsOutHandler}/>
                <Remove  parentProps={this.props}  worker={this.props.workerParent} first={this.state.first} />
            </div>
        )
    }
}

export default TodoItem;