<template>
  <div class="flex gap-x-2">
    <fe-button
      :appearance="appearance"
      :size="size"
      v-if="hasPrev()"
      @click.native="changePage(prevPage)"
    >
      <slot v-if="$slots.prev" name="prev"></slot>
      <svg-icon v-else name="arrow" class="w-4 h-4 fill-current" />
    </fe-button>

    <fe-button
      :appearance="appearance"
      :size="size"
      v-if="hasFirst()"
      @click.native="changePage(1)"
      >1</fe-button
    >
    <fe-button
      :appearance="appearance"
      :size="size"
      :is-disabled="true"
      v-if="hasFirst()"
      >...</fe-button
    >
    <fe-button
      v-for="page in pages"
      :key="page"
      :appearance="appearance"
      :size="size"
      :is-active="current === page"
      @click.native="changePage(page)"
      >{{ page }}</fe-button
    >
    <fe-button
      v-if="hasLast()"
      :appearance="appearance"
      :is-disabled="true"
      :size="size"
      >...</fe-button
    >
    <fe-button
      v-if="hasLast()"
      :appearance="appearance"
      :size="size"
      @click.native="changePage(totalPages)"
      >{{ totalPages }}</fe-button
    >

    <fe-button
      v-if="hasNext()"
      :appearance="appearance"
      :size="size"
      @click.native="changePage(nextPage)"
    >
      <slot v-if="$slots.prev" name="next"></slot>
      <svg-icon v-else name="arrow" class="w-4 h-4 fill-current transform rotate-180" />
    </fe-button>
  </div>
</template>

<script>
import FeButton from "./fe-button";

export default {
  name: "Pagination",
  components: {
    FeButton,
  },
  props: {
    appearance: {
      type: String,
      default: "promary",
    },
    size: {
      type: String,
      default: "base",
    },
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    pageRange: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    pages() {
      const pages = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages;
    },
    rangeStart() {
      const start = this.current - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      const end = this.current + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    nextPage() {
      return this.current + 1;
    },
    prevPage() {
      return this.current - 1;
    },
  },
  methods: {
    hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast() {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev() {
      return this.current > 1;
    },
    hasNext() {
      return this.current < this.totalPages;
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    },
  },
};
</script>
