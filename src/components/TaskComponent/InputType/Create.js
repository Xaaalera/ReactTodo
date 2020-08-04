import React from "react";
import {uid} from "react-uid";


class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSub = this.onSub.bind(this);
    }

    onChangeHandler(event) {
        this.setState({value: event.target.value})
    }

    onSub(e) {
        if(e.key !=='Enter'){
            return ;
        }
        let index = uid(this.state.value);
        let update = Object.assign({}, this.state, {index});
        this.props.onCreate(update);
    }


    render() {
        return (
            <div><input type="text" className="todo-item todo-line" onKeyUp={this.onSub} onChange={this.onChangeHandler}/>
            </div>
        )
    }
}

export default Create;