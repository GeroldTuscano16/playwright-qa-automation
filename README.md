# 🎭 Playwright QA Automation Framework

A scalable end-to-end test automation framework built using **Playwright (JavaScript)** following **Page Object Model (POM)** principles.  
This project is designed to simulate **real-world QA automation practices** and serves as both a **learning project** and an **interview showcase**.

---

## 🚀 Key Features

- End-to-End UI automation using Playwright
- Page Object Model (POM) for maintainability
- Cross-browser testing (Chromium, Firefox, WebKit)
- UI validation and functional testing
- Playwright HTML test reports
- Clean and scalable folder structure
- Easy to extend for real-world applications

---

## 🛠 Tech Stack

- **Language:** JavaScript
- **Test Framework:** Playwright
- **Design Pattern:** Page Object Model (POM)
- **Browsers:** Chromium, Firefox, WebKit
- **Reporting:** Playwright HTML Reporter
- **Package Manager:** npm

---

## 📁 Project Structure

```text
playwright-qa-automation/
│
├── pages/              # Page Object classes
│   ├── LoginPage.js
│   └── HomePage.js
│
├── tests/              # Test specifications
│   ├── login.spec.js
│   ├── navigation.spec.js
│   └── forms.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
🧪 Test Coverage

The framework currently covers:

✅ Login functionality

✅ UI element validation

✅ Navigation between pages

✅ Form submission and validation

✅ Cross-browser execution

▶️ How to Run Tests
1️⃣ Install dependencies
npm install

2️⃣ Run all tests
npx playwright test

3️⃣ Run tests on a specific browser
npx playwright test --project=chromium

4️⃣ View HTML Report
npx playwright show-report

📊 Test Execution Flow
flowchart LR
    A[Test Runner] --> B[Test Specs]
    B --> C[Page Objects]
    C --> D[Application Under Test]
    D --> E[Assertions]
    E --> F[HTML Report]

🧱 Framework Architecture (POM)
flowchart TD
    T[Test Files] --> P[Page Object Classes]
    P --> U[UI Elements & Actions]
    T --> R[Test Assertions]

🎯 Purpose of This Project

This project was created to:

Strengthen hands-on experience with Playwright

Demonstrate real-world automation framework design

Prepare for QA Automation Engineer interviews

Showcase automation skills through GitHub

📌 Future Enhancements

Add API testing integration

Introduce CI/CD with GitHub Actions

Add environment-based configurations

Enhance reporting with screenshots on failure

👨‍💻 Author

Gerold Tuscano
QA Automation Engineer (Aspiring)
