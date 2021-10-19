<script>
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
});
</script>

<template>
  <div id="app">
    <div class="bg-elm py-4 text-center text-3xl text-white">FeComponents</div>
    <div class="container py-16 grid grid-cols-12">
      <nav class="col-span-3 pr-9 border-r">
        <ul>
          <li>
            <router-link to="/" class="text-xl leading-loose">Main</router-link>
          </li>
          <li>
            <router-link to="/inputs" class="text-xl leading-loose"
              >Inputs</router-link
            >
          </li>
          <li>
            <router-link to="/buttons" class="text-xl leading-loose"
              >Buttons</router-link
            >
          </li>
          <li>
            <router-link to="/pagination" class="text-xl leading-loose"
              >Pagination</router-link
            >
          </li>
          <li>
            <router-link to="/signature" class="text-xl leading-loose"
              >Signature</router-link
            >
          </li>
          <li>
            <router-link to="/alerts" class="text-xl leading-loose"
              >Alerts</router-link
            >
          </li>
        </ul>
      </nav>
      <router-view class="col-span-9 pl-9" />
    </div>
  </div>
</template>
