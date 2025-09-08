<template>
  <section class="faq-section">
    <h3>{{ $t("sections.faq.title") }}</h3>

    <div class="wrapper">
      <BaseQuestion v-for="n in 10" :key="n">
        <template #question> {{ $t("sections.faq.question") }} </template>
        <template #answer>
          {{ $t("sections.faq.answer") }}
        </template>
      </BaseQuestion>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import BaseQuestion from "../base/BaseQuestion.vue";

const { locale } = useI18n();
</script>

<style scoped>
h3 {
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
