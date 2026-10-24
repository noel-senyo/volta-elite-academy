"use client";

import { useState, type FormEvent } from "react";
import { gradeOptions, startTerms } from "@/data/school";
import {
  hasErrors,
  validateEnquiry,
  type EnquiryValues,
} from "@/lib/validation";
import { Button } from "./Button";
import { FormField, useFieldIds } from "./FormField";

const empty: EnquiryValues = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  grade: "",
  startTerm: "",
  message: "",
};

const fieldNames = [
  "parentName",
  "email",
  "phone",
  "childName",
  "grade",
  "startTerm",
  "message",
];

export function EnquiryForm() {
  const ids = useFieldIds("enquiry", fieldNames);
  const [values, setValues] = useState<EnquiryValues>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof EnquiryValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      const first = fieldNames.find((name) => nextErrors[name as keyof EnquiryValues]);
      if (first) document.getElementById(ids[first] ?? "")?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-3xl border border-aqua/40 bg-white p-8 shadow-sm">
        <h3 className="font-serif text-3xl text-primary">Enquiry received</h3>
        <p className="mt-3 text-lg leading-relaxed text-charcoal">
          Thank you! Our admissions team will contact you within 48 hours.
        </p>
        <Button
          className="mt-6"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setSubmitted(false);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-sky/70 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id={ids.parentName ?? ""} label="Parent or guardian name" error={errors.parentName}>
          <input
            id={ids.parentName}
            name="parentName"
            autoComplete="name"
            value={values.parentName}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? `${ids.parentName}-error` : undefined}
            onChange={(event) => update("parentName", event.target.value)}
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
            placeholder="055 000 0000"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${ids.phone}-error` : undefined}
            onChange={(event) => update("phone", event.target.value)}
          />
        </FormField>
        <FormField id={ids.childName ?? ""} label="Child's name" error={errors.childName}>
          <input
            id={ids.childName}
            name="childName"
            autoComplete="off"
            value={values.childName}
            aria-invalid={Boolean(errors.childName)}
            aria-describedby={errors.childName ? `${ids.childName}-error` : undefined}
            onChange={(event) => update("childName", event.target.value)}
          />
        </FormField>
        <FormField id={ids.grade ?? ""} label="Grade applying for" error={errors.grade}>
          <select
            id={ids.grade}
            name="grade"
            value={values.grade}
            aria-invalid={Boolean(errors.grade)}
            aria-describedby={errors.grade ? `${ids.grade}-error` : undefined}
            onChange={(event) => update("grade", event.target.value)}
          >
            <option value="">Select a grade</option>
            {gradeOptions.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </FormField>
        <FormField id={ids.startTerm ?? ""} label="Preferred start term" error={errors.startTerm}>
          <select
            id={ids.startTerm}
            name="startTerm"
            value={values.startTerm}
            aria-invalid={Boolean(errors.startTerm)}
            aria-describedby={errors.startTerm ? `${ids.startTerm}-error` : undefined}
            onChange={(event) => update("startTerm", event.target.value)}
          >
            <option value="">Select a term</option>
            {startTerms.map((term) => (
              <option key={term} value={term}>
                {term}
              </option>
            ))}
          </select>
        </FormField>
      </div>
      <div className="mt-5">
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
        Submit enquiry
      </Button>
    </form>
  );
}
