<template>
  <div class="accordion">
    <!-- Вопрос -->
    <button class="question" @click="toggle" :aria-expanded="isOpen">
      <slot name="question"></slot>
      <div class="arrow-container">
        <img
          src="/images/icons/arrow-icon.svg"
          alt="arrow"
          :class="{ rotated: isOpen }"
        />
      </div>
    </button>

    <!-- Ответ -->
    <div
      class="answer-wrapper"
      :style="{ height: isOpen ? answerHeight + 'px' : '0px' }"
      ref="answerRef"
    >
      <div class="answer">
        <slot name="answer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue";

const isOpen = ref(false);
const answerRef = ref<HTMLElement | null>(null);
const answerHeight = ref(0);

const toggle = async () => {
  isOpen.value = !isOpen.value;
  await nextTick();
  if (answerRef.value) {
    answerHeight.value = answerRef.value.scrollHeight;
  }
};

onMounted(() => {
  if (answerRef.value) {
    answerHeight.value = answerRef.value.scrollHeight;
  }
});
</script>

<style scoped>
.accordion {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.question {
  max-width: 95rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  padding: 0 16px;
  border-radius: 12px;
  background-color: #121219;
  border: 1px solid #1a1a20;
  font-weight: 500;
  font-size: 1rem;
  color: #9090af;
  cursor: pointer;
  gap: 10px;

  font-size: 1.4rem;
}

.arrow-container {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a20;
  border-radius: 12px;
  border: 1px solid #22222a;
}

.arrow-container img {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;
}

.arrow-container img.rotated {
  transform: rotate(180deg);
}

.answer-wrapper {
  overflow: hidden;
  transition: height 0.3s ease;
}

.answer {
  max-width: 95rem;
  margin-top: 10px;
  padding: 16px;
  background-color: #121219;
  border-radius: 12px;
  border: 1px solid #1a1a20;
  font-size: 1.2rem;
  color: var(--color-gray);

}
</style>
