<template>
  <div class="wrapper">
    <div ref="container" class="lottie"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import lottie, { AnimationItem } from "lottie-web";

const props = defineProps<{
  animationFile: string; // путь до data.json
  loop?: boolean;
}>()

const container = ref<HTMLDivElement | null>(null);
let animation: AnimationItem | null = null;
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (container.value) {
    animation = lottie.loadAnimation({
      container: container.value,
      renderer: "svg",
      loop: props.loop ?? true,
      autoplay: false,
      path: props.animationFile,
      rendererSettings: {
        imagePreserveAspectRatio: "xMidYMid slice",
      },
    });

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (animation) {
            if (entry.isIntersecting) {
              animation.play();
            } else {
              animation.pause();
            }
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(container.value);
  }
});

onBeforeUnmount(() => {
  if (observer && container.value) {
    observer.unobserve(container.value);
  }
  if (animation) {
    animation.destroy();
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
