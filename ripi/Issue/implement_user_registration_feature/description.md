# implement_user_registration_feature (Issue)

- [x] Set up routing for the application:
  - [x] Install `react-router-dom`.
  - [x] Create a `Router` component to handle routes.
  - [x] Add a basic navigation structure with links for "Home" and "Register".
- [x] Create the User Registration page:
  - [x] Create a `RegisterUser.tsx` component inside `src/pages`.
  - [x] Write a test that expects this component to render a registration form (username, email, password fields, and a submit button).
  - [x] Run the test to confirm it fails.
- [x] Implement the User Registration form:
  - [x] Implement the form in the `RegisterUser.tsx` component.
  - [x] Make the test pass by ensuring the form renders correctly.
- [x] Handle form submission with TDD:
  - [x] Write a test that simulates form submission and checks if the form values are correctly captured.
  - [x] Run the test to confirm it fails.
  - [x] Implement form submission logic and ensure the test passes.
- [x] Integrate API call for user registration:
  - [x] Write a test that mocks an API call to register a new user.
  - [x] Run the test to confirm it fails.
  - [x] Implement the API call using `axios` in the `services` folder.
  - [x] Ensure the test passes and the user registration works correctly.

```bash
 PASS  src/tests/pages/RegisterUser.test.tsx
  ✓ makes an API call to register a new user on form submission (232 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.112 s
Ran all test suites related to changed files.
```
