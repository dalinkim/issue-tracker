import React from 'react';

export default class IssueFilter extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      status: props.initFilter.status || '',
      effort_gte: props.initFilter.effort_gte || '',
      effort_lte: props.initFilter.effort_lte || '',
      changed: false,
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortGte = this.onChangeEffortGte.bind(this);
    this.onChangeEffortLte = this.onChangeEffortLte.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      status: newProps.initFilter.status || '',
      effort_gte: newProps.initFilter.effort_gte || '',
      effort_lte: newProps.initFilter.effort_lte || '',
      changed: false,
    });
  }

  // onChange event handlers for the inputs
  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  // masking and preventing any characters other than numeric ones from being input
  onChangeEffortGte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_gte: e.target.value, changed: true });
    }
  }

  // masking and preventing any characters other than numeric ones from being input
  onChangeEffortLte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_lte: e.target.value, changed: true });
    }
  }

  // call setFilter handler with values from the state variables, which reflect the filter values
  applyFilter() {
    const newFilter = {};
    if (this.state.status) newFilter.status = this.state.status;
    if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
    if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
    this.props.setFilter(newFilter);
  }
  clearFilter() {
    this.props.setFilter({});
  }

  resetFilter() {
    this.setState({
      status: this.props.initFilter.status || '',
      effort_gte: this.props.initFilter.effort_gte || '',
      effort_lte: this.props.initFilter.effort_lte || '',
      changed: false,
    });
  }

  // need 1) current applied filter and the current state of the form
  // which reflects the changes the user has made before hitting Apply.
  render() {
    return (
      <div>
        Status:
        <select value={this.state.status} onChange={this.onChangeStatus}>
          <option value="">(Any)</option>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Verified">Verified</option>
          <option value="Closed">Closed</option>
        </select>
        &nbsp;Effort between:
        <input size={5} value={this.state.effort_gte} onChange={this.onChangeEffortGte} />
        &nbsp;-&nbsp;
        <input size={5} value={this.state.effort_lte} onChange={this.onChangeEffortLte} />
        <button onClick={this.applyFilter}>Apply</button>
        <button onClick={this.resetFilter} disabled={!this.state.changed}>Reset</button>
        <button onClick={this.clearFilter}>Clear</button>
      </div>
    );
  }
}

IssueFilter.propTypes = {
  setFilter: React.PropTypes.func.isRequired,
  initFilter: React.PropTypes.object.isRequired,
};
