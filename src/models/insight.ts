import { Schema, model, models } from 'mongoose';

const InsightSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		content: { type: String, required: true },
		heading_image_url: { type: String, required: false },
		writer: { type: String, required: true },
		tags: [{ type: String }],
		view_count: { type: Number, default: 0 },
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
		collection: 'insights',
	}
);

export const Insight = models.Insight || model('Insight', InsightSchema);
