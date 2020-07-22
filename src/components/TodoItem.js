import React from "react";
import {uid} from "react-uid";


class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.zeroBlock = uid('zero');
        this.state = {
            value: '',
            index: this.zeroBlock
        }
        if(props.item){
            this.state.value = props.item;
            this.state.index = props.index;

        }
        this.index = props.index;
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSub = this.onSub.bind(this);
    }

    onChangeHandler(event) {
        this.setState({value: event.target.value})
    }
    onSub(e) {
        if (e.key !== 'Enter') {
            return null;
        }
        let idx = e.target.dataset.index;
        this.props.onValueAdd({index: idx,  value: this.state.value});
        let val  = idx === this.zeroBlock ? '' :  this.state.value;
        this.setState({value:val})
    }


    render() {
        return (
            <div><input type="text"  className="todo-item todo-line"
                        value={this.state.value}
                        data-index ={this.state.index}
                        onKeyDown={this.onSub}
                        onChange={this.onChangeHandler}/>
                {/*<button className="todo-line">*/}
                {/*    <i className="fa fa-trash" aria-hidden="true" data-key={index}/></button>*/}
            </div>
        )
    }
}

export default TodoItem;