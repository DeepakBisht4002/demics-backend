import InquiryModel from "../models/Inquiry-model.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { successResponse } from "../middlewares/response.js";
import { getStartDate } from "../helpers/date-helper.js";

const createInquiry = asyncHandler(async (req, res) => {
  const { inquiryText, userName, userEmail, userContact } = req.body;

  if (!inquiryText || !userName || !userEmail || !userContact) {
    const error = new Error("Required fields are missing");
    error.statusCode = 400;
    throw error;
  }

  const newInquiry = await InquiryModel.create({
    inquiryText,
    userName,
    userEmail,
    userContact,
  });

  return successResponse(res, {
    statusCode: 201,
    message: "Inquiry Added Successfully!",
    data: newInquiry,
  });
});

const getInquiries = asyncHandler(async (req, res) => {
  const { filter = "24hrs" } = req.query;
  const startDate = getStartDate(filter);
  const query = startDate ? { createdAt: { $gte: startDate } } : {};
  const inquiries = await InquiryModel.find(query).sort({ createdAt: -1 });

  return successResponse(res, {
    statusCode: 200,
    message: "Inquiries fetched successfully",
    data: inquiries,
  });
});

export { createInquiry, getInquiries };
