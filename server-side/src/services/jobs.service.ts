
import { default as jobs, JobsModel } from '../models/jobs';
import { default as appliedJobs, AppliedJobsModel } from '../models/appliedJobs';
import { parseErrors } from '../utils/errorParser';

export const getAllJobs = ({ }, callback: any) => {
    jobs.find()
        .then((jobs: JobsModel[]) => callback(undefined, jobs))
        .catch((jobs: any) => callback(parseErrors(jobs.errors), undefined));
};

export const getAppliedJobs = ({ }, callback: any) => {
    appliedJobs.find()
        .then((appliedJobs: AppliedJobsModel[]) => callback(undefined, appliedJobs))
        .catch((appliedJobs: any) => callback(parseErrors(appliedJobs.errors), undefined));
};

export const postJob = (data: AppliedJobsModel, callback: any) => {
    const newJob = new appliedJobs(
        {
            name: data.name,
            jobId: data.jobId,
            experience: data.experience,
            phoneNo: data.phoneNo,
            email: data.email,
            description: data.description
        }
    );
    newJob.save()
        .then((appliedJobs: AppliedJobsModel) => callback(undefined, appliedJobs))
        .catch((appliedJobs: AppliedJobsModel) => callback(parseErrors(appliedJobs.errors), undefined));
};