<template>
  <section class="sell-skins">
    <div class="heading-wrapper">
      <h2>SELL YOUR SKINS IN <span>THREE EASY STEPS</span></h2>
      <button class="base-button heading-btn">SELL SKINS NOW</button>
    </div>
    <div class="wrapper">
      <div class="steps">
        <div class="step">
          <div class="num_step">1</div>
          <p>{{ $t("sections.sell.steps.step_1") }}</p>
        </div>
        <div class="separator"></div>
        <div class="step">
          <div class="num_step">2</div>
          <p>{{ $t("sections.sell.steps.step_2") }}</p>
        </div>
        <div class="separator"></div>
        <div class="step">
          <div class="num_step">3</div>
          <p>{{ $t("sections.sell.steps.step_3") }}</p>
        </div>
        <div class="separator"></div>
      </div>
      <LottiePlayer
        animation-file="/animations/data.json"
        :loop="true"
        :autoplay="true"
        class="lottie"
      />
      <button class="base-button anim-btn">SELL SKINS NOW</button>
    </div>
  </section>
</template>

<script setup>
import LottiePlayer from "../LottiePlayer.vue";
</script>

<style scoped>
.heading-wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
}

h2 {
  color: var(--color-white);
  font-size: clamp(3rem, 5vw, 5.2rem);
  font-weight: 700;
  max-width: 59rem;
}

.anim-btn {
  display: none;
}

span {
  color: var(--color-green);
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
}

.wrapper::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border-radius: 400px;
  background: var(--color-green);
  opacity: 0.3;
  filter: blur(100px);
  z-index: -1;
}

.wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/images/bg-logo.svg") no-repeat center/contain;
  z-index: -1;
}

.steps {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.step {
  display: flex;
  align-items: center;
  gap: 30px;
}

.separator {
  height: 1px;
  width: 100%;
  background-color: var(--color-gray);
}

.separator:last-child {
  margin-bottom: 30px;
}

.num_step {
  background: #35353b;
  color: var(--color-black);
  font-size: 3.2rem;
  padding: 8px 16px;
  font-weight: 700;
  border-radius: 8px;
}

.step p {
  color: var(--color-gray);
  font-size: 2rem;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .wrapper {
    flex-direction: column;
  }
  .lottie {
    order: 1;
  }
  .steps {
    order: 2;
    margin-top: 40px;
  }
  .anim-btn {
    order: 3;
  }
  .heading-btn {
    display: none;
  }
  .anim-btn {
    display: block;
    width: 100%;
  }
  .wrapper::before,
  .wrapper::after {
    display: none;
  }
}
</style>