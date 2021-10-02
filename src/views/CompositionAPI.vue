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

    <hr />
    <h2>Spaces Lefts: {{ spacesLeft }} out of {{ capacity }}</h2>
    <br />
    <h2>Attending</h2>
    <ul>
      <div v-for="(name, index) in attending" :key="index">- {{ name }}</div>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const capacity = ref(4);
    const attending = ref(["Buudi", "Alex", "Suep"]);

    // computed
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });

    // methods
    function increaseCapacityWithSetupMetdhods() {
      alert("plus with setup methods");
      capacity.value += 1;
    }

    return {
      capacity,
      attending,
      spacesLeft,
      increaseCapacityWithSetupMetdhods,
    };
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
