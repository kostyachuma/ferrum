<template>
  <button
    :class="[
      sizes[size],
      styles[appearance][isActive ? 'active' : 'default'],
      isDisabled ? disabled : '',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "base",
    },
    appearance: {
      type: String,
      default: "promary",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sizes: {
        base: "py-3 px-6 leading-6 text-lg",
        lg: "py-4 px-6 leading-7 text-xl",
        sm: "py-2.5 px-6 leading-snug text-base",
        xs: "py-2 px-4 leading-5 text-sm",
      },
      styles: {
        promary: {
          default:
            "bg-elm rounded-lg font-semibold text-center text-white transition-all focus:outline-none hover:bg-opacity-80",
          active: "bg-elm rounded-lg font-semibold text-center text-white transition-all focus:outline-none bg-opacity-80",
        },
        "outline-primary": {
          default:
            "border-2 border-elm rounded-lg text-center text-elm transition-all focus:outline-none hover:bg-elm hover:text-white",
          active:
            "border-2 border-elm rounded-lg text-center transition-all focus:outline-none bg-elm text-white",
        },
        "outline-secondary": {
          default:
            "border-2 border-black border-opacity-25 rounded-lg text-center text-black text-opacity-25 transition-all focus:outline-none hover:border-opacity-0 hover:bg-black hover:bg-opacity-25 hover:text-white",
          active:
            "border-2 border-black rounded-lg text-center transition-all focus:outline-none border-opacity-0 bg-black bg-opacity-25 text-white",
        },
      },
      disabled: "pointer-events-none opacity-40",
    };
  },
};
</script>

<style lang="scss" scoped></style>
