<template>
  <div class="wrapper">
    <div ref="container" class="lottie"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import lottie from "lottie-web";

const props = defineProps<{
  animationFile: string; // путь до data.json
  loop?: boolean;
  autoplay?: boolean;
}>();

const container = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (container.value) {
    lottie.loadAnimation({
      container: container.value,
      renderer: "svg",
      loop: props.loop ?? true,
      autoplay: props.autoplay ?? true,
      path: props.animationFile,
      rendererSettings: {
        imagePreserveAspectRatio: "xMidYMid slice",
      },
    });
  }
});
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 700px;
  border-radius: 18px;
  overflow: hidden;
  border: 1.2px solid var(--color-gray);
}
</style>
