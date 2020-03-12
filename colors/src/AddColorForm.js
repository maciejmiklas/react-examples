import React from "react";
import {Component} from "react";

// https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
class AddColorForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const {_title, _color} = this.refs;
        e.preventDefault();
        alert(`New color: ${_title.value} ${_color.value}`)
        _title.value = '';
        _color.value = "#000000";
        _title.focus();

    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title...." required/>
                <input ref="_color" type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

export default AddColorForm;
