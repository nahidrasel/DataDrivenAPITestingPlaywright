# DataDrivenAPITestingPlaywright
A reusable and extensible JavaScript API Test Automation Framework built on Playwright with full support for data-driven testing, Docker, Allure reporting, and modular project structure.

## Project Structure
This framework follows a clean separation of concerns, divided into two main solution folders:

## core/ — Common & Reusable Components
Contains framework-level code that can be reused across any API project:

actions/: Encapsulates API methods (e.g., createUser, login, updateUser).

extensions/: Utility functions and enhancements (e.g., string formatting, custom asserts).

base/: Common setup logic like API context builders, hooks, or authentication.

## tests/ — Project-Specific Test Scenarios
Contains test cases and project-specific data/config:

data/: JSON or YAML test data (e.g., user payloads)

scenarios/: Grouped test specs per feature (e.g., users.test.js)

utils/: Test-level utilities like random data generators or custom reporters

✨ Key Features
🔂 Data-Driven Testing
Use external JSON/YAML files to drive test scenarios dynamically.

🧩 Modular API Layer
Reusable actions and base context setup for clean and scalable API test logic.

📈 Visual Test Reports with Allure
Rich, interactive reporting with integrated status, steps, and attachments.

📦 Containerized Execution with Docker
Run tests in a fully isolated environment using Docker & Docker Compose.

🛰️ CI/CD Ready with GitHub Actions
Pre-configured workflows for seamless CI integration and automated test runs.

🗺️ OpenAPI Spec Support
Generate or validate tests directly from Swagger/OpenAPI definitions.

🕵️‍♂️ Headless UI/API Hybrid Support
Run UI & API tests in sync using Playwright's headless browser mode.
