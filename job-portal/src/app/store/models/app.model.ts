

export interface jobDetails{
    title:string,
    description: string,
    isActive: boolean,
    location: string,
    experience: number,
    orgName: string,
    jobs?:any
}
export interface appliedJobDetails{
    name: String,
    jobId: String,
    experience: String,
    phoneNo: String,
    description: String,
    email: String
}
export interface AppStore {
    jobsList?: jobDetails[],
    appliedJobRecord: appliedJobDetails[]
}
