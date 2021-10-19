<template>
  <div class="block">
    <div
      v-if="label"
      class="
        flex
        items-center
        leading-normal
        text-2sm text-black text-opacity-85
        mb-2
      "
    >
      {{ label }}
      <!-- <svg-icon
        name="info-circle"
        class="
          inline-block
          w-3
          h-3
          fill-current
          text-black text-opacity-25
          ml-2
        "
      /> -->
    </div>
    <div
      class="relative border rounded-lg flex items-center"
      :class="{
        'bg-lavender-blush border-sunset-orange': error.length,
        'bg-white border-black border-opacity-15': !error.length,
        'bg-white border-sunset-orange': error.length && isActive,
      }"
    >
      <input
        v-model="inputVal"
        v-maska="mask"
        ref="input"
        :type="type"
        :name="name"
        class="
          relative
          z-10
          w-full
          h-11
          px-4
          rounded-lg
          bg-transparent
          text-2sm text-black text-opacity-85
          focus:outline-none
        "
        @focus="onFocus"
        @blur="onBlur"
        @maska="$emit('raw-value', $event.target.getAttribute('data-mask-raw-value'))"
      />
      <div v-if="icon" class="w-10 h-6 flex flex-shrink-0">
        <svg-icon
          :name="icon"
          class="m-auto w-3 h-3 fill-current text-black text-opacity-25"
        />
      </div>
      <div
        class="
          absolute
          z-0
          transform
          -translate-y-1/2
          max-w-full
          whitespace-nowrap
          overflow-ellipsis overflow-hidden
          focus:outline-none
        "
        :class="[
          isActive
            ? 'bg-white top-0 left-3 text-xs px-1'
            : 'top-1/2 left-0 text-2sm px-4',
          error.length ? 'text-sunset-orange' : 'text-black text-opacity-25',
        ]"
      >
        {{ placeholder }}
      </div>
    </div>
    <div
      v-if="description || errors.length"
      class="leading-5 text-xs ml-4 mt-1"
      :class="[
        error.length ? 'text-sunset-orange' : 'text-black text-opacity-45',
      ]"
    >
      {{ error.length ? error : description }}
    </div>
  </div>
</template>

<script>
import { maska } from 'maska'

export default {
  name: 'FeInput',
  directives: { maska },
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
    mask: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isFocused: false,
      rawContent: '',
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
        if ('$nuxt' in this) this.$nuxt.$emit('fieldChanged')
      },
    },
    isActive() {
      return !Boolean(!this.inputVal || 0 === this.inputVal.length)
    },
    error() {
      return this.isFocused || !this.errors.length ? '' : this.errors[0]
    },
  },
  methods: {
    onFocus() {
      this.isFocused = true
    },
    onBlur() {
      this.$emit('blur')
      this.isFocused = false
    },
  },
}
</script>
