"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactChannels } from "@/data/contact";
import { contactInfo, portalLinks } from "@/data/navigation";
import {
  MESSAGE_MAX,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryField,
  type EnquiryValues,
} from "@/lib/contact-validation";

const emptyValues: EnquiryValues = { name: "", email: "", topic: "", message: "" };

// Galti ho to is order mein pehli galat field pe focus jata hai
const fieldOrder: EnquiryField[] = ["name", "email", "topic", "message"];

const controlClass =
  "w-full rounded-(--radius-control) border bg-white px-4 py-2.5 text-ink placeholder:text-ink-faint";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 flex items-start gap-1.5 text-sm font-medium text-danger">
      <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
      {message}
    </p>
  );
}

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(emptyValues);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef<Partial<Record<EnquiryField, HTMLElement | null>>>({});
  const successRef = useRef<HTMLDivElement>(null);

  // Success dikhte hi focus us box pe, taaki screen reader padh sake
  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  function setField(field: EnquiryField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    // Jis field ko theek kar rahe ho, uski galti hata do
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateEnquiry(values);
    setErrors(found);

    const firstBad = fieldOrder.find((field) => found[field]);
    if (firstBad) {
      fieldRefs.current[firstBad]?.focus();
      return;
    }
    // Yahan asli mein kuch bheja nahi jata. Ye sirf demo state hai
    setSubmitted(true);
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setSubmitted(false);
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-(--radius-card) border border-success bg-green-50 p-6"
      >
        <p className="flex items-center gap-2 text-lg font-bold text-success">
          <CheckCircle2 size={22} aria-hidden="true" />
          Demo only: nothing was sent
        </p>
        <p className="mt-2 text-ink">
          Thanks, {values.name.trim()}. This is a demo form, so your message was not sent, no ticket
          was created and nobody will reply. To reach Shroti Host for real, use one of the channels
          below.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={contactInfo.whatsapp}>Chat on WhatsApp</Button>
          <Button href={portalLinks.ticket} variant="secondary">
            Submit a ticket
          </Button>
          <Button variant="ghost" onClick={reset}>
            Try the form again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-(--radius-card) border border-line bg-white p-6">
      <p className="mb-5 rounded-md bg-brand-50 px-3 py-2 text-sm text-brand-900">
        Demo form: it checks what you type but does not send anything. For a real reply, use the
        channels above.
      </p>

      {/* Galtiyon ka summary, screen reader ko bhi turant bolta hai */}
      <div aria-live="assertive">
        {errorCount > 0 && (
          <p className="mb-4 text-sm font-semibold text-danger">
            Please fix {errorCount} {errorCount === 1 ? "field" : "fields"} below.
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="mb-1 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="enquiry-name"
            ref={(el) => {
              fieldRefs.current.name = el;
            }}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
            className={`${controlClass} ${errors.name ? "border-danger" : "border-line"}`}
          />
          <FieldError id="enquiry-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="enquiry-email" className="mb-1 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="enquiry-email"
            ref={(el) => {
              fieldRefs.current.email = el;
            }}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
            className={`${controlClass} ${errors.email ? "border-danger" : "border-line"}`}
          />
          <FieldError id="enquiry-email-error" message={errors.email} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="enquiry-topic" className="mb-1 block text-sm font-medium text-ink">
          What is it about?
        </label>
        <select
          id="enquiry-topic"
          ref={(el) => {
            fieldRefs.current.topic = el;
          }}
          value={values.topic}
          onChange={(event) => setField("topic", event.target.value)}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "enquiry-topic-error" : undefined}
          className={`${controlClass} ${errors.topic ? "border-danger" : "border-line"}`}
        >
          <option value="">Choose a topic</option>
          {contactChannels.map((channel) => (
            <option key={channel.id} value={channel.id}>
              {channel.name}
            </option>
          ))}
        </select>
        <FieldError id="enquiry-topic-error" message={errors.topic} />
      </div>

      <div className="mt-5">
        <label htmlFor="enquiry-message" className="mb-1 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="enquiry-message"
          ref={(el) => {
            fieldRefs.current.message = el;
          }}
          rows={5}
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "enquiry-message-error" : "enquiry-message-hint"}
          className={`${controlClass} ${errors.message ? "border-danger" : "border-line"}`}
        />
        <p id="enquiry-message-hint" className="mt-1 text-xs text-ink-faint">
          {values.message.length}/{MESSAGE_MAX} characters
        </p>
        <FieldError id="enquiry-message-error" message={errors.message} />
      </div>

      <div className="mt-6">
        <Button type="submit">Send demo enquiry</Button>
      </div>
    </form>
  );
}