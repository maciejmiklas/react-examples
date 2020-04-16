import React, {Component} from "react";
import PropTypes from 'prop-types';
import './css/AddColorForm.scss';

class AddColorForm extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const {_title, _color} = this.refs;
        e.preventDefault();
        this.props.onAddColor(_title.value, _color.value);
        _title.value = '';
        _color.value = "#000000";
        _title.focus();
    }

    render() {
        return (
            <form className="add-color" onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title...." required/>
                <input ref="_color" type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onAddColor: PropTypes.func,
};

AddColorForm.defaultPorps = {
    onAddColor: f => f,
};

export default AddColorForm;
