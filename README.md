# raid-auto-test
Automated Test for RAiD
```markdown
# raid-auto-test

Automated Test for RAiD

## Overview

`raid-auto-test` is a project designed to automate testing for RAiD. It simplifies the testing process by providing a framework to execute and validate test cases efficiently.

## Features

- Automated test execution
- Support for multiple programming languages (TypeScript, Python, JavaScript)
- Integration with `npm` for dependency management
- Easy-to-use and customizable

## Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)
- Python 3.x (if using Python-based tests)
- IntelliJ IDEA 2022.3 (optional, for development)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vikas-ardc/raid-auto-test.git
   cd raid-auto-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run tests:
   ```bash
   npm test
  

npx playwright show-report
Note: The report will have execution video if Test Passes
The report will have screenshot of the failed element/screen if the test fails. 

npx playwright test raid_info_copy.spec.ts
npx playwright test


npx playwright test raid_info.spec.ts --chromium


npx playwright show-trace

npx playwright show-trace trace.zip



npm init playwright@latest --yes "--" . '--quiet' '--browser=chromium' '--browser=firefox' '--browser=webkit' '--gha'
 ```
 
2. Debug tests using IntelliJ IDEA:
    - Open the project in IntelliJ IDEA.
    - Configure the run/debug settings as needed.
    - Execute tests directly from the IDE.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or issues, please open an issue in the repository or contact the maintainer.
```