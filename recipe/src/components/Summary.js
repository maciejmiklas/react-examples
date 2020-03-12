import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

const Summary = createClass({
        displayName: "Summary",
        propTypes: {
            ingredients: PropTypes.number.isRequired,
            steps: PropTypes.number.isRequired,
            title: PropTypes.string
        },
        getDefaultProps() {
            return {
                ingredients: 0,
                steps: 0,
                title: "[untitled recipe]"
            }
        },
        render() {
            const {ingredients, steps, title} = this.props;
            return (
                <div className="summary">
                    <h1>{title}</h1>
                    <p>
                        <span>{ingredients} Ingredients</span>
                        <span>{steps} Steps</span>
                    </p>
                </div>)
        }
    }
);

export default Summary;