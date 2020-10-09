import React, {Component} from "react";
import AddColorForm from "./AddColorForm";
import './css/App.scss'
import ColorList from "./ColorList";
import {addColor, rateColor, removeColor} from "./actions";
import {connect} from "react-redux";

const NewColor = connect(
    null,
    dispatch => ({
        onAddColor(title, color) {
            dispatch(addColor(title, color))
        }
    }))(AddColorForm)


let connectColors = connect(
    state => ({colors: [...state.colors]}),
    dispatch => ({
        onRemove(id) {
            console.log("onRemove")
            dispatch(removeColor(id))
        },
        onRate(id, rating) {
            console.log("onRate")
            dispatch(rateColor(id, rating))
        }
    })
);
const Colors = connectColors(ColorList)

class App extends Component {
    render() {
        return (
            <div className="app">
                <NewColor/>
                <Colors/>
            </div>
        )
    }
}

export default App