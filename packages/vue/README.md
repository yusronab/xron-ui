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

<details>

<summary>

# Select

</summary>

Select allows users to choose a single option from a dropdown list. It supports loading, empty state, clearable selections, custom option rendering, custom value rendering, and integrates with FormControl.

## Example

### Basic

```vue
<Select v-model="fruit" :options="options" labelKey="name" valueKey="id" />
```

### Clearable

```vue
<Select
  v-model="fruit"
  :options="options"
  labelKey="name"
  valueKey="id"
  clearable
></Select>
```

### Loading

```vue
<Select loading :options="[]" labelKey="name" valueKey="id" />
```

### Custom Option

```vue
<Select v-model="fruit" :options="options" labelKey="name" valueKey="id">
  <template #option="{ option }">
    🍎 {{ option.name }}
  </template>
</Select>
```

### Custom Selected Value

```vue
<Select v-model="fruit" :options="options" labelKey="name" valueKey="id">
  <template #value="{ option }">
    {{ option?.name ?? "Choose fruit" }}
  </template>
</Select>
```

### With FormControl

```vue
<FormControl label="Country" helperText="Select your country.">
  <Select
    v-model="country"
    :options="countries"
    labelKey="name"
    valueKey="id"
  />
</FormControl>
```

## Props

| Prop        | Type                   | Default        | Description                    |
| ----------- | ---------------------- | -------------- | ------------------------------ |
| modelValue  | `string \| number`     | -              | Selected value                 |
| options     | `SelectOption[]`       | **required**   | Options list                   |
| labelKey    | `string`               | **required**   | Object key used as label       |
| valueKey    | `string`               | **required**   | Object key used as value       |
| placeholder | `string`               | `"Select..."`  | Placeholder text               |
| loading     | `boolean`              | `false`        | Displays loading state         |
| loadingText | `string`               | `"Loading..."` | Loading text                   |
| emptyText   | `string`               | `"No data"`    | Empty state text               |
| clearable   | `boolean`              | `false`        | Allows clearing selected value |
| size        | `"sm" \| "md" \| "lg"` | `"md"`         | Component size                 |
| rounded     | `boolean`              | `false`        | Fully rounded style            |
| error       | `boolean`              | `false`        | Error state                    |
| disabled    | `boolean`              | `false`        | Disabled state                 |

### Events

| Event             | Description                       |
| ----------------- | --------------------------------- |
| update:modelValue | Fired when selected value changes |
| change            | Fired when selection changes      |

### Slots

| Slot    | Description                    |
| ------- | ------------------------------ |
| default | Default dropdown content       |
| option  | Custom option renderer         |
| value   | Custom selected value renderer |
| clear   | Custom clear icon              |

</details>

---

<details>

<summary>

# Autocomplete

</summary>

Autocomplete allows users to search and select a single option from a dropdown list. It supports local filtering, asynchronous search, loading state, clearable input, keyboard navigation, custom option rendering, and integrates with FormControl.

## Example

### Basic

```tsx
<Autocomplete
  v-model="fruit"
  :options="options"
  labelKey="name"
  valueKey="id"
/>
```

### Async Search

```tsx
<Autocomplete
  v-model="user"
  :options="users"
  labelKey="name"
  valueKey="id"
  @search="handleSearch"
/>
```

### Clearable

```tsx
<Autocomplete
  v-model="fruit"
  :options="options"
  labelKey="name"
  valueKey="id"
  clearable
/>
```

### Loading

```vue
<Autocomplete loading :options="[]" labelKey="name" valueKey="id" />
```

### Custom Option

```vue
<Autocomplete v-model="fruit" :options="options" labelKey="name" valueKey="id">
  <template #option="{ option }">
    🍎 {{ option.name }}
  </template>
</Autocomplete>
```

### With FormControl

```vue
<FormControl label="Country" helperText="Search your country.">
  <Autocomplete
    v-model="country"
    :options="countries"
    labelKey="name"
    valueKey="id"
  />
</FormControl>
```

## Props

| Prop        | Type                   | Default        | Description                     |
| ----------- | ---------------------- | -------------- | ------------------------------- |
| modelValue  | `string \| number`     | -              | Selected value                  |
| options     | `Option[]`             | **required**   | Options list                    |
| labelKey    | `string`               | **required**   | Object key used as label        |
| valueKey    | `string`               | **required**   | Object key used as value        |
| placeholder | `string`               | `""`           | Placeholder text                |
| loading     | `boolean`              | `false`        | Displays loading state          |
| loadingText | `string`               | `"Loading..."` | Loading text                    |
| emptyText   | `string`               | `"No data"`    | Empty state text                |
| clearable   | `boolean`              | `false`        | Allows clearing current value   |
| debounce    | `number`               | `300`          | Search debounce in milliseconds |
| size        | `"sm" \| "md" \| "lg"` | `"md"`         | Component size                  |
| rounded     | `boolean`              | `false`        | Fully rounded style             |
| error       | `boolean`              | `false`        | Error state                     |
| disabled    | `boolean`              | `false`        | Disabled state                  |

### Events

| Event             | Description                                       |
| ----------------- | ------------------------------------------------- |
| update:modelValue | Fired when selected value changes                 |
| change            | Fired when option changes                         |
| search            | Fired after debounce whenever the keyword changes |

### Slots

| Slot   | Description            |
| ------ | ---------------------- |
| option | Custom option renderer |
| clear  | Custom clear icon      |

</details>

---

<details>

<summary>

# MultiSelect

</summary>

MultiSelect allows users to select multiple options from a dropdown list. It supports keyboard navigation, Select All, loading state, custom option rendering, custom selected value rendering, and integrates with FormControl.

## Example

### Basic

```tsx
<MultiSelect
  v-model="fruits"
  :options="options"
  labelKey="name"
  valueKey="id"
/>
```

### Loading

```vue
<MultiSelect loading :options="[]" labelKey="name" valueKey="id" />
```

### Custom Option

```vue
<MultiSelect v-model="fruits" :options="options" labelKey="name" valueKey="id">
  <template #option="{ option, selected, active }">
    <div
      :style="{
        fontWeight: selected ? '600' : '400',
        opacity: active ? 1 : 0.75,
      }"
    >
      🍎 {{ option.name }}
    </div>
  </template>
</MultiSelect>
```

### Custom Selected Value

```vue
<MultiSelect v-model="fruits" :options="options" labelKey="name" valueKey="id">
  <template #value="{ options }">
    {{ options.length }} selected
  </template>
</MultiSelect>
```

### With FormControl

```vue
<FormControl label="Favorite Fruits" helperText="Select one or more fruits.">
  <MultiSelect
    v-model="fruits"
    :options="options"
    labelKey="name"
    valueKey="id"
  />
</FormControl>
```

## Props

| Prop        | Type                   | Default        | Description              |
| ----------- | ---------------------- | -------------- | ------------------------ |
| modelValue  | `(string \| number)[]` | `[]`           | Selected values          |
| options     | `Option[]`             | **required**   | Options list             |
| labelKey    | `string`               | **required**   | Object key used as label |
| valueKey    | `string`               | **required**   | Object key used as value |
| placeholder | `string`               | `"Select..."`  | Placeholder text         |
| loading     | `boolean`              | `false`        | Displays loading state   |
| loadingText | `string`               | `"Loading..."` | Loading text             |
| emptyText   | `string`               | `"No data"`    | Empty state text         |
| size        | `"sm" \| "md" \| "lg"` | `"md"`         | Component size           |
| rounded     | `boolean`              | `false`        | Fully rounded style      |
| error       | `boolean`              | `false`        | Error state              |
| disabled    | `boolean`              | `false`        | Disabled state           |

### Events

| Event             | Description                       |
| ----------------- | --------------------------------- |
| update:modelValue | Fired when selected values change |
| change            | Fired when selected values change |

### Slots

| Slot   | Description                    |
| ------ | ------------------------------ |
| option | Custom option renderer         |
| value  | Custom selected value renderer |

</details>

---

<details>

<summary>

# PageSize

</summary>

PageSize allows users to select the number of items displayed per page. It is built on top of the Select component and supports custom options, loading state, prefix and suffix content, and integrates well with pagination components.

## Example

### Basic

```vue
<PageSize v-model="pageSize" />
```

### Custom Options

```tsx
<PageSize
  v-model="pageSize"
  :options="[
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 },
  ]"
/>
```

### Prefix & Suffix

```vue
<PageSize v-model="pageSize">
  <template #prefix>
    Show
  </template>

  <template #suffix>
    entries
  </template>
</PageSize>
```

### Loading

```vue
<PageSize loading />
```

## Props

| Prop        | Type                   | Default          | Description                 |
| ----------- | ---------------------- | ---------------- | --------------------------- |
| modelValue  | `number`               | **required**     | Selected page size          |
| options     | `Option[]`             | `[10,20,50,100]` | Available page size options |
| placeholder | `string`               | `"Select..."`    | Placeholder text            |
| loading     | `boolean`              | `false`          | Displays loading state      |
| loadingText | `string`               | `"Loading..."`   | Loading text                |
| emptyText   | `string`               | `"No data"`      | Empty state text            |
| size        | `"sm" \| "md" \| "lg"` | `"md"`           | Component size              |
| rounded     | `boolean`              | `false`          | Fully rounded style         |
| error       | `boolean`              | `false`          | Error state                 |
| disabled    | `boolean`              | `false`          | Disabled state              |

### Events

| Event             | Description                  |
| ----------------- | ---------------------------- |
| update:modelValue | Fired when page size changes |
| change            | Fired when page size changes |

### Slots

| Slot   | Description                         |
| ------ | ----------------------------------- |
| prefix | Content displayed before the select |
| suffix | Content displayed after the select  |

</details>

---

<details>

<summary>

# Pagination

</summary>

Pagination allows users to navigate through multiple pages of data. It supports first/previous/next/last navigation, configurable sibling count, customizable button styles, and integrates with PageSize for complete table pagination.

## Example

### Basic

```tsx
<Pagination
  :page="page"
  :page-size="pageSize"
  :total="100"
  @page-change="page = $event"
/>
```

### Custom Button Style

```tsx
<Pagination
  :page="page"
  :page-size="pageSize"
  :total="100"
  buttonVariant="secondary"
  buttonSize="sm"
  buttonRounded
  @page-change="page = $event"
/>
```

### Sibling Count

```tsx
<Pagination
  :page="page"
  :page-size="pageSize"
  :total="100"
  :sibling-count="2"
  @page-change="page = $event"
/>
```

### With PageSize

```vue
<div class="flex items-center justify-between">
  <PageSize
    v-model="pageSize"
  />

  <Pagination
    :page="page"
    :page-size="pageSize"
    :total="250"
    @page-change="page = $event"
  />
</div>
```

## Props

| Prop          | Type                                                             | Default      | Description                                     |
| ------------- | ---------------------------------------------------------------- | ------------ | ----------------------------------------------- |
| page          | `number`                                                         | **required** | Current page                                    |
| pageSize      | `number`                                                         | **required** | Items per page                                  |
| total         | `number`                                                         | **required** | Total number of items                           |
| siblingCount  | `number`                                                         | `1`          | Number of visible pages beside the current page |
| buttonVariant | `"primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"primary"`  | Pagination button variant                       |
| buttonSize    | `"sm" \| "md" \| "lg"`                                           | `"md"`       | Pagination button size                          |
| buttonRounded | `boolean`                                                        | `false`      | Fully rounded pagination buttons                |

### Events

| Event      | Description                         |
| ---------- | ----------------------------------- |
| pageChange | Fired when the current page changes |

</details>

---

<details>

<summary>

# Table

</summary>

Table displays structured data with support for sorting, row selection, striped rows, custom header and cell slots, and empty states.

## Example

### Basic

```vue
<Table :columns="columns" :data="users" rowKey="id" />
```

### Sortable Columns

```tsx
<Table
  :columns="columns"
  :data="users"
  rowKey="id"
  :sorting="sorting"
  @sort="handleSort"
/>
```

### Row Selection

```tsx
<Table
  :columns="columns"
  :data="users"
  rowKey="id"
  :selection="selection"
  @selection-change="handleSelection"
/>
```

### Custom Cell

```vue
<Table :columns="columns" :data="users" rowKey="id">
  <template #email="{ value }">
    <a :href="`mailto:${value}`">
      {{ value }}
    </a>
  </template>

  <template #status="{ value }">
    <Badge>
      {{ value }}
    </Badge>
  </template>
</Table>
```

### Custom Header

```vue
<Table :columns="columns" :data="users" rowKey="id">
  <template #header-email>
    📧 Email
  </template>

  <template #header-status>
    Status
  </template>
</Table>
```

### Empty State

```vue
<Table :columns="columns" :data="[]" rowKey="id">
  <template #empty>
    No users found.
  </template>
</Table>
```

### With Pagination

```vue
<script setup lang="ts">
import { computed, ref } from "vue";

const page = ref(1);
const pageSize = ref(10);

const paginatedData = computed(() => {
  const start = (page.value - 1) * pageSize.value;

  return users.slice(start, start + pageSize.value);
});
</script>

<Table :columns="columns" :data="paginatedData" rowKey="id" />

<div class="mt-4 flex items-center justify-between">
  <PageSize
    v-model="pageSize"
  />

  <Pagination
    :page="page"
    :page-size="pageSize"
    :total="users.length"
    @page-change="page = $event"
  />
</div>
```

## Props

| Prop      | Type             | Default      | Description                 |
| --------- | ---------------- | ------------ | --------------------------- |
| columns   | `TableColumn[]`  | **required** | Table column definitions    |
| data      | `TableRecord[]`  | **required** | Table data                  |
| rowKey    | `string`         | **required** | Unique key field            |
| striped   | `boolean`        | `true`       | Alternate row background    |
| sorting   | `TableSorting`   | -            | Sorting configuration       |
| selection | `TableSelection` | -            | Row selection configuration |
| emptyText | `string`         | `"No data"`  | Empty state text            |

### Events

| Event            | Description                     |
| ---------------- | ------------------------------- |
| sort             | Fired when sorting changes      |
| selection-change | Fired when selected rows change |

### Slots

| Slot                   | Description          |
| ---------------------- | -------------------- |
| empty                  | Custom empty state   |
| `#header-{column.key}` | Custom column header |
| `#{column.key}`        | Custom cell renderer |

</details>

---

<details>

<summary>

# Modal

</summary>

Modal displays content in a dialog above the page. It supports multiple sizes, keyboard dismissal, overlay dismissal, and integrates naturally with Vue using `v-model`.

## Example

### Basic

```vue
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>

<Button @click="open = true">
  Open Modal
</Button>

<Modal v-model="open">
  <h2 class="text-lg font-semibold">
    Modal Title
  </h2>

  <p class="mt-2">
    This is the modal content.
  </p>
</Modal>
```

### Different Sizes

```vue
<Modal v-model="open" size="sm">
  Small modal
</Modal>

<Modal v-model="open" size="lg">
  Large modal
</Modal>
```

### Disable Escape Close

```vue
<Modal v-model="open" :closeOnEscape="false">
  Cannot close with Escape.
</Modal>
```

### Disable Overlay Close

```vue
<Modal v-model="open" :closeOnOverlayClick="false">
  Cannot close by clicking outside.
</Modal>
```

## Props

| Prop                | Type                                     | Default | Description                  |
| ------------------- | ---------------------------------------- | ------- | ---------------------------- |
| modelValue          | `boolean`                                | `false` | Controls modal visibility    |
| size                | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"`  | Modal size                   |
| closeOnEscape       | `boolean`                                | `true`  | Close when Escape is pressed |
| closeOnOverlayClick | `boolean`                                | `true`  | Close when clicking backdrop |

### Events

| Event             | Description                   |
| ----------------- | ----------------------------- |
| update:modelValue | Fired when visibility changes |
| close             | Fired when modal closes       |

### Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Modal content |

</details>

---

<details>

<summary>

# Tooltip

</summary>

Tooltip displays additional information when users hover or focus an element. It supports multiple placements, configurable delay, automatic viewport flipping, optional arrow, and dark mode.

## Example

### Basic

```vue
<Tooltip content="Save changes">
  <Button>Save</Button>
</Tooltip>
```

### Position

```vue
<Tooltip content="Top Left" position="top-left">
  <Button>Top Left</Button>
</Tooltip>

<Tooltip content="Bottom Center" position="bottom-center">
  <Button>Bottom Center</Button>
</Tooltip>

<Tooltip content="Right" position="right">
  <Button>Right</Button>
</Tooltip>
```

### Different Sizes

```vue
<Tooltip content="Small tooltip" size="sm">
  <Button>Small</Button>
</Tooltip>

<Tooltip content="Medium tooltip" size="md">
  <Button>Medium</Button>
</Tooltip>

<Tooltip content="Large tooltip" size="lg">
  <Button>Large</Button>
</Tooltip>
```

### Without Arrow

```vue
<Tooltip content="No arrow" :arrow="false">
  <Button>Hover me</Button>
</Tooltip>
```

### Custom Delay

```vue
<Tooltip content="Appears after one second" :delay="1000">
  <Button>Hover me</Button>
</Tooltip>
```

### Disabled

```vue
<Tooltip content="Hidden tooltip" disabled>
  <Button>Disabled</Button>
</Tooltip>
```

## Props

| Prop     | Type                                                                                                                   | Default           | Description                          |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------ |
| content  | `string`                                                                                                               | **required**      | Tooltip content                      |
| position | `"top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right" \| "left" \| "right"` | `"bottom-center"` | Tooltip placement                    |
| size     | `"sm" \| "md" \| "lg"`                                                                                                 | `"md"`            | Tooltip size                         |
| delay    | `number`                                                                                                               | `200`             | Delay before showing tooltip         |
| offset   | `number`                                                                                                               | `8`               | Distance between trigger and tooltip |
| arrow    | `boolean`                                                                                                              | `true`            | Displays tooltip arrow               |
| disabled | `boolean`                                                                                                              | `false`           | Disables tooltip                     |

### Slots

| Slot    | Description             |
| ------- | ----------------------- |
| default | Tooltip trigger element |

</details>

---
