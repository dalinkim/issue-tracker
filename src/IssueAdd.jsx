import React from 'react';

export default class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    // default behavior of the form submits the form.
    // This does a GET to the form's action URL, which is the same as the current URL
    // Thus, the effect is to refresh the page even before the event is handled.
    const form = document.forms.issueAdd;
    // eslint-disable-next-line react/prop-types
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date(),
    });
        // clear the form for the next input
    form.owner.value = ''; form.title.value = '';
  }

  render() {
    return (
    // onSubmit allows the user to press Enter to add a new issue (compared to onClick)
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
