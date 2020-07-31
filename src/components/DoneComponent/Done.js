import React from "react";

class Done extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            done: new Map()
        }
    }

    onSubCycle() {
        let arr = [];
        for (let [index, item] of this.state.done) {
            arr.push(<input type="text" className="todo-item todo-line" key={index} item={item} index={index}
                            disabled={true}/>)
        }
        return arr;
    }

    render() {
        return (
            <ul>
                {this.onSubCycle()}
            </ul>
        )
    }
}

export default Done;