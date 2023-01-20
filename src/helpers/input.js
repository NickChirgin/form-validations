const input = [
  {
    "id": 1,
    "name": "email",
    "type": "email",
    "placeholder": "email",
    "required": true,
    "errorMessage": "Not valid email",
    "label": "Email"
  },
  {
    "id": 2,
    "name": "username",
    "type": "text",
    "placeholder": "username",
    "required": true,
    "errorMessage": "Must contain one alphanumeric character and be 6-20 characters long",
    "label": "Username",
    "pattern": `^(?=.*[A-Za-z0-9]).{6,20}$`
  },
  {
    "id": 3,
    "name": "password",
    "type": "password",
    "placeholder": "password",
    "required": true,
    "errorMessage": "8-20 characters, at least one letter, one number and one special character:",
    "label": "Password",
    "pattern" : `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
  },
  {
    "id": 4,
    "type": "password",
    "name": "confirmPassword",
    "placeholder": "password",
    "required": true,
    "errorMessage": "Passwords not identical",
    "label": "Confirm password"
  },
]

export default input;