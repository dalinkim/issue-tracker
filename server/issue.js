'user strict';

// validIssueStatus and issueFieldType are global objects
// these are a kind of schema definition to indicate what is a valid issue object
const validIssueStatus = {
    New: true,
    Open: true,
    Assigned: true,
    Fixed: true,
    Verified: true,
    Closed: true,
};
const issueFieldType = {
    status: 'required',
    owner: 'required',
    effort: 'optional',
    created: 'required',
    completionDate: 'optional',
    title: 'required',
};
// validateIssue checks against the specification and returns an error if the validation fails.
function validateIssue(issue) {
    for (const field in issueFieldType) {
        const type = issueFieldType[field];
        if (!type) {
            // any fields that do not belong are deleted.
            delete issue[field];
        } else if (type === 'required' && !issue[field]) {
            return `${field} is required.`;
        }
    }
    if (!validIssueStatus[issue.status])
        return `${issue.status} is not a valid status`;

    return null;
}

module.exports = {
    validateIssue: validateIssue
}