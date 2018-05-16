import * as mongoose from 'mongoose';

const jobsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    location: { type: String },
    experience: { type: Number },
    orgName: { type: String }
}, { timestamps: true });

export interface JobsModel extends mongoose.Document {
    title: string;
    description: string;
    isActive: boolean;
    location: string;
    experience: number;
    orgName: string;
}

export default mongoose.model('jobs', jobsSchema);