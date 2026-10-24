export type FieldErrors<T extends string> = Partial<Record<T, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function required(value: string): boolean {
  return value.trim().length > 0;
}

export type EnquiryValues = {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  grade: string;
  startTerm: string;
  message: string;
};

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function validateEnquiry(
  values: EnquiryValues,
): FieldErrors<keyof EnquiryValues> {
  const errors: FieldErrors<keyof EnquiryValues> = {};

  if (!required(values.parentName)) {
    errors.parentName = "Enter the parent or guardian's name.";
  }
  if (!required(values.email)) {
    errors.email = "Enter an email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!required(values.phone)) {
    errors.phone = "Enter a phone number.";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Enter a valid phone number, including the mobile prefix.";
  }
  if (!required(values.childName)) {
    errors.childName = "Enter the child's name.";
  }
  if (!required(values.grade)) {
    errors.grade = "Select the grade you are applying for.";
  }
  if (!required(values.startTerm)) {
    errors.startTerm = "Select a preferred start term.";
  }
  if (!required(values.message)) {
    errors.message = "Enter a short message for the admissions team.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters so we can help.";
  }

  return errors;
}

export function validateContact(
  values: ContactValues,
): FieldErrors<keyof ContactValues> {
  const errors: FieldErrors<keyof ContactValues> = {};

  if (!required(values.name)) {
    errors.name = "Enter your name.";
  }
  if (!required(values.email)) {
    errors.email = "Enter an email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!required(values.phone)) {
    errors.phone = "Enter a phone number.";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Enter a valid phone number, including the mobile prefix.";
  }
  if (!required(values.message)) {
    errors.message = "Enter your message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }

  return errors;
}

export function hasErrors<T extends string>(errors: FieldErrors<T>): boolean {
  return Object.values(errors).some((value) => Boolean(value));
}
