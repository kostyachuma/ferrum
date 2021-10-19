<template>
  <div>
    <div class="text-3xl mb-6">Signature</div>
    <fe-signature v-model="signature" ref="signature" class="mb-6" />
    <fe-button size="xs" class="mb-6" @click.native="clear">Clear</fe-button>
    <div class="text-xl mb-4">Base 64:</div>
    <textarea
      :value="signature"
      class="w-full h-60 text-sm text-black text-opaticy-50 whitespace-pre-wrap"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "Signature",
  data() {
    return {
      signature: "",
    };
  },
  methods: {
    clear() {
      this.$refs.signature.clear();
    },
  },
};
</script>

<style></style>
