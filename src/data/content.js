export const automationApps = [
  {
    name: 'Flaky Test Detector & Auto-Quarantine System',
    image: '/screenshots/flaky-test-detector.png',
    description: 'Playwright tests run on a schedule against a real deployed app. A flip-rate analyzer (not just fail rate) auto-quarantines unstable tests and opens a GitHub issue - live in production CI, 24+ scheduled runs and counting.',
    leadership: 'The judgment call here isn\u2019t the code - it\u2019s deciding what threshold of instability actually warrants pulling a test out of the suite without losing coverage silently.',
    stack: ['Playwright', 'TypeScript', 'Python', 'GitHub Actions'],
    link: 'https://github.com/stephanieesha/flaky-test-detector',
  },
  {
    name: 'AI Test Case Generator',
    image: '/screenshots/ai-test-case-generator.png',
    description: 'Fetches a real Jira ticket, retrieves similar past test cases for style consistency, and generates BDD or step-by-step test cases grounded in what the requirement actually says.',
    leadership: 'Built to flag ambiguous requirements before development starts, not just after - the kind of gap that costs a team a sprint if QA catches it too late.',
    stack: ['Python', 'Flask', 'Claude API', 'Jira REST API'],
    link: 'https://github.com/stephanieesha/ai-test-case-generator',
  },
  {
    name: 'Accessibility Audit Tracker',
    image: '/screenshots/accessibility-tracker.png',
    description: 'axe-core scans (the same engine behind Lighthouse) run on a schedule or on demand, tracking violations over time with the exact flagged elements outlined.',
    leadership: 'Most QA portfolios have zero accessibility work. This exists because compliance and usability aren\u2019t a separate workstream from quality - they\u2019re part of it.',
    stack: ['Playwright', 'axe-core', 'TypeScript', 'Python', 'Flask'],
    link: 'https://github.com/stephanieesha/accessibility-audit-tracker',
  },
  {
    name: 'Quality Metrics Dashboard',
    image: '/screenshots/quality-metrics-dashboard.png',
    description: 'Bugs categorized by root cause, weighted by severity (a category with fewer but worse bugs can outrank one with more but trivial ones), plus a live catch-rate view pulling real data from the Flaky Test Detector.',
    leadership: 'Built for the conversation this enables with engineering leads: not "how many bugs" but "why," which is the version of the data that actually changes what a team does next.',
    stack: ['Python', 'Flask', 'Chart.js'],
    link: 'https://github.com/stephanieesha/quality-metrics-dashboard',
  },
  {
    name: 'Subscription Tracker',
    image: '/screenshots/subscription-tracker.png',
    description: 'Tracks recurring subscriptions with correct billing-cycle math across weekly/monthly/yearly - the kind of date arithmetic that\u2019s easy to get subtly wrong (month-end rollovers, leap years) if you\u2019re not deliberate about it.',
    stack: ['Python', 'Flask', 'SQLite'],
    link: 'https://github.com/stephanieesha',
  },
  {
    name: 'Meal Planner',
    image: '/screenshots/meal-planner.png',
    description: 'Generates a personalized, region-appropriate weekly meal plan with real portion scaling and a hard safety floor on calorie targets - accounts, a personal food library with USDA nutrition lookup, and an editable plan table.',
    leadership: 'A full-stack build with real user accounts and data integrity concerns, not a toy app - the same rigor as the QA tooling, applied somewhere with no test suite requirement forcing it.',
    stack: ['Python', 'Flask', 'SQLite', 'Claude API'],
    link: 'https://github.com/stephanieesha',
  },
  {
    name: 'Recipe Organizer',
    image: '/screenshots/recipe-organizer.png',
    description: 'Saves recipes from TikTok/Instagram links, extracting ingredients and directions with AI where the platform\u2019s terms actually allow it - and being upfront in the product itself about where they don\u2019t.',
    leadership: 'Checked both platforms\u2019 real API terms before writing a line of code, rather than assuming a plan would work - that verification step is the difference between a demo and something real.',
    stack: ['Python', 'Flask', 'SQLite', 'Claude API'],
    link: 'https://github.com/stephanieesha',
  },
  {
    name: 'Shirly 2.0',
    image: '/screenshots/shirly2.png',
    description: 'A rebuild of my original shopping-price tracker: shopping lists, price history per item, and spend tracking. This is the live app all four QA tools above actually test against.',
    stack: ['React', 'Redux', 'Express', 'Node', 'MongoDB'],
    link: 'https://github.com/stephanieesha/Shirly2.0',
  },
  {
    name: 'Shirly',
    image: 'https://static.wixstatic.com/media/25565b_ddb5b43e721c4d128c4bd21c5cd39dce~mv2.png',
    description: 'Built to solve a real problem: tracking grocery prices and keeping shopping within budget. Auto-generates shopping lists from purchase history and tracks price changes on frequently bought items.',
    stack: ['React', 'Express', 'Node', 'MongoDB'],
    link: 'https://github.com/stephanieesha/Shirly',
  },
  {
    name: "Esha's Memory Game",
    image: 'https://static.wixstatic.com/media/25565b_7da9ee51875f41129b7866deebf17f35~mv2.png',
    description: 'A card-matching memory game built during the She Code Africa Cohort 2 mentoring program.',
    stack: ['JavaScript', 'HTML', 'Bootstrap'],
    link: 'https://github.com/stephanieesha/Brain_Teaser',
  },
]

export const manualTestingTemplates = [
  { name: 'Test Case Template', url: 'https://docs.google.com/spreadsheets/d/1SE1es0B2v2wgVAuuKrTnMYUjpARU3tegbFMb2cAzyJs/edit?gid=0#gid=0', image: '/screenshots/test-case-template.png' },
  { name: 'Test Cases for Shirly', url: 'https://docs.google.com/spreadsheets/d/1v0X3qhvowfKfTeK-K1Nor7qOcOQpRiZNq5TULr0sQlc/edit?gid=0#gid=0', image: 'https://static.wixstatic.com/media/25565b_21278d34e48b47a48bae473867e56e91~mv2.png' },
  { name: 'Bug Report Template', url: 'https://docs.google.com/spreadsheets/d/10PQa3C9_xkeeLWy2Owpqt-BTFmZ3TwNIGvntQzyeOYU/edit?gid=0#gid=0', image: '/screenshots/bug-report-template.png' },
  { name: 'Test Cases for Sauce Demo', url: 'https://docs.google.com/spreadsheets/d/1PXoD0v9vJHOxAYMPl7EOElZoh92qR6RC4RUDDZ5NBpA/edit?gid=0#gid=0', image: 'https://static.wixstatic.com/media/25565b_57eba812fd3a428289428fed2ee61047~mv2.png' },
  { name: 'Bug Report for Sauce Demo', url: 'https://docs.google.com/spreadsheets/d/1f5frUA4VepQ9MX7b-BDI9el_s2vyTLW4Y_8fiETy7is/edit?gid=0#gid=0', image: '/screenshots/bug-report-sauce-demo.png' },
]

export const skillGroups = [
  { label: 'Leadership', items: ['Test Strategy', 'Mentoring', 'Agile / Scrum (PSM I)'] },
  { label: 'Automation & Testing', items: ['Playwright', 'Cypress', 'Selenium', 'API Testing'] },
  { label: 'AI-Assisted QA', items: ['Claude API'] },
  { label: 'Languages & Frameworks', items: ['Python', 'TypeScript', 'JavaScript', 'React'] },
]

export const writing = [
  {
    title: 'When to Introduce Automation Into Your Project',
    description: 'Every manual team has had the discussion of when, or if, to introduce automation into its project - and what tools would actually work.',
    url: 'https://medium.com/@stephanieesha/when-to-introduce-automation-into-your-project-e5616de7dc64',
    image: 'https://miro.medium.com/v2/resize:fit:1358/format:webp/1*8Hp1sY9kxcU5wcxXnl4LwA.png',
  },
  {
    title: 'AI in QA: Where It Actually Helps and Where It Doesn\u2019t',
    description: 'AI is not a replacement for QA engineers - it\u2019s a tool that helps when used intentionally, with clear boundaries on where human judgment still has to lead.',
    url: 'https://medium.com/@stephanieesha/ai-in-qa-where-it-actually-helps-and-where-it-doesnt-e31dd23c781d',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*jW4CdtMF8cePUpZ7WAjYdg.png',
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
