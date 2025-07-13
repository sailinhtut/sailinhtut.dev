import { Schema, models, model } from 'mongoose';

const ProjectSchema = new Schema(
	{
		preview_images: [
			{
				imageUrl: { type: String },
				caption: { type: String },
			},
		],
		title: { type: String, required: true },
		description: { type: String },
		content: { type: String },
		githubUrl: { type: String, required: true },
		tags: [{ type: String }],
		createdAt: { type: Date, default: Date.now },
		downloadUrl: {
			androidUrl: { type: String, required: false },
			iOSUrl: { type: String, required: false },
			windowUrl: { type: String, required: false },
			linuxUrl: { type: String, required: false },
			macUrl: { type: String, required: false },
		},
	},
	{ collection: 'my_projects' }
);

export const Project = models.Project || model('Project', ProjectSchema);
