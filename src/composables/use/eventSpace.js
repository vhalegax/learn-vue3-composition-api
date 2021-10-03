import { ref, computed, watch } from "vue";

export default function useEventSpace() {
  //* data reactive
  const capacity = ref(4);
  const attending = ref(["Buudi", "Alex", "Suep"]);
  const totalCapacityChange = ref(0);

  //* computed
  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length;
  });

  //* watch
  watch(capacity, () => {
    totalCapacityChange.value++;
  });

  //* methods
  function increaseCapacityWithSetupMethods() {
    console.log("plus with setup methods");
    capacity.value += 1;
  }

  //* returns
  return {
    capacity,
    attending,
    spacesLeft,
    totalCapacityChange,
    increaseCapacityWithSetupMethods,
  };
}
