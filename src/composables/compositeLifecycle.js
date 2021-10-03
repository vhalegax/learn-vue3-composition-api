import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
} from "vue";

export default function compositeLifecycle() {
  onBeforeMount(() => {
    console.log("onBeforeMount");
  });

  onMounted(() => {
    console.log("onMounted");
  });

  onBeforeUpdate(() => {
    console.log("onBeforeUpdate");
  });

  onUpdated(() => {
    console.log("onUpdated!");
  });

  onBeforeUnmount(() => {
    console.log("onBeforeUnmount");
  });

  onUnmounted(() => {
    console.log("onUnmounted");
  });

  onRenderTracked(() => {
    console.log("onRenderTracked");
  });

  onRenderTriggered(() => {
    console.log("onRenderTriggered");
  });

  onActivated(() => {
    console.log("onActivated");
  });

  onDeactivated(() => {
    console.log("onDeactivated");
  });
}
