<template>
  <div class="flex">
    <div class="flex h-7 mr-2.5">
      <svg-icon
        name="info-circle"
        class="m-auto w-5 h-5 fill-current"
        :class="{
          'text-elm': type === 'success',
          'text-black text-opacity-45': type === 'help',
          'text-tahiti-gold': type === 'warning',
          'text-sunset-orange': type === 'error',
        }"
      />
    </div>
    <div class="">
      <div class="font-semibold leading-7 text-xl text-black text-opacity-85">
        {{ title }}
      </div>
      <div class="text-2sm leading-normal text-black text-opacity-45">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeAlert',
  props: {
    type: {
      type: String,
      default: 'help',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
