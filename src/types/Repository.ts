export type RepositoryData = {
  id: number;
  name: string;
  description: string;
  language: string;
  forks_count: number;
  open_issues: number;
  created_at: Date;
  owner: object;
};
