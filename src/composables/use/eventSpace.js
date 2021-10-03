import { ref, computed } from "vue";

export default function useEventSpace() {
  //* data reactive
  const capacity = ref(4);
  const attending = ref(["Buudi", "Alex", "Suep"]);

  //* computed
  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length;
  });

  //* methods
  function increaseCapacityWithSetupMethods() {
    alert("plus with setup methods");
    capacity.value += 1;
  }

  //* returns
  return {
    capacity,
    attending,
    spacesLeft,
    increaseCapacityWithSetupMethods,
  };
}
