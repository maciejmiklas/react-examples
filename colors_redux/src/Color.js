import React, {Component} from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";
import './css/Color.scss'

class Color extends Component {
    constructor(props) {
        super(props);
        this.style = {backgroundColor: "#CCC"}
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.rating !== nextProps.rating
    }

    render() {
        const {title, rating, color, onRemove, onRate} = this.props;
        return (
            <section className="color" style={this.style}>
                <button onClick={onRemove}>X</button>
                <h1>{title}</h1>
                <div className="color" style={{backgroundColor: color}}>{rating}</div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>)
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};

Color.defaultPorps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f => f,
    onRemove: f => f
};

export default Color;