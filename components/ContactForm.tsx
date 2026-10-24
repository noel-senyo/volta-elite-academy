"use client";

import { useState, type FormEvent } from "react";
import {
  hasErrors,
  validateContact,
  type ContactValues,
} from "@/lib/validation";
import { Button } from "./Button";
import { FormField, useFieldIds } from "./FormField";

const empty: ContactValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const fieldNames = ["name", "email", "phone", "message"];

export function ContactForm() {
  const ids = useFieldIds("contact", fieldNames);
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      const first = fieldNames.find((name) => nextErrors[name as keyof ContactValues]);
      if (first) document.getElementById(ids[first] ?? "")?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-3xl border border-aqua/40 bg-white p-8 shadow-sm">
        <h3 className="font-serif text-3xl text-primary">Message received</h3>
        <p className="mt-3 text-lg leading-relaxed text-charcoal">
          Thank you. We have your message and will reply during school hours, Monday to Friday.
        </p>
        <Button
          className="mt-6"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setSubmitted(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-sky/70 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5">
        <FormField id={ids.name ?? ""} label="Your name" error={errors.name}>
          <input
            id={ids.name}
            name="name"
            autoComplete="name"
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${ids.name}-error` : undefined}
            onChange={(event) => update("name", event.target.value)}
          />
        </FormField>
        <FormField id={ids.email ?? ""} label="Email" error={errors.email}>
          <input
            id={ids.email}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${ids.email}-error` : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
        </FormField>
        <FormField id={ids.phone ?? ""} label="Phone" error={errors.phone}>
          <input
            id={ids.phone}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${ids.phone}-error` : undefined}
            onChange={(event) => update("phone", event.target.value)}
          />
        </FormField>
        <FormField id={ids.message ?? ""} label="Message" error={errors.message}>
          <textarea
            id={ids.message}
            name="message"
            rows={5}
            value={values.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${ids.message}-error` : undefined}
            onChange={(event) => update("message", event.target.value)}
          />
        </FormField>
      </div>
      <Button type="submit" className="mt-6">
        Send message
      </Button>
    </form>
  );
}
