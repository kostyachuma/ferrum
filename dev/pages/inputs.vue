<template>
  <div>
    <div class="text-3xl mb-6">Inputs</div>
    <div class="text-2xl mb-4">Mask syntax</div>

    <code>
      <pre>
{
    '#': { pattern: /[0-9]/ },
    'X': { pattern: /[0-9a-zA-Z]/ },
    'S': { pattern: /[a-zA-Z]/ },
    'A': { pattern: /[a-zA-Z]/, uppercase: true },
    'a': { pattern: /[a-zA-Z]/, lowercase: true },
    '!': { escape: true },
    '*': { repeat: true }
}
      </pre>
    </code>

    <p class="text-sm text-black text-opacity-60 mb-2">Escape symbol escapes next token (mask !# will render #)</p>
    <p class="text-sm text-black text-opacity-60 mb-2">Repeat symbol allows repeating current token until it’s valid (e.g. mask #* for all digits or A* A* for CARDHOLDER NAME)</p>
    <p class="text-sm text-black text-opacity-60 mb-6">You can add your own tokens by passing them in maska directive or create method at initialization (see above). Important: pattern field should be JS regular expression (/[0-9]/) or string without delimiters ("[0-9]").</p>

    <a href="https://github.com/beholdr/maska" target="_blank" class="text-base text-blue-500 hover:text-blue-800">More about mask</a>

    <div class="py-8 grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <fe-input
          v-model="mask"
          label="Enter mask pattern"
          placeholder="Placeholder"
        />
      </div>
      <div class="col-span-12">
        <fe-input
          v-model="inputValue"
          label="Input component with mask"
          :mask="mask"
          :placeholder="mask"
          @raw-value="(value) => rawValueContent = value"
        />
      </div>
      <div class="col-span-12 mb-8">
        <p class="text-sm text-black text-opacity-60">Output value: <b>{{ inputValue }}</b></p>
        <p class="text-sm text-black text-opacity-60">Output raw value: <b>{{ rawValueContent }}</b></p>
      </div>

      <div class="col-span-12">
        <fe-input
          v-model="mask2"
          label="Enter mask pattern"
          placeholder="Placeholder"
        />
      </div>
      <div class="col-span-12">
        <fe-input
          v-model="inputValue2"
          label="Input component with mask"
          :mask="mask2"
          :placeholder="mask2"
          @raw-value="(value) => rawValue2Content = value"
        />
      </div>
      <div class="col-span-12">
        <p class="text-sm text-black text-opacity-60">Output value 2: <b>{{ inputValue2 }}</b></p>
        <p class="text-sm text-black text-opacity-60">Output raw value 2: <b>{{ rawValue2Content }}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mask: '##.##.####',
      inputValue: '01012022',
      rawValue: false,
      rawValueContent: '',

      mask2: '+7 (###) ###-##-##',
      inputValue2: '9999999999',
      rawValue2: true,
      rawValue2Content: '',
    }
  },
}
</script>
