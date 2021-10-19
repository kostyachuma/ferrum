<template>
  <div>
    <div class="text-3xl">Alerts</div>
    <div class="py-8 grid grid-cols-12 gap-4">
      <div class="col-span-6">
        <fe-alert
          type="help"
          title="Help"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus esse quidem temporibus"
        />
      </div>
      <div class="col-span-6">
        <fe-alert
          type="success"
          title="Success"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus esse quidem temporibus"
        />
      </div>
      <div class="col-span-6">
        <fe-alert
          type="warning"
          title="Warning"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus esse quidem temporibus"
        />
      </div>
      <div class="col-span-6">
        <fe-alert
          type="error"
          title="Error"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus esse quidem temporibus"
        />
      </div>
    </div>
  </div>
</template>
