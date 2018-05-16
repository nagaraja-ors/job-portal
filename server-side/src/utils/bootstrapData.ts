import { default as jobs, JobsModel } from '../models/jobs';

export const createJobs = () => {
    jobs.count({}, function (err, records) {
        if (!records) {
            new jobs(
                {
                    title: 'UI Developer',
                    description: 'UI Developer Description',
                    isActive: true,
                    location: 'TEXAS',
                    experience: 5,
                    orgName: 'GOOGLE'
                }
            )
                .save()
                .then((jobs: JobsModel) => console.log('Created Jobs: title: ', jobs.title))
                .catch(err => console.log('Error caught while creating Jobs: ', err));
        } else {
            console.log('Jobs records already exist');
        }
    });
};
