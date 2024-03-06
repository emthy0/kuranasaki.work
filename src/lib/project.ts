export enum EProjectStatus {
  INPROGRESS = "In Progress",
  COMPLETED = "Completed",
  ONHOLD = "On Hold",
  ABANDON = "Abandoned",
}

export interface IProject {
  title: string
  description: string
  link: string
  status: EProjectStatus
}
