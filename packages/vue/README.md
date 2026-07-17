# @xron-ui/vue

Vue 3 component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @xron-ui/vue
```

## Usage

Import the stylesheet once in your application entry.

On `main.ts`:

```ts
import "@xron-ui/vue/styles.css";
```

Import components:

```ts
import { Button, Spinner } from "@xron-ui/vue";
```

Example:

```vue
<script setup lang="ts">
import { Button } from "@xron-ui/vue";
</script>

<template>
  <Button> Submit </Button>
</template>
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
- [Radio](#radio)
- [Select](#select)
- [Switch](#switch)
- [Textarea](#textarea)

UI

- [Badge](#badge)
- [Button](#button)
- [Modal](#modal)
- [Spinner](#spinner)
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

```vue
<Button>
  Save
</Button>

<Button variant="secondary">
  Cancel
</Button>
```

### Outline

```vue
<Button appearance="outline">
  Save
</Button>

<Button variant="success" appearance="outline">
  Success
</Button>
```

### Ghost

```vue
<Button appearance="ghost">
  Cancel
</Button>

<Button variant="error" appearance="ghost">
  Delete
</Button>
```

### Loading

```vue
<Button loading>
  Saving...
</Button>
```

## Props

| Prop       | Type                                                            | Default     | Description                                           |
| ---------- | --------------------------------------------------------------- | ----------- | ----------------------------------------------------- |
| variant    | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Semantic color of the button                          |
| appearance | `"solid" \| "outline" \| "ghost"`                               | `"solid"`   | Visual appearance of the button                       |
| size       | `"sm" \| "md" \| "lg"`                                          | `"md"`      | Button size                                           |
| rounded    | `boolean`                                                       | `false`     | Displays a fully rounded button                       |
| fullWidth  | `boolean`                                                       | `false`     | Makes the button span the full width of its container |
| loading    | `boolean`                                                       | `false`     | Shows a loading spinner and disables the button       |
| disabled   | `boolean`                                                       | `false`     | Disables the button                                   |

### Slots

| Slot    | Description    |
| ------- | -------------- |
| default | Button content |

</details>

---
