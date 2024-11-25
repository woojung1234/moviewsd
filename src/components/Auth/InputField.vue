<template>
  <div class="input" :class="{ active: value }">
    <input
        :id="id"
        :type="type"
        v-model="modelValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :required="required"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text",
    },
    modelValue: String,
    required: Boolean,
  },
  emits: ["update:modelValue"],
};
</script>
