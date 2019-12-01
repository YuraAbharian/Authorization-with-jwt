import mongoose, { Schema } from 'mongoose';


const DialogSchema = new Schema(
    {
        partner: { type: Schema.Types.ObjectId, ref: "Auth", require: true },
        owner: { type: Schema.Types.ObjectId, ref: "Auth", require: true },
        messages: [{ type: Schema.Types.ObjectId, ref: "Message" }]
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Dialog", DialogSchema);

