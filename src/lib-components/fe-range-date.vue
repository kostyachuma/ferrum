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
            v-model="years"
            type="text"
            :min="min"
            :max="max"
            placeholder="В годах"
            class="input"
            @keypress="onYearsInputKeypress"
          />
          <div class="px-3 flex flex-shrink-0 text-xs text-black text-opacity-25">
            {{ pluralYears }}
          </div>
        </div>

        <div class="col w-2/5">
          <input
            v-model="months"
            type="text"
            :min="min"
            :max="max"
            placeholder="В месяцах"
            class="input"
            @keypress="onMonthsInputKeypress"
          />
          <div class="px-3 flex flex-shrink-0 text-xs text-black text-opacity-25">
            {{ pluralMonths }}
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
        :value="value"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        class="range-slider"
        :style="{
          '--webkitProgressPercent': valueToPercent(range(value)) + '%',
        }"
        v-on="rangelisteners"
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
  name: 'FeRangeDate',
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
      default: 0,
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
    tooltip: {
      type: String,
      default: null,
    },
    offers: {
      type: Array,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rangelisteners() {
      return {
        ...this.$listeners,
        change: this.updateValue,
        input: this.updateValue,
      }
    },
    years: {
      get() {
        const value = Math.trunc(this.value / 12)
        const max = Math.trunc(this.max / 12)

        return this.range(value, this.min, max)
      },
      set(value) {
       this.updateValue(Number(this.months) + Number(value) * 12)
      }
    },
    months: {
      get() {
        const value = this.value - Math.trunc(this.value / 12) * 12

        return this.range(value, 0, 11)
      },
      set(value) {
        this.updateValue(Number(this.range(value, 0, 11)) + Number(this.years) * 12)
      }
    },
    pluralYears() {
      const number = this.years
      const titles = ['год', 'года', 'лет']
      const cases = [2, 0, 1, 1, 1, 2];
      return titles[ (number%100>4 && number%100<20) 
      ? 2 : cases[(number%10<5)?number%10:5] ];
    },
    pluralMonths() {
      const number = this.months
      const titles = ['месяц', 'месяца', 'месяцев']
      const cases = [2, 0, 1, 1, 1, 2];
      return titles[ (number%100>4 && number%100<20) 
      ? 2 : cases[(number%10<5)?number%10:5] ];
    }
  },
  methods: {
    valueToPercent(value) {
      return ((value - this.min) / (this.max - this.min)) * 100
    },
    range(value, min = this.min, max = this.max) {
      let rangeValue = value
      if (+value >= max) {
        rangeValue = max
      }
      if (+value <= min) {
        rangeValue = min
      }
      return rangeValue
    },
    formatValue(value) {
      return `${value}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    },
    unformat(value) {
      return `${value}`.replace(/\s/g, '')
    },
    setOffer(value) {
      this.updateValue(value)
      this.$nuxt.$emit('fieldChanged')
    },
    updateValue(evt) {
      const value = evt instanceof Event ? evt.target.value : evt
      this.$emit('input', this.unformat(value))
      this.$nuxt.$emit('fieldChanged')
    },
    onYearsInputKeypress(evt) {
      const value = evt instanceof Event ? evt.target.value : evt
      if (!/\d/.test(evt.key) && evt.key !== '') {
        return evt.preventDefault()
      }
      if (`${this.range(this.unformat(value))}`.length >= `${Math.trunc(this.max / 12)}`.length) {
        return evt.preventDefault()
      }
    },
    onMonthsInputKeypress(evt) {
      const value = evt instanceof Event ? evt.target.value : evt
      if (!/\d/.test(evt.key) && evt.key !== '') {
        return evt.preventDefault()
      }
      if (`${this.unformat(value)}`.length >= 2) {
        return evt.preventDefault()
      }
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
