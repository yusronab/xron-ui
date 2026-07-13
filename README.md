# Xron UI

A modern, lightweight, and customizable UI component library built for multiple frontend frameworks.

## Packages

Currently available on npm:

- 📦 `@xron-ui/react`

Planned packages:

- `@xron-ui/vue`
- `@xron-ui/svelte`
- `@xron-ui/angular`
- `@xron-ui/solid`

## Project Structure

```text
.
├── apps/
│   └── storybook/
├── packages/
│   └── react/
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

## Requirements

- Node.js 22+
- pnpm 10+

## Installation

Clone the repository:

```bash
git clone https://github.com/yusronab/xron-ui.git
cd xron-ui
```

Install dependencies:

```bash
pnpm install
```

## Development

### React Package

```bash
cd packages/react
pnpm dev
```

### Storybook

```bash
cd apps/storybook
pnpm storybook
```

Storybook will be available at:

```text
http://localhost:6006
```

## Build

Build the React package:

```bash
cd packages/react
pnpm build
```

Build Storybook:

```bash
cd apps/storybook
pnpm build-storybook
```

## Technologies

- React
- TypeScript
- Vite
- Storybook
- Tailwind CSS
- Class Variance Authority
- pnpm Workspace

## Contributing

Contributions, issues, and feature requests are welcome.

Please read `CONTRIBUTING.md` before submitting a pull request.

## License

MIT License.
