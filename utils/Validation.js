export function SignupValidate(formValues) {
  const error = {};

  if (!formValues.name.trim()) {
    error.name = "Name is required";
  }
  if (!formValues.email.trim()) {
    error.email = "Email is required";
  }
  if (!formValues.password.trim()) {
    error.password = "Password is required";
  }
  if (!formValues.rePassword.trim()) {
    error.rePassword = "Please confirm your password";
  }
  if (formValues.password !== formValues.rePassword) {
    error.rePassword = "Passwords do not match";
  }
  if (!formValues.phone.trim()) {
    error.phone = "Phone is required";
  }

  const phoneRegex = /^01[0125][0-9]{8}$/;
  if (formValues.phone && !phoneRegex.test(formValues.phone)) {
    error.phone = "Accept only egypt phone numbers";
  }

  return error;
}

export function LoginValidate(formValues) {
  const error = {};

  if (!formValues.email.trim()) {
    error.email = "Email is required";
  }

  if (!formValues.password.trim()) {
    error.password = "Password is required";
  }

  return error;
}

export function ForgotPasswordValidation(formValues) {
  const error = {};
  if (!formValues.email.trim()) {
    error.email = "Email is required";
  }

  return error;
}
