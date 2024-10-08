# implement_user_login_feature (Issue)

- [ ] Create the User Login page:
  - [x] Create a `LoginUser.tsx` component inside `src/pages`.
  - [x] Write a test that expects this component to render a login form (email and password fields, and a submit button).
  - [x] Run the test to confirm it fails.
- [x] Implement the User Login form:
  - [x] Implement the form in the `LoginUser.tsx` component using Material-UI components.
  - [x] Make the test pass by ensuring the form renders correctly.
- [x] Handle form submission with TDD:
  - [x] Write a test that simulates form submission and checks if the form values are correctly captured.
  - [x] Run the test to confirm it fails.
  - [x] Implement form submission logic and ensure the test passes.
- [ ] Integrate API call for user login:
  - [ ] Write a test that mocks an API call to log in a user.
  - [ ] Run the test to confirm it fails.
  - [x] Implement the API call using `axios` in the `services` folder.
  - [ ] Ensure the test passes and the user login works correctly.
