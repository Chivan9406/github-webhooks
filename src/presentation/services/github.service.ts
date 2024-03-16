import {GitHubIssuePayload, GitHubStarPayload} from '../../interfaces'

export class GithubService {
    constructor() {
    }

    onStar(payload: GitHubStarPayload): string {
        let message: string
        const {action, sender, repository, starred_at} = payload

        return message = `User ${sender.login} ${action} star on ${repository.full_name}`
    }

    onIssue(payload: GitHubIssuePayload): string {
        const {action, issue} = payload

        if (action === 'opened') {
            return `An issue was opened with title: "${issue.title}"`
        }

        if (action === 'closed') {
            return `An issue was closed by ${issue.user.login}`
        }

        if (action === 'reopened') {
            return `An issue with title "${issue.title}" was reopened by ${issue.user.login}`
        }

        return `Unhandled action for the issue event ${action}`
    }
}