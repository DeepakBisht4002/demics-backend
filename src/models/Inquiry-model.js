import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    inquiryText: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    userContact: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "resolved", "spam"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", InquirySchema);