<script setup lang="ts">
import Label from "../Label/Label.vue";
import HelperText from "../HelperText/HelperText.vue";

import type { FormControlProps } from "./FormControl.types";
import { computed, provide, useId } from "vue";
import { formControlKey } from "../../composables/form-control.js";

defineOptions({
  name: "FormControl",
});

defineProps<FormControlProps>();

const id = computed(() => useId());

provide(formControlKey, {
  id,
});
</script>

<template>
  <div class="flex w-full flex-col gap-1.5">
    <Label v-if="label">
      {{ label }}

      <span v-if="required" class="ml-1 text-red-500"> * </span>
    </Label>

    <slot />

    <HelperText v-if="helperText" :error="error">
      {{ helperText }}
    </HelperText>
  </div>
</template>
