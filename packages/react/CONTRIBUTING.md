# Contributing to Xron UI

First off, thank you for considering contributing to **Xron UI**! 🎉

We welcome contributions of all kinds, including bug fixes, new components, documentation improvements, accessibility enhancements, and performance optimizations.

## Getting Started

### 1. Fork the Repository

Fork the repository and clone it to your local machine.

```bash
git clone https://github.com/yusronab/xron-ui.git
cd xron-ui
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development

```bash
pnpm dev
```

### 4. Build the Library

```bash
pnpm build
```

Run the build before opening a Pull Request to ensure everything compiles successfully.

---

## Development Guidelines

Please follow these principles when contributing:

- Write components using **TypeScript**.
- Use **Tailwind CSS** for styling.
- Keep components **reusable**, **accessible**, and **fully typed**.
- Prefer the **Controlled Component** pattern whenever applicable.
- Use `forwardRef` for components that expose native DOM elements.
- Keep APIs simple and consistent across all components.
- Avoid introducing unnecessary dependencies.
- Maintain compatibility with the existing component structure.

---

## Component Structure

Each component should follow the same folder structure.

```text
Component/
├── Component.tsx
├── Component.types.ts
├── index.ts
```

Variants should be placed in the `variants` directory.

```text
variants/
└── component.ts
```

---

## Code Style

- Use functional React components.
- Prefer named exports.
- Keep files focused on a single responsibility.
- Avoid inline business logic inside JSX.
- Extract reusable logic into helper functions or hooks when appropriate.
- Use `cn()` for merging Tailwind CSS classes.
- Use `class-variance-authority (cva)` for component variants.

---

## Pull Requests

Before submitting a Pull Request, please ensure:

- The project builds successfully.
- No TypeScript errors remain.
- No ESLint warnings or errors.
- Documentation is updated if the public API changes.
- New components include usage examples.
- Existing behavior is not broken unless the change is intentional.

Please provide a clear description of:

- What changed
- Why it changed
- Any breaking changes
- Screenshots (if the UI changed)

---

## Reporting Issues

When reporting an issue, please include:

- Xron UI version
- React version
- TypeScript version (if applicable)
- Browser (if relevant)
- Operating system
- Steps to reproduce
- Expected behavior
- Actual behavior

Providing a minimal reproduction is highly appreciated.

---

## Feature Requests

Feature requests are welcome.

When opening a feature request, please explain:

- The problem you're trying to solve.
- Your proposed API.
- Example usage.
- Alternative solutions you've considered.

---

## Commit Messages

Use clear and descriptive commit messages.

Examples:

```text
feat(button): add loading state
feat(select): support custom option renderer
fix(input): prevent invalid file selection
fix(modal): resolve focus trap issue
docs(input-file): add preview examples
refactor(select): simplify dropdown positioning
```

---

## Code of Conduct

Please be respectful and constructive in all discussions.

We aim to maintain a welcoming and inclusive community for everyone.

---

## Questions

If you have any questions, feel free to open a discussion or submit an issue.

Thank you for helping make **Xron UI** better! 🚀
