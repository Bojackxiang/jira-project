export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
}

export interface Project {
  id: number;
  projectId: number;
  personId: number;
  name: string;
}
