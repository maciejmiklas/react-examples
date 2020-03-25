import React, {Component} from "react";
import AddColorForm from "./AddColorForm";
import {v4} from 'uuid'
import './css/App.scss'
import ColorList from "./ColorList";

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