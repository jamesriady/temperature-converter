import './App.css';
import React from 'react';
import TemperatureCalculator from './containers/TemperatureCalculator';
import TemperatureTranslator from './containers/TemperatureTranslator';
import { CELCIUS, FAHRENHEIT, KELVIN } from './constants/temperature';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftValue: "",
      rightValue: "",
      leftSelect: CELCIUS,
      rightSelect: FAHRENHEIT
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleTranslatorUpdate = this.handleTranslatorUpdate.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  getSelectedTranslator(key, value) {
    switch (key) {
      case 'leftSelect':
        return [value, this.state.rightSelect]
      case 'rightSelect':
        return [this.state.leftSelect, value]
      default:
        return [this.state.rightSelect, this.state.leftSelect]
    }

  }

  handleTranslatorUpdate(key, value) {
    if (key === "") { // swap translator
      this.setState((prevState, props) => {
        return {
          leftSelect: prevState.rightSelect,
          rightSelect: prevState.leftSelect
        }
      })
    } else {
      this.setState({
        [key]: value
      })
    }
    const options = this.getSelectedTranslator(key, value)
    this.calculate(options[0], options[1], this.state.leftValue)
  }

  handleChange(value) {
    this.setState({
      leftValue: value
    })
    this.calculate(this.state.leftSelect, this.state.rightSelect, value)
  }
  
  calculate(from, to, value) {
    let result = ""
    if (value !== "" && !isNaN(Number(value))) {
      value = Number(value)
      switch (from) {
          case CELCIUS:
              result = this.calculateCelciusTo(to, value)
              break
          case FAHRENHEIT:
              result = this.calculateFahrenheitTo(to, value)
              break
          case KELVIN:
              result = this.calculateFahrenheitTo(to, value)
              break
          default:
              break
      }
    }
    if (result !== "") {
      result = Number(result.toFixed(3)).toString()
    }
    this.setState({
      rightValue: result
    })
  }

  calculateCelciusTo(to, value) {
      switch (to) {
          case FAHRENHEIT:
              return (value * 9/5) + 32
          case KELVIN:
              return value + 273.15
          default:
              return value
      }
  }

  calculateFahrenheitTo(to, value) {
      switch (to) {
          case CELCIUS:
              return (value - 32) * 5/9
          case KELVIN:
              return (value - 32) * 5/9 + 273.15
          default:
              return value
      }
  }

  calculateKelvinTo(to, value) {
    switch (to) {
        case CELCIUS:
            return value - 273.15
        case FAHRENHEIT:
            return (value - 273.15) * 9/5 + 32
        default:
            return value
    }
}

  render() {
    return (
      <div className="App">
        <TemperatureTranslator leftSelect={this.state.leftSelect} rightSelect={this.state.rightSelect} onTranslatorUpdate={this.handleTranslatorUpdate} />
        <TemperatureCalculator leftValue={this.state.leftValue} rightValue={this.state.rightValue} onChange={this.handleChange} />
      </div>
    )
  }
  
}

export default App;
