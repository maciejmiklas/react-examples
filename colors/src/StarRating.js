import React, {Component} from "react";
import PropTypes from 'prop-types';
import './css/StarRating.scss'

const Star = ({selected = false, onClick = f => f}) =>
    <div className={selected ? "star selected" : "star"} onClick={onClick}></div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

class StarRating extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {totalStars, onRate, starsSelected} = this.props;
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i} selected={i < starsSelected} onClick={() => onRate(i + 1)}/>)}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

StarRating.defaultProps = {
    totalStars: 5,
    starsSelected: 0,
    onRate: f => f
};

StarRating.propTypes = {
    totalStars: PropTypes.number,
    starsSelected: PropTypes.number,
    onRate: PropTypes.func
};

export default StarRating;