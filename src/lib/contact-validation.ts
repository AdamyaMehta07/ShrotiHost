export type EnquiryField = "name" | "email" | "topic" | "message";
export type EnquiryValues = Record<EnquiryField, string>;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

// Simple check: kuch@kuch.kuch. Poori email-rules nahi, bas galti pakadne ke liye
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 1000;

// Galti mile to field ke naam ke saath message deta hai, sab sahi ho to khaali object
export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};

  const name = values.name.trim();
  if (name.length < 2) errors.name = "Enter your name (at least 2 characters).";
  else if (name.length > 80) errors.name = "That name is too long (80 characters at most).";

  const email = values.email.trim();
  if (!email) errors.email = "Enter your email address.";
  else if (!emailPattern.test(email)) errors.email = "Enter a valid email address, like name@example.com.";

  if (!values.topic) errors.topic = "Choose what your enquiry is about.";

  const message = values.message.trim();
  if (message.length < MESSAGE_MIN) {
    errors.message = `Write a little more (at least ${MESSAGE_MIN} characters).`;
  } else if (message.length > MESSAGE_MAX) {
    errors.message = `Please keep it under ${MESSAGE_MAX} characters.`;
  }

  return errors;
}