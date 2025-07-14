<template>
  <div class="form-field">
    <label 
      :for="id" 
      class="block text-sm font-medium text-gray-700 mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    
    <!-- Input Field -->
    <input
      v-if="type !== 'textarea' && type !== 'select'"
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :class="inputClasses"
      :aria-describedby="hasError ? `${id}-error` : undefined"
      :aria-invalid="hasError"
      @input="handleInput"
      @blur="handleBlur"
    />
    
    <!-- Textarea Field -->
    <textarea
      v-else-if="type === 'textarea'"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :class="inputClasses"
      :aria-describedby="hasError ? `${id}-error` : undefined"
      :aria-invalid="hasError"
      @input="handleInput"
      @blur="handleBlur"
    ></textarea>
    
    <!-- Select Field -->
    <select
      v-else-if="type === 'select'"
      :id="id"
      :value="modelValue"
      :required="required"
      :class="inputClasses"
      :aria-describedby="hasError ? `${id}-error` : undefined"
      :aria-invalid="hasError"
      @change="handleInput"
      @blur="handleBlur"
    >
      <option value="">{{ selectPlaceholder || `Select ${label.toLowerCase()}` }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    
    <!-- Character Count (for textarea) -->
    <div 
      v-if="type === 'textarea' && showCharCount" 
      class="text-sm text-gray-500 mt-1 text-right"
    >
      {{ characterCount }}/{{ maxLength || 2000 }}
    </div>
    
    <!-- Error Message -->
    <div
      v-if="hasError"
      :id="`${id}-error`"
      class="mt-2 text-sm text-red-600"
      role="alert"
    >
      {{ errorMessage }}
    </div>
    
    <!-- Help Text -->
    <div 
      v-else-if="helpText" 
      class="mt-2 text-sm text-gray-500"
    >
      {{ helpText }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * FormField Component
 * 
 * Reusable form field component with validation, error handling,
 * and accessibility features. Supports input, textarea, and select types.
 */

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text', 'email', 'tel', 'url', 'password', 'number',
      'textarea', 'select'
    ].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  helpText: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 4
  },
  maxLength: {
    type: Number,
    default: null
  },
  showCharCount: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: () => [],
    validator: (options) => {
      return options.every(option => 
        typeof option === 'object' && 
        option.hasOwnProperty('value') && 
        option.hasOwnProperty('label')
      )
    }
  },
  selectPlaceholder: {
    type: String,
    default: ''
  },
  validateOnBlur: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'blur', 'validate'])

// Computed properties
const hasError = computed(() => {
  return !!props.errorMessage
})

const characterCount = computed(() => {
  return String(props.modelValue).length
})

const inputClasses = computed(() => {
  const baseClasses = [
    'w-full px-4 py-3 border rounded-md transition-colors',
    'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
    'disabled:bg-gray-50 disabled:text-gray-500'
  ]
  
  const stateClasses = hasError.value
    ? ['border-red-300 focus:ring-red-500 focus:border-red-500']
    : ['border-gray-300']
  
  return [...baseClasses, ...stateClasses].join(' ')
})

// Event handlers
const handleInput = (event) => {
  const value = event.target.value
  emit('update:modelValue', value)
}

const handleBlur = (event) => {
  if (props.validateOnBlur) {
    emit('validate', props.id, event.target.value)
  }
  emit('blur', event)
}
</script>

<style scoped>
.form-field {
  @apply mb-6;
}

/* Focus management for better accessibility */
.form-field input:focus,
.form-field textarea:focus,
.form-field select:focus {
  outline: none;
}

/* Custom select styling */
.form-field select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
</style>
