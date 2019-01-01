import React from 'react';

export default class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ value: this.format(newProps.value) });
  }

  onBlur(e) {
    this.props.onChange(e, this.unformat(this.state.value));
  }

  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  // converting naturla data type to a string
  // if null, shown as empty string
  format(num) {
    return num != null ? num.toString() : '';
  }

  // empty string would result in isNaN being true
  unformat(str) {
    const val = parseInt(str, 10);
    return isNaN(val) ? null : val;
  }

  // this.props is placed after the type but before the others
  // indicating which properties can be overridden by the parent
  render() {
    return (
      <input
        type="text" {...this.props} value={this.state.value}
        onBlur={this.onBlur} onChange={this.onChange}
      />
    );
  }
}

NumInput.propTypes = {
  value: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
};
