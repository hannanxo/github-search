export type RepositoryData = {
  id: number;
  full_name: string;
  name: string;
  description: string;
  language: string;
  forks_count: number;
  open_issues: number;
  created_at: Date;
  html_url: string;
  owner: {
    avatar_url: string;
  };
};
