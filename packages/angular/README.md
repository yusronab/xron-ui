# @xron-ui/angular

Angular 20 standalone component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @xron-ui/angular
```

## Usage

Import the stylesheet once in your application entry.

On `src/styles.scss`:

```scss
@import "@xron-ui/angular/styles.css";
```

Import components:

```ts
import { Button, Spinner } from "@xron-ui/angular";
```

Example:

```ts
import { Component } from "@angular/core";

import { Button } from "@xron-ui/angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [Button],
  template: ` <xr-button> Submit </xr-button> `,
})
export class AppComponent {}
```

## Components

Form

- [Autocomplete](#autocomplete)
- [Checkbox](#checkbox)
- [FormControl](#formcontrol)
- [HelperText](#helpertext)
- [Input](#input)
- [InputPassword](#inputpassword)
- [InputFile](#inputfile)
- [Label](#label)
- [MultiSelect](#multiselect)
- [Radio](#radio)
- [Select](#select)
- [Switch](#switch)
- [Textarea](#textarea)

UI

- [Avatar](#avatar)
- [Badge](#badge)
- [Button](#button) ✅️
- [Modal](#modal)
- [Skeleton](#skeleton)
- [Spinner](#spinner) ✅️
- [Text](#text)
- [Tooltip](#tooltip)

Table

- [PageSize](#pagesize)
- [Pagination](#pagination)
- [Table](#table)

---

<details>

<summary>

# Button

</summary>

Buttons allow users to perform actions and support multiple semantic colors, visual appearances, sizes, and states.

## Example

### Solid

```html
<xr-button> Save </xr-button>

<xr-button variant="secondary"> Cancel </xr-button>
```

### Outline

```html
<xr-button appearance="outline"> Save </xr-button>

<xr-button variant="success" appearance="outline"> Success </xr-button>
```

### Ghost

```html
<xr-button appearance="ghost"> Cancel </xr-button>

<xr-button variant="error" appearance="ghost"> Delete </xr-button>
```

### Loading

```html
<xr-button [loading]="true"> Saving... </xr-button>
```

## Inputs

| Input      | Type                                                            | Default     | Description                                           |
| ---------- | --------------------------------------------------------------- | ----------- | ----------------------------------------------------- |
| variant    | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Semantic color of the button                          |
| appearance | `"solid" \| "outline" \| "ghost"`                               | `"solid"`   | Visual appearance of the button                       |
| size       | `"sm" \| "md" \| "lg"`                                          | `"md"`      | Button size                                           |
| rounded    | `boolean`                                                       | `false`     | Displays a fully rounded button                       |
| fullWidth  | `boolean`                                                       | `false`     | Makes the button span the full width of its container |
| loading    | `boolean`                                                       | `false`     | Shows a loading spinner and disables the button       |
| disabled   | `boolean`                                                       | `false`     | Disables the button                                   |

## Content

```html
<xr-button> Button Content </xr-button>
```

</details>

---

<details>

<summary>

# Spinner

</summary>

Spinners indicate that an operation is currently in progress.

## Example

### Default

```html
<xr-spinner />
```

### Sizes

```html
<xr-spinner size="xs" />

<xr-spinner size="sm" />

<xr-spinner size="md" />

<xr-spinner size="lg" />

<xr-spinner size="xl" />
```

## Inputs

| Input | Type                                   | Default | Description               |
| ----- | -------------------------------------- | ------- | ------------------------- |
| size  | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`  | Controls the spinner size |

</details>

---
