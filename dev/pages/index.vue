<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 text-3xl">Inputs</div>
    <div class="col-span-12">
      <fe-input
        v-model="inputValue"
        label="Input component"
        placeholder="Placeholder"
        :errors="errors"
      />
    </div>
    <div class="col-span-12">
      <fe-select
        v-model="selectValue"
        :options="selectOptions"
        label="Select component"
        placeholder="Placeholder"
      />
    </div>
    <div class="col-span-12">
      <fe-range-input
        v-model="rangeValue"
        :min="rangeMin"
        :max="rangeMax"
        :offers="rangeValueOffers"
        label="Range input (value)"
        icon="ruble-currency-sign"
        placeholder="Placeholder"
      />
    </div>
    <div class="col-span-12">
      <fe-range-input
        v-model="rangeValue"
        :min="rangeMin"
        :max="rangeMax"
        :offers="rangePercentOffers"
        :enable-percent="true"
        icon="ruble-currency-sign"
        label="Range input (percent)"
        placeholder="Placeholder"
      />
    </div>
    <div class="col-span-12">
      <fe-range-input
        v-model="emptyRange"
        :max="rangeMax"
        :offers="rangePercentOffers"
        :enable-percent="true"
        icon="ruble-currency-sign"
        label="Range input (percent)"
        placeholder="Placeholder"
      />
    </div>
    <div class="col-span-12">
      <fe-range-date
        v-model="rangeValue"
        :min="0"
        :max="1188"
        :offers="rangeDateOffers"
        label="Range date (years)"
      />
    </div>
    <div class="col-span-6">
      <fe-switch v-model="switchValue" />
    </div>
    <div class="col-span-6">
      <fe-switch v-model="switchValue2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "hello",

      errors: ["test error"],

      selectValue: "",
      selectOptions: [
        { name: "Option 0", val: "0" },
        { name: "Option 1", val: "1" },
        { name: "Option 2", val: "2" },
      ],

      emptyRange: "",
      rangeValue: 12,
      rangeMin: 10,
      rangeMax: 1000,

      rangeValueOffers: [
        {
          label: "10 млн Р",
          value: 10,
        },
        {
          label: "15 млн Р",
          value: 15,
        },
        {
          label: "20 млн Р",
          value: 20,
        },
      ],

      rangePercentOffers: [
        {
          label: "10 %",
          value: 10,
        },
        {
          label: "15 %",
          value: 15,
        },
        {
          label: "20 %",
          value: 20,
        },
      ],

      rangeDateOffers: [
        {
          label: "10 Лет",
          value: 120,
        },
        {
          label: "15 Лет",
          value: 180,
        },
        {
          label: "20 Лет",
          value: 240,
        },
      ],

      switchValue: true,
      switchValue2: false,
    };
  },
};
</script>
