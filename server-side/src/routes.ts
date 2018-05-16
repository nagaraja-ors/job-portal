import * as route from './controllers';
import * as express from 'express';

export class Routes {

    protected basePath: string;

    constructor(NODE_ENV: string) {
    }

    paths(app: express.Application) {
        app.get('/joblist', route.listJobs);
        app.get('/appliedJobs', route.listAppliedJobs);
        app.post('/postJob', route.postJobs);

    }
}