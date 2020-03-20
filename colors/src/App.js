import React, {Component} from "react";
import AddColorForm from "./AddColorForm";
import {v4} from 'uuid'
import StarRating from "./StarRating";

const Color = ({title, color, rating = 0, onRemove = f => f, onRate = f => f}) => {
    return (
        <section className="color">
            <button onClick={onRemove}>X</button>
            <h1>{title}</h1>
            <div className="color" style={{backgroundColor: color}}>{rating}</div>
            <div>
                <StarRating starsSelected={rating} onRate={onRate}/>
            </div>
        </section>)
};

const ColorList = ({colors = [], onRemove = f => f, onRate = f => f}) =>
    <div className="colors-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id} {...color} onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)}/>)}
    </div>;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: []
        };
        this.addColor = this.addColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color => (color.id !== id) ? color : {...color, rating});
        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(color => color.id !== id)
        this.setState({colors})
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ];
        this.setState({colors})
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="app">
                <AddColorForm onNewColor={this.addColor}/>
                <ColorList colors={this.state.colors} onRemove={this.removeColor} onRate={this.rateColor}/>
            </div>
        )
    }
}

export default App