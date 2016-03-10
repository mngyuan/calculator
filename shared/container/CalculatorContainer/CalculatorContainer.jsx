import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import NumberButton from '../../components/Calculator/NumberButton';
import NumberDisplay from '../../components/Calculator/NumberDisplay';
import ClearButton from '../../components/Calculator/ClearButton';
import _ from 'lodash';

function mapStateToProps(store) {
  return {
    numbers: (store.calculatorReducer.numbers),
  };
}

class CalculatorContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleNumberPress = this.handleNumberPress.bind(this);
    this.handleClearPress = this.handleClearPress.bind(this);
  }

  handleNumberPress(number) {
    this.props.dispatch(Actions.pressNumber(number));
  }

  handleClearPress() {
    this.props.dispatch(Actions.pressClear());
  }

  render() {
    let buttons = _.range(10).map((_, i) =>
      <NumberButton number={i} key={i} press={this.handleNumberPress} />
    );
    return (
      <div>
        { buttons }
        <NumberDisplay number={this.props.numbers} />
        <ClearButton press={this.handleClearPress} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CalculatorContainer);
