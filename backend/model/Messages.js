import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
    {
        text: { type: String, require: Boolean },
        dialog: { type: Schema.Types.ObjectId, ref: 'Dialog', require: true },
        owner: { type: Schema.Types.ObjectId, ref: 'userDatas', require: true },
        partner: { type: Schema.Types.ObjectId, ref: 'userDatas', require: true },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Message', MessageSchema);
