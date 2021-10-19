<template>
  <label class="switch" :class="[isActive ? 'bg-elm' : 'bg-gray-300']">
    <input v-model="isActive" :name="name" type="checkbox" class="hidden" />
    <div
      v-if="isActive"
      class="
        absolute
        top-1/2
        left-2
        transform
        -translate-y-1/2
        text-2xs text-white
      "
    >
      Да
    </div>
    <div
      v-if="!isActive"
      class="
        absolute
        top-1/2
        right-2
        transform
        -translate-y-1/2
        text-2xs text-white
      "
    >
      Нет
    </div>
    <div class="mark" :class="{ 'ml-auto': isActive }"></div>
  </label>
</template>

<script>
export default {
  name: 'FeSwitch',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isActive: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
        if ('$nuxt' in this) {
          this.$nuxt.$emit('fieldChanged')
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.switch {
  @apply relative cursor-pointer block rounded transition-colors;

  padding: 1px;
  width: 3.75rem;
  height: 1.5625rem;
}

.mark {
  @apply bg-white rounded transition-all;

  width: 1.4375rem;
  height: 1.4375rem;
}
</style>
