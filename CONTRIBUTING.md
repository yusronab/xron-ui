# Contributing to Xron UI

Thank you for your interest in contributing to Xron UI!

We welcome contributions of all kinds, including bug fixes, new features, documentation improvements, and performance optimizations.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/yusronab/xron-ui.git
cd xron-ui
```

Install dependencies:

```bash
pnpm install
```

Run Storybook:

```bash
cd apps/storybook
pnpm storybook
```

## Project Structure

```text
apps/
  storybook/

packages/
  react/
```

## Development Guidelines

- Use TypeScript.
- Follow the existing code style.
- Keep components reusable and accessible.
- Write clean and maintainable code.
- Prefer composition over duplication.

## Commit Messages

Follow the Conventional Commits specification.

Examples:

```text
feat(button): add loading state

fix(input): prevent invalid value

docs: update README

refactor(select): simplify option rendering
```

## Pull Requests

Before opening a Pull Request, please ensure:

- The project builds successfully.
- Storybook runs without errors.
- Existing functionality is not broken.
- New components include Storybook stories.
- Documentation is updated when necessary.

## Reporting Bugs

Please include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment information

## Feature Requests

Describe:

- The problem
- Proposed solution
- Example usage
- Any alternatives considered

Thank you for helping improve Xron UI!
