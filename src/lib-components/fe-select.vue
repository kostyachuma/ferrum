<template>
  <div v-click-outside="hideDropdown" class="block relative">
    <div class="flex border rounded-lg">
      <input
        v-model="keyword"
        type="text"
        class="
          relative
          z-10
          w-full
          h-11
          pl-4
          rounded-lg
          bg-transparent
          text-2sm text-black text-opacity-85
          focus:outline-none
        "
        :readonly="this.default"
        @focus="showDropdown"
      />
      <div class="relative w-10 h-11 flex flex-shrink-0" @click="showDropdown">
        <svg-icon
          name="chevron-down"
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
          text-black text-opacity-25
        "
        :class="[
          isActive || keyword.length
            ? 'bg-white top-0 left-3 text-xs px-1'
            : 'top-1/2 left-0 text-2sm px-4',
        ]"
      >
        {{ placeholder }}
      </div>
    </div>
    <ul
      v-if="isActive"
      class="
        absolute
        top-full
        left-0
        z-20
        w-full
        bg-white
        py-1
        shadow
        transform
        translate-y-1
        max-h-48
        overflow-y-auto
      "
    >
      <li
        v-for="option in filteredList"
        :key="option.val"
        class="
          cursor-pointer
          py-1.5
          px-4
          odd:bg-catskill-white
          hover:bg-elm hover:bg-opacity-10
          transition-colors
        "
        @click.stop="updateOption(option)"
      >
        <div
          class="
            leading-normal
            text-2sm text-black text-opacity-85
            whitespace-nowrap
            overflow-hidden overflow-ellipsis
          "
        >
          {{ option.name }}
        </div>
        <div v-if="option.additionally" class="flex flex-wrap -mx-3">
          <div
            v-for="additional in option.additionally"
            :key="additional.val"
            class="
              leading-5
              text-2xs text-black text-opacity-45
              px-3
              whitespace-nowrap
              overflow-hidden overflow-ellipsis
            "
          >
            {{ additional.name }}
          </div>
        </div>
      </li>
      <li
        v-if="!filteredList.length"
        class="
          cursor-pointer
          py-1.5
          px-4
          odd:bg-catskill-white
          hover:bg-elm hover:bg-opacity-10
          transition-colors
        "
      >
        <div
          class="
            leading-normal
            text-2sm text-black text-opacity-85
            whitespace-nowrap
            overflow-hidden overflow-ellipsis
          "
        >
          Не найдено
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    options: {
      type: [Array, Object],
      default: null,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    default: {
      type: Boolean,
      default: false,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
      keyword: '',
      selectedOption: {},
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(value) {
        this.keyword = value.name
        this.$emit('input', this.returnObject ? this.selectedOption : value.val)
      },
    },
    filteredList() {
      return this.search()
    },
  },
  watch: {
    options() {
      if (this.default && this.isEmpty(this.value) && this.options.length) {
        this.updateOption(this.filteredList[0])
      }
    },
    value(newValue, old) {
      if (newValue !== '') {
        const option = {
          val: newValue,
          name: this.nameFromVal(this.options, newValue),
        }
        this.updateOption(option, true)
      }
    },
  },
  mounted() {
    if (this.default && this.isEmpty(this.value) && this.options.length) {
      this.updateOption(this.filteredList[0], false)
    }
    this.keyword = this.nameFromVal(this.options, this.value)
  },
  methods: {
    isEmpty(str) {
      return !str || str.length === 0
    },
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0
    },
    updateOption(option, ignoreEmit) {
      this.selectedOption = option
      this.inputVal = option
      this.isActive = false
      this.$nuxt.$emit('fieldChanged')
      if (!ignoreEmit) {
        this.$emit('change')
      }
    },
    search() {
      const filteredList = this.options.filter((item) => {
        return this.keyword
          .toLowerCase()
          .split(' ')
          .every((v) => item.name.toLowerCase().includes(v))
      })
      return this.default ? this.options : filteredList
    },
    showDropdown() {
      this.isActive = true
      if (!this.default) this.keyword = ''
    },
    nameFromVal(options, val) {
      const value = options.filter((item) => item.val === val)
      this.selectedOption = () => {
        this.selectedOption = value
        this.inputVal = value
      }
      return value[0] ? value[0].name : ''
    },
    hideDropdown() {
      this.isActive = false
      if (!this.keyword.length) {
        this.inputVal = { name: '', val: '' }
        this.selectedOption = []
      }
    },
  },
}
</script>
