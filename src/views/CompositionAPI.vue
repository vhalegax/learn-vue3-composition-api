<template>
  <div class="about">
    <h1>Learn Vue 3 Composition API</h1>
    <hr />
    Capacity : {{ capacity }}

    <br />
    <br />
    <button @click="increaseCapacityWithSetupMetdhods()">
      Increase Capacity With setup Methods
    </button>
    <button @click="increaseCapacityWithNormalMethods()">
      Increase Capacity With normal Methods
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const capacity = ref(4);

    function increaseCapacityWithSetupMetdhods() {
      alert("plus with setup methods");
      capacity.value += 1;
    }

    return { capacity, increaseCapacityWithSetupMetdhods };
  },

  data() {
    return {
      // capacity: 1,
    };
  },

  methods: {
    increaseCapacityWithNormalMethods() {
      alert("plus with normal methods");
      this.capacity += 1;
    },
  },
};
</script>
