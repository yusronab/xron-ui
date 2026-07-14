# @xron-ui/react

React component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @xron-ui/react
```

## Usage

Import the stylesheet once in your application entry. On `main.tsx`:

```tsx
import "@xron-ui/react/styles.css";
```

Import components:

```tsx
import { Button, Input } from "@xron-ui/react";
```

Example:

```tsx
import { Button, Input } from "@xron-ui/react";

function App() {
  return (
    <div>
      <Button>Submit</Button>

      <Input placeholder="Email" />
    </div>
  );
}

export default App;
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
- [Spinner](#spinner)

---

<details>

<summary>

# Button

</summary>

Buttons allow users to perform actions.

## Example

```tsx
<Button>
  Save
</Button>

<Button variant="secondary">
  Cancel
</Button>

<Button loading>
  Saving...
</Button>
```

## Props

| Prop      | Type                                   | Default     | Description           |
| --------- | -------------------------------------- | ----------- | --------------------- |
| variant   | `"primary" \| "secondary" \| "danger"` | `"primary"` | Button style          |
| size      | `"sm" \| "md" \| "lg"`                 | `"md"`      | Button size           |
| loading   | `boolean`                              | `false`     | Shows loading spinner |
| disabled  | `boolean`                              | `false`     | Disables button       |
| fullWidth | `boolean`                              | `false`     | Full width button     |

</details>

---

<details>

<summary>

# Badge

</summary>

Displays status or labels.

## Example

```tsx
<Badge>
  Default
</Badge>

<Badge variant="success">
  Success
</Badge>

<Badge outline>
  Outline
</Badge>
```

## Props

| Prop    | Type                                                                                  | Default     | Description   |
| ------- | ------------------------------------------------------------------------------------- | ----------- | ------------- |
| variant | `"primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "info" \| "ghost"` | `"primary"` | Badge variant |
| size    | `"sm" \| "md" \| "lg"`                                                                | `"md"`      | Badge size    |
| outline | `boolean`                                                                             | `false`     | Outline badge |

</details>

---

<details>

<summary>

# Spinner

</summary>

Shows a loading indicator.

## Example

```tsx
<Spinner />

<Spinner size="lg" />
```

## Props

| Prop | Type                                   | Default | Description  |
| ---- | -------------------------------------- | ------- | ------------ |
| size | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`  | Spinner size |

</details

---

<details>

<summary>

# Input

</summary>

Text input field.

## Example

```tsx
<Input placeholder="Email" />
```

## Props

Extends all native `<input>` props.

Additional props:

| Prop      | Type      | Default | Description      |
| --------- | --------- | ------- | ---------------- |
| error     | `boolean` | `false` | Error state      |
| fullWidth | `boolean` | `false` | Full width input |

</details>

---

<details>

<summary>

# Select

</summary>

A customizable dropdown select component built using a button trigger.

## Example

```tsx
import { useState } from "react";
import { Select } from "@xron-ui/react";

const users = [
  {
    id: 1,
    name: "Administrator",
  },
  {
    id: 2,
    name: "Member",
  },
];

export default function App() {
  const [user, setUser] = useState<number>();

  return (
    <Select
      value={user}
      options={users}
      labelKey="name"
      valueKey="id"
      placeholder="Select user"
      onChange={(value) => setUser(Number(value))}
    />
  );
}
```

## Props

| Prop        | Type                      | Default        | Description                       |
| ----------- | ------------------------- | -------------- | --------------------------------- |
| value       | `string \| number`        | -              | Selected value                    |
| options     | `SelectOption[]`          | `[]`           | List of options                   |
| labelKey    | `string`                  | -              | Property used as label            |
| valueKey    | `string`                  | -              | Property used as value            |
| placeholder | `string`                  | `"Select..."`  | Placeholder text                  |
| loading     | `boolean`                 | `false`        | Displays loading state            |
| loadingText | `string`                  | `"Loading..."` | Loading message                   |
| emptyText   | `string`                  | `"No data"`    | Message when there are no options |
| disabled    | `boolean`                 | `false`        | Disables the select               |
| size        | `"sm" \| "md" \| "lg"`    | `"md"`         | Select size                       |
| onChange    | `(value, option) => void` | -              | Called when an option is selected |

</details>

---

<details>

<summary>

# Textarea

</summary>

A multiline text input component.

## Example

```tsx
<Textarea placeholder="Write something..." />
```

## Props

| Prop  | Type                   | Default | Description             |
| ----- | ---------------------- | ------- | ----------------------- |
| size  | `"sm" \| "md" \| "lg"` | `"md"`  | Textarea minimum height |
| error | `boolean`              | `false` | Displays error state    |

</details>

---

<details>

<summary>

# Autocomplete

</summary>

A searchable input component with built-in filtering, keyboard navigation, React Portal support, and asynchronous search.

## Example

### Basic

```tsx
import { useState } from "react";
import { Autocomplete } from "@xron-ui/react";

const users = [
  {
    id: 1,
    name: "Administrator",
  },
  {
    id: 2,
    name: "Member",
  },
  {
    id: 3,
    name: "Guest",
  },
];

export default function App() {
  const [user, setUser] = useState<number>();

  return (
    <Autocomplete
      value={user}
      options={users}
      labelKey="name"
      valueKey="id"
      placeholder="Search user..."
      onChange={(value) => setUser(Number(value))}
    />
  );
}
```

### Async Search

```tsx
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);

async function searchUsers(keyword: string) {
  setLoading(true);

  const response = await fetch(`/api/users?q=${keyword}`);
  const data = await response.json();

  setUsers(data);

  setLoading(false);
}

<Autocomplete
  options={users}
  labelKey="name"
  valueKey="id"
  loading={loading}
  debounce={500}
  onSearch={searchUsers}
/>;
```

### Clearable

```tsx
<Autocomplete clearable options={users} labelKey="name" valueKey="id" />
```

## Props

| Prop        | Type                                 | Default        | Description                                           |
| ----------- | ------------------------------------ | -------------- | ----------------------------------------------------- |
| value       | `string \| number`                   | -              | Selected value                                        |
| options     | `AutocompleteOption[]`               | `[]`           | List of available options                             |
| labelKey    | `string`                             | -              | Property used as option label                         |
| valueKey    | `string`                             | -              | Property used as option value                         |
| placeholder | `string`                             | -              | Input placeholder                                     |
| loading     | `boolean`                            | `false`        | Displays loading state                                |
| loadingText | `string`                             | `"Loading..."` | Loading message                                       |
| emptyText   | `string`                             | `"No data"`    | Message when no options are available                 |
| disabled    | `boolean`                            | `false`        | Disables the component                                |
| clearable   | `boolean`                            | `false`        | Displays a clear button                               |
| debounce    | `number`                             | `300`          | Delay before calling `onSearch`                       |
| size        | `"sm" \| "md" \| "lg"`               | `"md"`         | Input size                                            |
| rounded     | `boolean`                            | `false`        | Fully rounded input                                   |
| error       | `boolean`                            | `false`        | Displays error state                                  |
| onChange    | `(value, option) => void`            | -              | Called when an option is selected                     |
| onSearch    | `(keyword) => void \| Promise<void>` | -              | Called after debounce when the search keyword changes |

</details>

---

<details>

<summary>

# InputPassword

</summary>

A password input component with built-in visibility toggle.

## Example

### Basic

```tsx
import { InputPassword } from "@xron-ui/react";

export default function App() {
  return <InputPassword placeholder="Password" />;
}
```

### Rounded

```tsx
<InputPassword rounded />
```

### Error

```tsx
<InputPassword error />
```

### Large

```tsx
<InputPassword size="lg" />
```

### Disabled

```tsx
<InputPassword disabled />
```

## Props

| Prop    | Type                    | Default | Description          |
| ------- | ----------------------- | ------- | -------------------- |
| size    | `"sm" \| `"md"`\|`"lg"` | `"md"`  | Input size           |
| rounded | `boolean`               | `false` | Fully rounded input  |
| error   | `boolean`               | `false` | Displays error state |

> `InputPassword` extends all native `<input>` HTML attributes except `type` and the native HTML `size` attribute.

</details>

---

<details>

<summary>

# Checkbox

</summary>

A customizable checkbox component with built-in label support, custom styling, and accessibility.

## Example

### Basic

```tsx
import { Checkbox } from "@xron-ui/react";

export default function App() {
  return <Checkbox label="Remember me" />;
}
```

### Controlled

```tsx
import { useState } from "react";
import { Checkbox } from "@xron-ui/react";

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      label="Remember me"
      onCheckedChange={setChecked}
    />
  );
}
```

### Error

```tsx
<Checkbox error label="Accept Terms" />
```

### Disabled

```tsx
<Checkbox disabled label="Remember me" />
```

### Without Label

```tsx
<Checkbox checked />
```

## Props

| Prop            | Type                         | Default | Description                           |
| --------------- | ---------------------------- | ------- | ------------------------------------- |
| checked         | `boolean`                    | -       | Controlled checked state              |
| label           | `ReactNode`                  | -       | Checkbox label                        |
| error           | `boolean`                    | `false` | Displays error state                  |
| disabled        | `boolean`                    | `false` | Disables the checkbox                 |
| onCheckedChange | `(checked: boolean) => void` | -       | Called when the checked state changes |

> `Checkbox` extends all native `<input type="checkbox">` HTML attributes except `type`, `size`, and the native `onChange` event.

</details>

---

<details>

<summary>

# Radio

</summary>

A customizable radio button component with built-in label support and accessibility.

## Example

### Basic

```tsx
import { Radio } from "@xron-ui/react";

export default function App() {
  return <Radio name="role" value="admin" label="Administrator" />;
}
```

### Controlled

```tsx
import { useState } from "react";
import { Radio } from "@xron-ui/react";

export default function App() {
  const [role, setRole] = useState("admin");

  return (
    <>
      <Radio
        name="role"
        value="admin"
        checked={role === "admin"}
        label="Administrator"
        onCheckedChange={() => setRole("admin")}
      />

      <Radio
        name="role"
        value="member"
        checked={role === "member"}
        label="Member"
        onCheckedChange={() => setRole("member")}
      />
    </>
  );
}
```

### Error

```tsx
<Radio error name="role" value="admin" label="Administrator" />
```

### Disabled

```tsx
<Radio disabled name="role" value="admin" label="Administrator" />
```

### Without Label

```tsx
<Radio name="role" value="admin" checked />
```

## Props

| Prop            | Type                         | Default | Description                           |
| --------------- | ---------------------------- | ------- | ------------------------------------- |
| checked         | `boolean`                    | -       | Controlled checked state              |
| value           | `string \| number`           | -       | Radio value                           |
| name            | `string`                     | -       | Radio group name                      |
| label           | `ReactNode`                  | -       | Radio label                           |
| error           | `boolean`                    | `false` | Displays error state                  |
| disabled        | `boolean`                    | `false` | Disables the radio                    |
| onCheckedChange | `(checked: boolean) => void` | -       | Called when the checked state changes |

> `Radio` extends all native `<input type="radio">` HTML attributes except `type`, `size`, and the native `onChange` event.

</details>

---

<details>

<summary>

# Switch

</summary>

A customizable switch component for toggling between enabled and disabled states.

## Example

### Basic

```tsx
import { Switch } from "@xron-ui/react";

export default function App() {
  return <Switch label="Enable notifications" />;
}
```

### Controlled

```tsx
import { useState } from "react";
import { Switch } from "@xron-ui/react";

export default function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      label="Enable notifications"
      onCheckedChange={setEnabled}
    />
  );
}
```

### Small

```tsx
<Switch size="sm" label="Small switch" />
```

### Large

```tsx
<Switch size="lg" label="Large switch" />
```

### Error

```tsx
<Switch error label="Enable notifications" />
```

### Disabled

```tsx
<Switch disabled label="Enable notifications" />
```

### Without Label

```tsx
<Switch checked />
```

## Props

| Prop            | Type                         | Default | Description                           |
| --------------- | ---------------------------- | ------- | ------------------------------------- |
| checked         | `boolean`                    | -       | Controlled checked state              |
| label           | `ReactNode`                  | -       | Switch label                          |
| size            | `"sm" \| "md" \| "lg"`       | `"md"`  | Switch size                           |
| error           | `boolean`                    | `false` | Displays error state                  |
| disabled        | `boolean`                    | `false` | Disables the switch                   |
| onCheckedChange | `(checked: boolean) => void` | -       | Called when the checked state changes |

> `Switch` extends all native `<input type="checkbox">` HTML attributes except `type`, `size`, and the native `onChange` event.

</details>

---

<details>

<summary>

# InputFile

</summary>

A customizable file input component with image preview, drag & drop support, validation, and render props for full customization.

## Example

### Basic

```tsx
import { useState } from "react";
import { InputFile } from "@xron-ui/react";

export default function App() {
  const [file, setFile] = useState<File | null>(null);

  return <InputFile value={file} onChange={setFile} />;
}
```

### Image Upload

```tsx
<InputFile accept="image/*" value={file} onChange={setFile} />
```

### Image Preview

```tsx
<InputFile accept="image/*" preview value={file} onChange={setFile} />
```

### Multiple Files

```tsx
const [files, setFiles] = useState<File[]>([]);

<InputFile
  multiple
  preview
  value={files}
  onChange={(value) => setFiles(value as File[])}
/>;
```

### Validation

```tsx
<InputFile
  accept="image/*"
  maxSize={2 * 1024 * 1024}
  allowedTypes={["image/png", "image/jpeg"]}
  onValidationError={(message) => {
    console.error(message);
  }}
/>
```

### Custom File Name

```tsx
<InputFile
  value={files}
  renderFileName={(files) => (
    <span>
      {files.length === 0
        ? "Choose image..."
        : `${files.length} file(s) selected`}
    </span>
  )}
/>
```

### Custom Preview

```tsx
<InputFile
  preview
  value={files}
  renderPreview={(files) => (
    <div className="grid grid-cols-3 gap-2">
      {files.map((file) => (
        <img
          key={file.name}
          src={URL.createObjectURL(file)}
          className="aspect-square rounded-lg object-cover"
        />
      ))}
    </div>
  )}
/>
```

### Custom Upload Icon

```tsx
<InputFile renderIcon={() => <span>📁</span>} />
```

### Custom Clear Button

```tsx
<InputFile
  value={file}
  renderClearButton={(clear) => (
    <button type="button" onClick={clear}>
      Remove
    </button>
  )}
/>
```

## Props

| Prop              | Type                                     | Default    | Description                                 |
| ----------------- | ---------------------------------------- | ---------- | ------------------------------------------- |
| value             | `File \| File[] \| null`                 | -          | Selected file(s)                            |
| onChange          | `(file: File \| File[] \| null) => void` | -          | Called when the selected file(s) change     |
| accept            | `string`                                 | -          | Accepted file types                         |
| multiple          | `boolean`                                | `false`    | Allows multiple file selection              |
| disabled          | `boolean`                                | `false`    | Disables the component                      |
| preview           | `boolean`                                | `false`    | Displays image preview                      |
| previewShape      | `"square" \| "circle"`                   | `"square"` | Preview image shape                         |
| previewSize       | `number`                                 | `120`      | Preview image size in pixels                |
| maxSize           | `number`                                 | -          | Maximum file size in bytes                  |
| allowedTypes      | `string[]`                               | -          | Allowed MIME types                          |
| onValidationError | `(message: string) => void`              | -          | Called when validation fails                |
| renderFileName    | `(files: File[]) => ReactNode`           | -          | Custom renderer for the displayed file name |
| renderPreview     | `(files: File[]) => ReactNode`           | -          | Custom renderer for image previews          |
| renderIcon        | `() => ReactNode`                        | -          | Custom upload icon                          |
| renderClearButton | `(clear: () => void) => ReactNode`       | -          | Custom clear button                         |

> `InputFile` extends all native `<input type="file">` HTML attributes except `type`, `size`, `value`, and the native `onChange` event.

</details>

---
