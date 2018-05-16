import { Request, Response } from 'express';
import { default as jobs, JobsModel } from '../models/jobs';
import { default as appliedJobs, AppliedJobsModel } from '../models/appliedJobs';
import { getAllJobs , getAppliedJobs, postJob } from '../services/jobs.service';

export let listJobs = (req: Request, res: Response) => {
    getAllJobs({}, function (err: any, jobs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({ jobs });
    });
};

export let listAppliedJobs = (req: Request, res: Response) => {
    getAppliedJobs({}, function (err: any, appliedJobs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({ appliedJobs });
    });
};

export let postJobs = (req: Request, res: Response) => {
    if (!req.body) return res.status(400).json({errors: {global: 'Invalid JSON format'}});
    postJob(req.body, function (err: any, appliedJobs: AppliedJobsModel) {
        if (err) {
            return res.status(400).json(err);
        } else {
            getAppliedJobs({}, function (err: any, appliedJobs: any) {
                if (err) {
                    res.status(400).json(err);
                    return;
                }
                res.json({ appliedJobs });
            });
        }
    });
};

