export interface PullRequest {
    title: string;
    comments_url: string;
    id: number;
    user: User;
    commentCount: number;
    body: string;
  }

  export interface Comment {
    url: string;
    issue_url: string;
    id: number;
    user: User;
    created_at: string;
    updated_at: string;
    body: string;
  }

  export interface User {
    id: number;
    login: string;
  }
  