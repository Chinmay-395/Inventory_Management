export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "name is required";
  }

  if (!values.details) {
    errors.details = "details  is required";
  }

  if (!values.company) {
    errors.company = "company  is required";
  }

  return errors;
}
