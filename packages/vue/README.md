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
- [Label](#label)
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

### With FormControl

```vue
<FormControl label="Email" helperText="We'll never share your email address.">
  <Input
    v-model="email"
    type="email"
    placeholder="Enter your email"
  />
</FormControl>
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

<details>

<summary>

# InputPassword

</summary>

InputPassword allows users to securely enter passwords with a built-in visibility toggle. It supports multiple sizes, rounded style, error state, and all native HTML password input attributes.

## Example

### Basic

```vue
<InputPassword v-model="password" placeholder="Password" />
```

### Rounded

```vue
<InputPassword v-model="password" rounded />
```

### Error

```vue
<InputPassword v-model="password" error />
```

### Sizes

```vue
<InputPassword v-model="password" size="sm" />

<InputPassword v-model="password" size="md" />

<InputPassword v-model="password" size="lg" />
```

## Props

| Prop       | Type                   | Default | Description                          |
| ---------- | ---------------------- | ------- | ------------------------------------ |
| modelValue | `string`               | `""`    | Password value used by `v-model`     |
| size       | `"sm" \| "md" \| "lg"` | `"md"`  | Input size                           |
| rounded    | `boolean`              | `false` | Displays a fully rounded input       |
| error      | `boolean`              | `false` | Displays the input in an error state |

The component also supports all native HTML input attributes such as:

- `autocomplete`
- `placeholder`
- `disabled`
- `readonly`
- `required`
- `maxlength`
- `minlength`
- `name`

## Events

| Event               | Payload  | Description                           |
| ------------------- | -------- | ------------------------------------- |
| `update:modelValue` | `string` | Fired when the password value changes |

</details>

---

<details>

<summary>

# Label

</summary>

Label provides an accessible text label for form controls such as inputs, selects, checkboxes, and other interactive elements.

## Example

### Basic

```vue
<Label htmlFor="email">
  Email Address
</Label>

<Input id="email" />
```

### With FormControl

```vue
<FormControl label="Email Address">
  <Input />
</FormControl>
```

When used inside `FormControl`, the `htmlFor` association is handled automatically.

## Props

| Prop    | Type     | Default | Description                                                                        |
| ------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| htmlFor | `string` | —       | Associates the label with a form control. Optional when used inside `FormControl`. |

## Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Label content |

</details>

---

<details>

<summary>

# FormControl

</summary>

FormControl groups a form field with its associated label, helper text, and error message. It also automatically associates labels with supported form components such as `Input`, `InputPassword`, and `InputFile`.

## Example

### Basic

```vue
<FormControl label="Email">
  <Input v-model="email" />
</FormControl>
```

### Helper Text

```vue
<FormControl label="Email" helperText="We'll never share your email.">
  <Input v-model="email" />
</FormControl>
```

### Error

```vue
<FormControl label="Email" error="Email is required.">
  <Input
    v-model="email"
    error
  />
</FormControl>
```

### Required

```vue
<FormControl label="Password" required>
  <InputPassword
    v-model="password"
  />
</FormControl>
```

## Props

| Prop       | Type      | Default | Description                                           |
| ---------- | --------- | ------- | ----------------------------------------------------- |
| label      | `string`  | —       | Label displayed above the form control                |
| helperText | `string`  | —       | Helper text displayed below the form control          |
| error      | `string`  | —       | Error message displayed below the form control        |
| required   | `boolean` | `false` | Displays a required indicator (`*`) next to the label |

## Slots

| Slot    | Description                                                |
| ------- | ---------------------------------------------------------- |
| default | The form control component (Input, Select, Checkbox, etc.) |

</details>

---

<details>

<summary>

# Radio

</summary>

Radio allows users to select a single option from a group. It must be used together with `RadioGroup`.

## Example

### Basic

```vue
<RadioGroup v-model="gender">
  <Radio value="male">
    Male
  </Radio>

  <Radio value="female">
    Female
  </Radio>
</RadioGroup>
```

### With FormControl

```vue
<FormControl label="Gender">
  <RadioGroup v-model="gender">
    <Radio value="male">
      Male
    </Radio>

    <Radio value="female">
      Female
    </Radio>
  </RadioGroup>
</FormControl>
```

### Disabled

```vue
<RadioGroup v-model="plan">
  <Radio
    value="free"
    disabled
  >
    Free
  </Radio>

  <Radio
    value="pro"
    disabled
  >
    Pro
  </Radio>
</RadioGroup>
```

## Radio Props

| Prop  | Type                          | Default | Description                           |
| ----- | ----------------------------- | ------- | ------------------------------------- |
| value | `string \| number \| boolean` | —       | Value represented by the radio option |
| error | `boolean`                     | `false` | Displays the error state              |

Inherited HTML attributes such as `disabled`, `name`, and `id` are also supported.

## RadioGroup Props

| Prop       | Type                          | Default | Description    |
| ---------- | ----------------------------- | ------- | -------------- |
| modelValue | `string \| number \| boolean` | —       | Selected value |

## Slots

| Slot    | Description         |
| ------- | ------------------- |
| default | Radio label content |

</details>

---

<details>

<summary>

# Switch

</summary>

Switch allows users to toggle a boolean value on or off. It supports multiple sizes, disabled and error states, and integrates seamlessly with `FormControl`.

## Example

### Basic

```vue
<Switch v-model="enabled">
  Enable notifications
</Switch>
```

### Sizes

```vue
<Switch v-model="small" size="sm">
  Small
</Switch>

<Switch v-model="medium" size="md">
  Medium
</Switch>

<Switch v-model="large" size="lg">
  Large
</Switch>
```

### Disabled

```vue
<Switch v-model="enabled" disabled>
  Disabled
</Switch>
```

### With FormControl

```vue
<FormControl
  label="Notification Settings"
  helperText="Manage your notification preferences."
>
  <Switch v-model="enabled">
    Email Notifications
  </Switch>
</FormControl>
```

### Error

```vue
<FormControl label="Terms" error="You must enable this option.">
  <Switch
    v-model="accepted"
    error
  >
    Accept Terms
  </Switch>
</FormControl>
```

## Props

| Prop       | Type                   | Default | Description              |
| ---------- | ---------------------- | ------- | ------------------------ |
| modelValue | `boolean`              | `false` | Current switch state     |
| size       | `"sm" \| "md" \| "lg"` | `"md"`  | Switch size              |
| error      | `boolean`              | `false` | Displays the error state |

All native HTML input attributes such as `disabled`, `name`, `id`, and `required` are also supported.

## Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | Switch label content |

</details>

---

<details>

<summary>

# Textarea

</summary>

Textarea allows users to enter multi-line text. It supports multiple sizes, disabled and error states, and integrates with `FormControl`.

## Example

### Basic

```vue
<Textarea v-model="description" placeholder="Enter description..." />
```

### Sizes

```vue
<Textarea v-model="value" size="sm" />

<Textarea v-model="value" size="md" />

<Textarea v-model="value" size="lg" />
```

### Disabled

```vue
<Textarea v-model="value" disabled />
```

### With FormControl

```vue
<FormControl label="Description" helperText="Maximum 500 characters.">
  <Textarea
    v-model="description"
    placeholder="Write something..."
  />
</FormControl>
```

### Error

```vue
<FormControl label="Description" error="Description is required.">
  <Textarea
    v-model="description"
    error
  />
</FormControl>
```

## Props

| Prop       | Type                   | Default | Description              |
| ---------- | ---------------------- | ------- | ------------------------ |
| modelValue | `string`               | `""`    | Current textarea value   |
| size       | `"sm" \| "md" \| "lg"` | `"md"`  | Textarea size            |
| error      | `boolean`              | `false` | Displays the error state |

All native `<textarea>` attributes such as `placeholder`, `rows`, `cols`, `disabled`, `maxlength`, `readonly`, `required`, `name`, and `id` are also supported.

</details>

---

<details>

<summary>

# Checkbox

</summary>

Checkbox allows users to select one or more independent options. It supports checked, indeterminate, disabled, and error states, and integrates with `FormControl`.

## Example

### Basic

```vue
<Checkbox v-model="checked">
  Accept terms and conditions
</Checkbox>
```

### Checked

```vue
<Checkbox v-model="checked">
  Receive newsletter
</Checkbox>
```

### Indeterminate

```vue
<Checkbox v-model="checked" indeterminate>
  Select all
</Checkbox>
```

### Disabled

```vue
<Checkbox v-model="checked" disabled>
  Disabled option
</Checkbox>
```

### With FormControl

```vue
<FormControl label="Permissions" helperText="Select one or more permissions.">
  <Checkbox v-model="read">
    Read
  </Checkbox>

  <Checkbox v-model="write">
    Write
  </Checkbox>

  <Checkbox v-model="remove">
    Delete
  </Checkbox>
</FormControl>
```

### Error

```vue
<FormControl label="Agreement" error="You must accept the agreement.">
  <Checkbox
    v-model="accepted"
    error
  >
    I agree to the terms and conditions.
  </Checkbox>
</FormControl>
```

## Props

| Prop          | Type      | Default | Description                      |
| ------------- | --------- | ------- | -------------------------------- |
| modelValue    | `boolean` | `false` | Current checked state            |
| error         | `boolean` | `false` | Displays the error state         |
| indeterminate | `boolean` | `false` | Displays the indeterminate state |

All native checkbox attributes such as `disabled`, `name`, `id`, `required`, and `value` are also supported.

## Slots

| Slot    | Description    |
| ------- | -------------- |
| default | Checkbox label |

</details>

---
