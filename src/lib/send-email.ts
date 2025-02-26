import { CreateEmailOptions, CreateEmailRequestOptions, Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY
);

export const sendEmail = async (
  payload: CreateEmailOptions,
  options?: CreateEmailRequestOptions
) => {
  await resend.emails.send(payload, options);
};
