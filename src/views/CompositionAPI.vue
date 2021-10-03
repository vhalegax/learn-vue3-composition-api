<template>
  <div class="about">
    <h1>Learn Vue 3 Composition API</h1>
    <hr />
    Capacity : {{ capacity }}

    <br />
    <br />
    <button @click="increaseCapacityWithSetupMethods()">
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
import { ref, computed, reactive, toRefs } from "vue";

//* composite
import compositeLifecycle from "@/composables/compositeLifecycle";
import useEventSpace from "@/composables/use/eventSpace";

export default {
  setup() {
    // //* Data and computed with object reactive and toRefs
    // //* Care with duplicate name ref and reactive object
    // const event = reactive({
    //   capacity: 10,
    //   attending: ["Buudi", "Alex", "Suep"],
    //   spacesLeft: computed(() => {
    //     return event.capacity - event.attending.length;
    //   }),
    // });
    // //* methods
    // function increaseCapacityWithSetupMethods() {
    //   alert("plus with setup methods");
    //   event.capacity += 1;
    // }
    // return {
    //   ...toRefs(event),
    //   increaseCapacityWithSetupMethods,
    // };

    compositeLifecycle();

    const {
      capacity,
      attending,
      spacesLeft,
      increaseCapacityWithSetupMethods,
    } = useEventSpace();

    return {
      capacity,
      attending,
      spacesLeft,
      increaseCapacityWithSetupMethods,
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
