const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the Issue Filter.'
        );
    }
}

// ES2015 arrow function style with only the return value as an expression.
// No curly braces, and no statements, jsut a JSX expression.
const IssueRow = props => React.createElement(
    'tr',
    null,
    React.createElement(
        'td',
        null,
        props.issue._id
    ),
    React.createElement(
        'td',
        null,
        props.issue.status
    ),
    React.createElement(
        'td',
        null,
        props.issue.owner
    ),
    React.createElement(
        'td',
        null,
        props.issue.created.toDateString()
    ),
    React.createElement(
        'td',
        null,
        props.issue.effort
    ),
    React.createElement(
        'td',
        null,
        props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
    ),
    React.createElement(
        'td',
        null,
        props.issue.title
    )
);

// less concise but needed as the function is not a single expression.
// Initialized a variable called issueRows, 
// which means we need a full-fledged function with a return value.
function IssueTable(props) {
    const issueRows = props.issues.map(issue => React.createElement(IssueRow, { key: issue._id, issue: issue }));
    return React.createElement(
        'table',
        { className: 'bordered-table' },
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'Id'
                ),
                React.createElement(
                    'th',
                    null,
                    'Status'
                ),
                React.createElement(
                    'th',
                    null,
                    'Owner'
                ),
                React.createElement(
                    'th',
                    null,
                    'Created'
                ),
                React.createElement(
                    'th',
                    null,
                    'Effort'
                ),
                React.createElement(
                    'th',
                    null,
                    'Completion Date'
                ),
                React.createElement(
                    'th',
                    null,
                    'Title'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            issueRows
        )
    );
}

class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // default behavior of the form submits the form.
        // This does a GET to the form's action URL, which is the same as the current URL
        // Thus, the effect is to refresh the page even before the event is handled.
        var form = document.forms.issueAdd;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date()
        });
        // clear the form for the next input
        form.owner.value = "";form.title.value = "";
    }
    render() {
        return (
            // onSubmit allows the user to press Enter to add a new issue (compared to onClick)
            React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { name: 'issueAdd', onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
                    React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
                    React.createElement(
                        'button',
                        null,
                        'Add'
                    )
                )
            )
        );
    }

}

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };

        this.createIssue = this.createIssue.bind(this);
        // must bind this method in the constructor since
        // it's not being called from another component 
        // (so that the this variable during the call will be the calling component.)
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch('/api/issues').then(response => {
            if (response.ok) {
                response.json().then(data => {
                    console.log("Total count of records:", data._metadata.total_count);
                    data.records.forEach(issue => {
                        issue.created = new Date(issue.created);
                        if (issue.completionDate) issue.completionDate = new Date(issue.completionDate);
                    });
                    this.setState({ issues: data.records });
                });
            } else {
                response.json().then(error => {
                    alert("Failed to fetch issues:" + error.message);
                });
            }
        }).catch(err => {
            alert("Error in fetching data from server:", err);
        });
    }

    createIssue(newIssue) {
        fetch('/api/issues', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIssue)
        }).then(response => {
            if (response.ok) {
                response.json().then(updatedIssue => {
                    updatedIssue.created = new Date(updatedIssue.created);
                    if (updatedIssue.completionDate) updatedIssue.completionDate = new Date(updatedIssue.completionDate);
                    // state is immutable so it cannot be modified.
                    // instead, concat() function of Array is used to create a copy of the original array
                    const newIssues = this.state.issues.concat(updatedIssue);
                    this.setState({ issues: newIssues });
                });
            } else {
                response.json().then(error => {
                    alert("Failed to add issue: " + error.message);
                });
            }
        }).catch(err => {
            alert("Error in sending data to server: " + err.message);
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Issue Tracker'
            ),
            React.createElement(IssueFilter, null),
            React.createElement('hr', null),
            React.createElement(IssueTable, { issues: this.state.issues }),
            React.createElement('hr', null),
            React.createElement(IssueAdd, { createIssue: this.createIssue })
        );
    }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode); // Render the component inside the content Node