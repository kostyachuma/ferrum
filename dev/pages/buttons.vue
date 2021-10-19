<template>
  <div>
    <div class="text-3xl">Primary buttons</div>

    <div class="py-8 grid grid-cols-12 gap-4">
      <div class="col-span-4 text-lg text-black text-opacity-60">Default</div>
      <div class="col-span-4 text-lg text-black text-opacity-60">Active</div>
      <div class="col-span-4 text-lg text-black text-opacity-60">Disabled</div>

      <div class="col-span-4">
        <fe-button size="lg">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button size="lg" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button size="lg" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button>Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button size="sm">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button size="sm" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button size="sm" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button size="xs">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button size="xs" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button size="xs" :is-disabled="true">Button invalid</fe-button>
      </div>
    </div>

    <div class="text-3xl">Outline primary buttons</div>
    <div class="py-8 grid grid-cols-12 gap-4">
      <div class="col-span-4 text-lg text-black text-opacity-60">Default</div>
      <div class="col-span-4 text-lg text-black text-opacity-60">Active</div>
      <div class="col-span-4 text-lg text-black text-opacity-60">Disabled</div>

      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="lg">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="lg" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="lg" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button appearance="outline-primary">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="sm">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="sm" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="sm" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="xs">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="xs" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-primary" size="xs" :is-disabled="true">Button invalid</fe-button>
      </div>
    </div>

    <div class="text-3xl">Outline secondary buttons</div>
    <div class="py-8 grid grid-cols-12 gap-4">
      <div class="col-span-4 text-lg text-black text-opacity-60">Default</div>
      <div class="col-span-4 text-lg text-black text-opacity-60">Active</div>
      <div class="col-span-4 text-lg text-black text-opacity-60">Disabled</div>

      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="lg">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="lg" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="lg" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button appearance="outline-secondary">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="sm">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="sm" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="sm" :is-disabled="true">Button invalid</fe-button>
      </div>

      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="xs">Button</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="xs" :is-active="true">Button invalid</fe-button>
      </div>
      <div class="col-span-4">
        <fe-button appearance="outline-secondary" size="xs" :is-disabled="true">Button invalid</fe-button>
      </div>
    </div>
  </div>
</template>
