const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the issue filter.'
        );
    }
}

class IssueTable extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the issue table.'
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the issue add.'
        );
    }
}

class IssueList extends React.Component {
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
            React.createElement(IssueTable, null),
            React.createElement('hr', null),
            React.createElement(IssueAdd, null)
        );
    }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode); // Render the component inside the content Node