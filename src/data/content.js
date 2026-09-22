export const qaApps = [
  {
    name: 'Flaky Test Detector & Auto-Quarantine System',
    image: '/screenshots/flaky-test-detector.png',
    description: 'Flaky tests are easy to tolerate until they become a problem. I built this because I already had multiple projects with automated tests running in CI, and I wanted a way to monitor their reliability centrally rather than manually discovering that a test had started failing intermittently.',
    leadership: 'When a test crosses a defined instability threshold, it is automatically quarantined and a GitHub issue is created for investigation.',
    stack: ['Playwright', 'TypeScript', 'Python', 'GitHub Actions'],
    link: 'https://github.com/stephanieesha/flaky-test-detector',
  },
  {
    name: 'AI Test Case Generator',
    image: '/screenshots/ai-test-case-generator.png',
    description: "I built this because I wanted an AI test case generator that was purpose-built for QA, rather than a general-purpose chatbot that requires multiple prompts to get the output you actually need. It pulls a real Jira ticket, learns from similar past test cases to maintain my style, and generates BDD or step-by-step cases grounded in the requirement.",
    leadership: "The goal was to make test case generation feel less like prompting an AI and more like giving a QA engineer a tool that already understands how we work.",
    stack: ['Python', 'Flask', 'Claude API', 'Jira REST API'],
    link: 'https://github.com/stephanieesha/ai-test-case-generator',
    liveUrl: 'https://test-case-generator-ro2z.onrender.com/',
  },
  {
    name: 'Accessibility Audit Tracker',
    image: '/screenshots/accessibility-tracker.png',
    description: "I wanted a quick, repeatable way to check whether the projects I build actually meet accessibility standards, rather than treating accessibility testing as something to do at the end.",
    leadership: "It runs axe-core scans on demand or on a schedule, tracks violations over time, and identifies the exact elements that need attention.",
    stack: ['Playwright', 'axe-core', 'TypeScript', 'Python', 'Flask'],
    link: 'https://github.com/stephanieesha/accessibility-audit-tracker',
    liveUrl: 'https://accessibility-audit-tracker.onrender.com/',
  },
  {
    name: 'Quality Metrics Dashboard',
    image: '/screenshots/quality-metrics-dashboard.png',
    description: "I made this to work alongside my Flaky Test Detector, turning the bugs it catches into quality insights rather than just a list of failures. Bugs are categorized by root cause and weighted by severity, while a live catch-rate view pulls data directly from the detector.",
    leadership: 'The goal was to answer not just “how many bugs were found?” but “what kinds of problems were found, and how serious are they?”',
    stack: ['Python', 'Flask', 'Chart.js'],
    link: 'https://github.com/stephanieesha/quality-metrics-dashboard',
    liveUrl: 'https://quality-metrics-dashboard.onrender.com/',
  },
  {
    name: 'Subscription Tracker',
    image: '/screenshots/subscription-tracker.png',
    description: "It tracks recurring subscriptions across weekly, monthly, and yearly billing cycles, with date calculations that correctly handle things like month-end rollovers and leap years.",
    leadership: "The goal was simple: I have too many subscriptions and wanted to make it harder to forget about them until after they renewed.",
    stack: ['Python', 'Flask', 'SQLite'],
    link: 'https://github.com/stephanieesha/subscription-tracker',
    liveUrl: 'https://subscription-tracker-l8dq.onrender.com/',
  },
  {
    name: 'Meal Planner',
    image: '/screenshots/meal-planner.png',
    description: "I struggled with weight loss and wanted a tool to help with that. This helps me track my activity(uploaded from my apple watch) and plan my meals without making eating feel repetitive or restrictive. Instead of assigning me the same meals to the same days, it uses a library of foods I like to build flexible weekly plans with portion scaling, nutrition data, and region-appropriate meals.",
    leadership: "The goal was to make structured eating flexible enough that I could still enjoy my food while working toward a weight-loss goal.",
    stack: ['Python', 'Flask', 'SQLite', 'Claude API'],
    link: 'https://github.com/stephanieesha/Fitness_Meal_Planner',
    liveUrl: 'https://meal-planner-ioeg.onrender.com/',
  },
  {
    name: 'Recipe Organizer',
    image: '/screenshots/recipe-organizer.png',
    description: "I had over 100 recipes saved across TikTok and Instagram that I want to try. I built this to bring them into one place, extract the ingredients and directions, and organize them into categories like desserts, egg dishes, and more. It uses AI to turn supported recipe links into structured, usable recipes.",
    leadership: "The goal was simple: turn a collection of saved videos into a recipe library I could actually cook from.",
    stack: ['Python', 'Flask', 'SQLite', 'Claude API'],
    link: 'https://github.com/stephanieesha/recipie-organizer',
    liveUrl: 'https://recipie-organizer.onrender.com/',
  },
  {
    name: 'Shirly 2.0',
    image: '/screenshots/shirly2.png',
    description: 'A rebuild of my original shopping-price tracker with a nicer UI: shopping lists, price history per item, and spend tracking.',
    stack: ['React', 'Redux', 'Express', 'Node', 'MongoDB'],
    link: 'https://github.com/stephanieesha/Shirly2.0',
    liveUrl: 'https://shirly2-0.onrender.com/',
  },
  {
    name: 'Shirly',
    image: '/screenshots/project-image-a.png',
    description: "I built this because I kept forgetting things on my grocery list when I was out shopping, and I wanted to know how much I was actually spending on the things I buy regularly. Shirly uses purchase history to predict what I’ll need to buy soon, automatically builds shopping lists, and tracks price changes on frequently purchased items over time.",
    leadership: "The goal was to make grocery shopping more predictable: fewer forgotten items, and a clearer picture of where my money was going.",
    stack: ['React', 'Express', 'Node', 'MongoDB'],
    link: 'https://github.com/stephanieesha/Shirly',
  },
  {
    name: "Esha's Memory Game",
    image: '/screenshots/project-image-b.png',
    description: "I built this as one of my first projects during the She Code Africa Cohort 2 mentoring program. I wanted to move beyond static pages and build something interactive, so I made a simple card-matching game using vanilla JavaScript. ",
    leadership: "The cards are shuffled, briefly revealed, and then flipped back so the player has to remember their positions and match the pairs.",
    stack: ['JavaScript', 'HTML', 'Bootstrap'],
    link: 'https://github.com/stephanieesha/Brain_Teaser',
    liveUrl: 'https://stephanies-brain-teaser.netlify.app/',
  },
]

export const testAutomation = [
  {
    name: 'Recipe Organizer E2E Tests',
    image: '/screenshots/recipe-organizer-e2e-tests.png',
    description: 'Playwright + TypeScript suite in Page Object Model, run against the live deployed app: link validation, bulk import, category assignment, and an AI-extraction cleanup fixture that only removes what each test created.',
    stack: ['Playwright', 'TypeScript', 'Page Object Model'],
    link: 'https://github.com/stephanieesha/recipie-organizer-e2e-tests',
  },
  {
    name: 'Meal Planner E2E Tests',
    image: '/screenshots/meal-planner-e2e-tests.png',
    description: '74 Playwright tests against the live meal planner: account creation and login, plan generation against real calorie targets, Apple Health export parsing, and manual/screenshot activity entry.',
    stack: ['Playwright', 'TypeScript', 'Page Object Model'],
    link: 'https://github.com/stephanieesha/meal_planner-e2e-tests',
  },
  {
    name: 'Shirly 2.0 E2E Tests',
    image: '/screenshots/shirly2-e2e-tests.png',
    description: '108 tests covering categories, items, the shopping list, and the API directly, run against the live deployed app across Chromium, Firefox, and WebKit.',
    stack: ['Playwright', 'TypeScript', 'Page Object Model'],
    link: 'https://github.com/stephanieesha/Shirly2.0-e2e-tests',
  },
  {
    name: 'AI Test Case Generator E2E Tests',
    image: '/screenshots/ai-test-case-generator-e2e.png',
    description: 'Cypress suite for the test case generator, recorded to Cypress Cloud: BDD/step-by-step generation, the Jira fetch flow, and a design spec that fails on a copy of the old UI.',
    stack: ['Cypress', 'TypeScript', 'Cypress Cloud'],
    link: 'https://github.com/stephanieesha/AI-Test-Case-Generator-e2e-test',
  },
  {
    name: 'Shirly Tests',
    image: '/screenshots/shirly-tests.png',
    description: 'The original Cypress suite written against the first version of Shirly, kept as the starting point the later Playwright suites built on.',
    stack: ['Cypress', 'JavaScript'],
    link: 'https://github.com/stephanieesha/Shirly_Tests',
  },
]

export const manualTestingTemplates = [
  { name: 'Test Case Template', url: 'https://docs.google.com/spreadsheets/d/1SE1es0B2v2wgVAuuKrTnMYUjpARU3tegbFMb2cAzyJs/edit?gid=0#gid=0', image: '/screenshots/test-case-template.png' },
  { name: 'Test Cases for Shirly', url: 'https://docs.google.com/spreadsheets/d/1v0X3qhvowfKfTeK-K1Nor7qOcOQpRiZNq5TULr0sQlc/edit?gid=0#gid=0', image: '/screenshots/test-cases-shirly.png' },
  { name: 'Bug Report Template', url: 'https://docs.google.com/spreadsheets/d/10PQa3C9_xkeeLWy2Owpqt-BTFmZ3TwNIGvntQzyeOYU/edit?gid=0#gid=0', image: '/screenshots/bug-report-template.png' },
  { name: 'Test Cases for Sauce Demo', url: 'https://docs.google.com/spreadsheets/d/1PXoD0v9vJHOxAYMPl7EOElZoh92qR6RC4RUDDZ5NBpA/edit?gid=0#gid=0', image: '/screenshots/test-cases-sauce-demo.png' },
  { name: 'Bug Report for Sauce Demo', url: 'https://docs.google.com/spreadsheets/d/1f5frUA4VepQ9MX7b-BDI9el_s2vyTLW4Y_8fiETy7is/edit?gid=0#gid=0', image: '/screenshots/bug-report-sauce-demo.png' },
]

export const skillGroups = [
  { label: 'Leadership', items: ['Test Strategy', 'Mentoring', 'Agile / Scrum (PSM I)'] },
  { label: 'Automation & Testing', items: ['Playwright', 'Cypress', 'Selenium', 'API Testing'] },
  { label: 'Languages & Frameworks', items: ['Python', 'TypeScript', 'JavaScript', 'React', 'SQL'] },
  { label: 'Testing Practices', items: ['Manual Testing', 'Functional Testing', 'Accessibility Testing', 'Performance Testing'] },
]

export const writing = [
  {
    title: 'When to Introduce Automation Into Your Project',
    description: 'Every manual team has had the discussion of when, or if, to introduce automation into its project - and what tools would actually work.',
    url: 'https://medium.com/@stephanieesha/when-to-introduce-automation-into-your-project-e5616de7dc64',
    image: '/screenshots/article-image-1.webp',
  },
  {
    title: 'AI in QA: Where It Actually Helps and Where It Doesn\u2019t',
    description: 'AI is not a replacement for QA engineers - it\u2019s a tool that helps when used intentionally, with clear boundaries on where human judgment still has to lead.',
    url: 'https://medium.com/@stephanieesha/ai-in-qa-where-it-actually-helps-and-where-it-doesnt-e31dd23c781d',
    image: '/screenshots/article-image-2.png',
  },
]

export const social = {
  github: 'https://github.com/stephanieesha',
  linkedin: 'https://www.linkedin.com/in/stephanie-ayuba-5121271a8/',
  medium: 'https://medium.com/@stephanieesha',
  youtube: 'https://www.youtube.com/@stephanieayuba',
  twitter: 'https://twitter.com/_stephanieesha',
  email: 'stephanieesha@gmail.com',
  resume: 'https://stephanieesha.github.io/resume/',
  location: 'F.C.T, Abuja, Nigeria',
}
