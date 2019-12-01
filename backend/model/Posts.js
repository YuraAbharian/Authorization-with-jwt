import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
    {
        postText: { type: String, require: true },
        likes: {  type: Number,  },
        isLiked: { type: Boolean, default: false,  },
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Auth',
        }
    },
    {
        timestamps: true,
    },
);
export default mongoose.model('Post', PostSchema);
