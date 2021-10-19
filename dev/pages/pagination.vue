<template>
  <div>
    <div class="text-3xl">Pagination</div>
    <div class="py-8">
      <div class="text-xl mb-4">Page: {{ current }}</div>
      <div class="text-xl mb-4">Per page: {{ perPage }}</div>
      <div class="text-xl mb-4">Total: {{ total }}</div>

      <div class="text-3xl">Primary pagination</div>
      <div class="flex flex-col gap-4 py-8">
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          size="lg"
          @page-changed="current = $event"
        >
          <template #prev>Prev</template>
          <template #next>Next</template>
        </fe-pagination>
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          @page-changed="current = $event"
        />
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          size="sm"
          @page-changed="current = $event"
        />
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          size="xs"
          @page-changed="current = $event"
        />
      </div>

      <div class="text-3xl">Outline primary pagination</div>
      <div class="flex flex-col gap-4 py-8">
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-primary"
          size="lg"
          @page-changed="current = $event"
        >
          <template #prev>Prev</template>
          <template #next>Next</template>
        </fe-pagination>
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-primary"
          @page-changed="current = $event"
        />
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-primary"
          size="sm"
          @page-changed="current = $event"
        />
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-primary"
          size="xs"
          @page-changed="current = $event"
        />
      </div>

      <div class="text-3xl">Outline secondary pagination</div>
      <div class="flex flex-col gap-4 py-8">
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-secondary"
          size="lg"
          @page-changed="current = $event"
        >
          <template #prev>Prev</template>
          <template #next>Next</template>
        </fe-pagination>
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-secondary"
          @page-changed="current = $event"
        />
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-secondary"
          size="sm"
          @page-changed="current = $event"
        />
        <fe-pagination
          :current="current"
          :per-page="perPage"
          :total="total"
          :page-range="1"
          appearance="outline-secondary"
          size="xs"
          @page-changed="current = $event"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      perPage: 10,
      total: 100,
    };
  },
};
</script>
