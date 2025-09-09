<template>
  <section class="chooseUs-section">
    <div class="parent">
      <div class="div1">
        <img src="/images/icons/coins-icon.svg" alt="" />
        <h2>{{ $t("sections.chooseUs.first.title") }}</h2>
        <p>{{ $t("sections.chooseUs.first.preTitle") }}</p>
      </div>
      <div class="div2">
        <h2>{{ $t("sections.chooseUs.second.title") }}</h2>
        <p>{{ $t("sections.chooseUs.second.preTitle") }}</p>
      </div>
      <div class="div3">
        <h2>{{ $t("sections.chooseUs.third.title") }}</h2>
        <p>{{ $t("sections.chooseUs.third.preTitle") }}</p>
      </div>
      <div class="div4">
        <img src="/images/icons/fullDay.svg" alt="" />
        <h2>{{ $t("sections.chooseUs.fourth.title") }}</h2>
        <p>{{ $t("sections.chooseUs.fourth.preTitle") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  transition: all 0.3s ease;
}

.parent > div {
  height: 40rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  border-radius: 12px;
  max-width: 100%;
}

.parent > div h2 {
  font-size: 3.2rem;
}

.parent > div:not(.div3) h2,
.parent > div:not(.div3) p {
  max-width: 23rem;
}

.div1 {
  background-color: var(--color-white);
  background-image: url("/images/arrows.svg");
  background-repeat: no-repeat;
  background-position: -10px 200px;
  background-size: contain;
  color: var(--color-black);
  text-align: center;
}

.div2 {
  grid-column: span 2 / span 2;
  background-color: #121219;
  background-image: url("/images/secure.svg");
  background-repeat: no-repeat;
  background-size: contain;

  color: var(--color-white);

  padding: 30px;

  text-align: right;
  align-items: flex-end !important;
  justify-content: flex-end !important;
}

.div3 {
  grid-column: span 2 / span 2;
  grid-row-start: 2;
  background-color: #121219;
  background-image: url("/images/circle.svg");
  background-position: right -80px bottom -90px;
  background-repeat: no-repeat;
  background-size: contain;

  color: var(--color-white);

  padding: 60px;
  align-items: flex-start !important;
  justify-content: flex-start !important;
}

.div3 p {
  max-width: 30rem;
}

.div4 {
  grid-column-start: 3;
  grid-row-start: 2;
  background-color: var(--color-green);
  color: var(--color-black);
  text-align: center;
  position: relative;
}

.div4::before {
  content: "24/7";
  position: absolute;
  left: -10px;
  bottom: -43px;
  font-family: Impact, sans-serif;
  font-size: 20rem;
  font-weight: 400;
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
}



@media (max-width: 768px) {
  .parent {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }

  .parent > div h2 {
    font-size: 2.4rem;
  }

  .div3 {
    padding: 30px;
  }

  .div2,
  .div3,
  .div4 {
    grid-column: 1 / -1;
    grid-row: auto;
  }
}
</style>
