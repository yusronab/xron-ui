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

<details>

<summary>

# Badge

</summary>

Badges are used to display status, labels, categories, or short pieces of information. They support multiple semantic colors, outline styles, and sizes.

## Example

### Solid

```vue
<Badge>
  Default
</Badge>

<Badge variant="success">
  Success
</Badge>

<Badge variant="danger">
  Danger
</Badge>
```

### Outline

```vue
<Badge outline>
  Default
</Badge>

<Badge variant="success" outline>
  Success
</Badge>

<Badge variant="danger" outline>
  Danger
</Badge>
```

### Sizes

```vue
<Badge size="sm">
  Small
</Badge>

<Badge size="md">
  Medium
</Badge>

<Badge size="lg">
  Large
</Badge>
```

## Props

| Prop    | Type                                                                       | Default     | Description                              |
| ------- | -------------------------------------------------------------------------- | ----------- | ---------------------------------------- |
| variant | `"primary" \| "secondary" \| "success" \| "warning" \| "danger" \| "info"` | `"primary"` | Semantic color of the badge              |
| size    | `"sm" \| "md" \| "lg"`                                                     | `"md"`      | Badge size                               |
| outline | `boolean`                                                                  | `false`     | Displays the badge with an outline style |

### Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Badge content |

</details>

---

<details>

<summary>

# HelperText

</summary>

Helper text provides additional guidance, hints, or validation messages for form controls. It supports both default and error states.

## Example

### Default

```vue
<HelperText>
  We'll never share your email.
</HelperText>
```

### Error

```vue
<HelperText error>
  Email is required.
</HelperText>
```

## Props

| Prop  | Type      | Default | Description                          |
| ----- | --------- | ------- | ------------------------------------ |
| error | `boolean` | `false` | Displays the helper text as an error |

### Slots

| Slot    | Description         |
| ------- | ------------------- |
| default | Helper text content |

</details>

---

<details>

<summary>

# Input

</summary>

Inputs allow users to enter and edit text. They support multiple sizes, rounded style, error state, and all native HTML input attributes.

## Example

### Basic

```vue
<Input v-model="name" placeholder="Your name" />
```

### Rounded

```vue
<Input v-model="search" rounded placeholder="Search..." />
```

### Error

```vue
<Input v-model="email" error placeholder="Email" />
```

### Sizes

```vue
<Input size="sm" placeholder="Small" />

<Input size="md" placeholder="Medium" />

<Input size="lg" placeholder="Large" />
```

## Props

| Prop       | Type                   | Default | Description                          |
| ---------- | ---------------------- | ------- | ------------------------------------ |
| modelValue | `string \| number`     | `""`    | Input value used by `v-model`        |
| size       | `"sm" \| "md" \| "lg"` | `"md"`  | Input size                           |
| rounded    | `boolean`              | `false` | Displays a fully rounded input       |
| error      | `boolean`              | `false` | Displays the input in an error state |

In addition to the props above, the component supports all native HTML input attributes such as `id`, `type`, `placeholder`, `disabled`, `readonly`, `maxlength`, `autocomplete`, and more.

</details>

---

<details>

<summary>

# InputFile

</summary>

InputFile allows users to select one or more files from their device. It supports drag and drop, image previews, validation, multiple selection, and customizable appearance.

## Example

### Basic

```vue
<InputFile v-model="file" />
```

### Multiple Files

```vue
<InputFile v-model="files" multiple />
```

### Image Preview

```vue
<InputFile v-model="image" preview accept="image/*" />
```

### Rounded

```vue
<InputFile v-model="file" rounded />
```

## Props

| Prop         | Type                     | Default            | Description                                |
| ------------ | ------------------------ | ------------------ | ------------------------------------------ |
| modelValue   | `File \| File[] \| null` | `null`             | Selected file(s) used with `v-model`       |
| placeholder  | `string`                 | `"Choose file..."` | Placeholder shown when no file is selected |
| size         | `"sm" \| "md" \| "lg"`   | `"md"`             | Input size                                 |
| rounded      | `boolean`                | `false`            | Displays a fully rounded input             |
| error        | `boolean`                | `false`            | Displays the input in an error state       |
| preview      | `boolean`                | `false`            | Shows image previews                       |
| previewShape | `"square" \| "circle"`   | `"square"`         | Shape of image previews                    |
| previewSize  | `number`                 | `120`              | Width and height of image previews (px)    |
| maxSize      | `number`                 | —                  | Maximum allowed file size in bytes         |
| allowedTypes | `string[]`               | —                  | List of allowed MIME types                 |

The component also supports all native HTML file input attributes such as:

- `accept`
- `multiple`
- `disabled`
- `required`
- `capture`
- `name`

## Events

| Event               | Payload                  | Description                            |
| ------------------- | ------------------------ | -------------------------------------- |
| `update:modelValue` | `File \| File[] \| null` | Fired when the selected file(s) change |
| `validation-error`  | `string`                 | Fired when file validation fails       |

## Slots

| Slot       | Description              |
| ---------- | ------------------------ |
| `icon`     | Custom upload icon       |
| `filename` | Custom file name display |
| `clear`    | Custom clear button      |
| `preview`  | Custom preview content   |

</details>

---
