<template>
  <div>
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
    </div>
    <div
      class="
        relative
        border
        rounded-lg
        bg-whitess
        border-black border-opacity-15
        flex
      "
    >
      <div class="flex w-full">
        <div class="col w-full">
          <input
            :value="formatValue(range(value))"
            type="text"
            :min="min"
            :max="max"
            :placeholder="placeholder"
            class="input"
            v-on="listeners"
          />
          <div v-if="icon" class="w-10 h-6 flex flex-shrink-0">
            <svg-icon
              :name="icon"
              class="m-auto w-3 h-3 fill-current text-black text-opacity-25"
            />
          </div>
        </div>

        <div v-if="enablePercent" class="col w-2/5">
          <input
            :value="Math.round(valueToPercent(range(value)))"
            type="number"
            :min="min"
            :max="max"
            placeholder="В процентах"
            class="input"
            @input="updateValue(percentToValue($event.target.value))"
          />
          <div class="w-10 h-6 flex flex-shrink-0">
            <svg-icon
              name="percent"
              class="m-auto w-3 h-3 fill-current text-black text-opacity-25"
            />
          </div>
        </div>

        <div v-if="tooltip" class="col">
          <div class="w-10 h-6 flex flex-shrink-0">
            <svg-icon
              name="info-circle"
              class="m-auto w-3 h-3 fill-current text-black text-opacity-25"
            />
          </div>
        </div>
      </div>
      <input
        :value="rangeValue"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        class="range-slider"
        :style="{
          '--webkitProgressPercent': valueToPercent(range(value)) + '%',
        }"
        v-on="listeners"
      />
    </div>
    <div v-if="offers" class="mt-3">
      <div class="flex flex-wrap -m-1">
        <button
          v-for="offer in offers"
          :key="offer.label"
          class="
            focus:outline-none
            hover:bg-elm hover:text-white hover:border-elm
            border
            rounded
            py-0.5
            px-2
            m-1
            leading-5
            text-sm text-black text-opacity-50
            transition-colors
          "
          @click="setOffer(range(offer.value))"
        >
          {{ offer.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeRangeInput',
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    min: {
      type: [String, Number],
      default: '',
    },
    max: {
      type: [String, Number],
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    enablePercent: {
      type: Boolean,
      default: false,
    },
    enableYears: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      default: null,
    },
    offers: {
      type: Array,
      default: null,
    },
    icon: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
        change: this.onChange,
        keypress: this.onKeypress,
      }
    },
    rangeValue() {
      return !this.value || 0 === this.value.length ? 0 : this.value
    }
  },
  methods: {
    valueToPercent(value) {
      return ((value - this.min) / (this.max - this.min)) * 100
    },
    percentToValue(percent) {
      return (this.max / 100) * percent
    },
    getMonths(months) {
      return months - Math.trunc(months / 12) * 12
    },
    getYears(months) {
      return Math.trunc(months / 12)
    },
    range(value) {
      let rangeValue = value
      if (+value >= this.max) {
        rangeValue = this.max
      }
      if (+value <= this.min) {
        rangeValue = this.min
      }
      return rangeValue
    },
    formatValue(value) {
      return `${value}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    },
    unformat(value) {
      return `${value}`.replace(/\s/g, '')
    },
    updateValue(evt) {
      const value = evt instanceof Event ? evt.target.value : evt
      this.$emit('input', this.range(this.unformat(value)))
    },
    setOffer(value) {
      this.updateValue(this.enablePercent ? this.percentToValue(value) : value)
      this.$nuxt.$emit('fieldChanged')
    },
    onChange(value) {
      this.updateValue(value)
      this.$nuxt.$emit('fieldChanged')
    },
    onKeypress(evt) {
      const value = evt instanceof Event ? evt.target.value : evt
      if (`${this.range(this.unformat(value))}`.length >= `${this.max}`.length)
        return evt.preventDefault()
      if (!/\d/.test(evt.key) && evt.key !== '.') return evt.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped>
.col {
  @apply relative flex items-center;
  &:not(:last-child)::after {
    @apply block bg-black bg-opacity-25;

    content: '';
    width: 2px;
    height: 22px;
  }
}

.input {
  @apply relative z-10 w-full h-11 pl-4 rounded-lg bg-transparent text-2sm text-black text-opacity-85 focus:outline-none appearance-none;

  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.range-slider {
  @apply bg-transparent appearance-none absolute bottom-0 left-1/2 z-10 transform translate-y-1/2 -translate-x-1/2;

  width: calc(100% - 1.75rem);

  --webkitProgressPercent: 0%;

  &:focus {
    outline: none;
  }

  // dot
  &::-webkit-slider-thumb {
    @apply appearance-none cursor-pointer w-3 h-3 rounded-full border-none bg-elm -mt-1;
  }

  &::-moz-range-thumb {
    @apply appearance-none cursor-pointer w-3 h-3 rounded-full border-none bg-elm -mt-1;
  }

  &::-ms-thumb {
    @apply appearance-none cursor-pointer w-3 h-3 rounded-full border-none bg-elm -mt-1;
  }

  // line
  &::-webkit-slider-runnable-track {
    @apply cursor-pointer w-full border-none;

    height: 0.1875rem;
    background-image: linear-gradient(
      90deg,
      rgba(31, 134, 126, 0.8) var(--webkitProgressPercent),
      transparent var(--webkitProgressPercent)
    );
  }

  &::-moz-range-track {
    @apply cursor-pointer w-full border-none bg-white bg-opacity-25;

    height: 0.1875rem;
  }

  &::-ms-track {
    @apply cursor-pointer w-full border-none bg-white bg-opacity-25;

    height: 0.1875rem;
  }

  //progress
  &::-moz-range-progress {
    @apply appearance-none bg-elm bg-opacity-80;

    height: 0.1875rem;
  }

  &::-ms-fill-lower {
    @apply appearance-none bg-elm bg-opacity-80;

    height: 0.1875rem;
  }
}
</style>
