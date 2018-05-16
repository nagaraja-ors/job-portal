import * as mongoose from 'mongoose';

const appliedJobsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    jobId: { type: String, required: true },
    experience: { type: String, required: true },
    phoneNo: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
}, { timestamps: true });

export interface AppliedJobsModel extends mongoose.Document {
    name: String;
    jobId: String;
    experience: String;
    phoneNo: String;
    description: String;
    email: String;
}

export default mongoose.model('appliedJobs', appliedJobsSchema);