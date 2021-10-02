<template>
  <div class="about">
    <h1>Learn Vue 3 Composition API</h1>
    <hr />
    Capacity : {{ capacity }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const capacity = ref(4);
    return { capacity };
  },
};
</script>
