<template>
  <section class="hero-section">
    <div class="wrapper">
      <div class="left">
        <h1>{{ $t("sections.hero-section.title") }}</h1>
        <p>{{ $t("sections.hero-section.preTitle") }}</p>
        <button class="base-button">
          {{ $t("sections.hero-section.button") }}
        </button>
      </div>
      <div class="right">
        <img class="gun gun-1" src="/images/ak-47.png" alt="" />
        <img class="gun gun-2" src="/images/pistol.png" alt="" />
        <img class="gun gun-3" src="/images/knife.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 100px;
  min-height: 50rem;
  position: relative;
}
h1 {
  font-size: clamp(3rem, 6vw, 6.4rem);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 20px;
  max-width: 66rem;
  text-transform: uppercase;
}

p {
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-gray);
  margin-bottom: 40px;
  max-width: 44rem;
  text-transform: uppercase;
}

.wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.left {
  flex: 1;
  min-width: 400px;
}

.right {
  flex: 1;
  position: relative;
  min-height: 400px;
}

.right::before {
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

.right::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/images/bg-logo.svg") no-repeat center/contain;
  z-index: -1;
}

 .gun {
  position: absolute;
  transition: all 0.3s ease;
} 

.gun-1 {
  top: 0;
  left: 30%;
  width: 50%;
  transform: rotate(16deg);
}
.gun-2 {
  bottom: 20%;
  left: 15%;
  width: 25%;
  transform: scaleX(-1) rotate(15deg);
  animation-delay: 0.5s;
}
.gun-3 {
  bottom: 0;
  right: 30%;
  width: 20%;
  transform: rotate(-165deg);
  animation-delay: 1s;
}

/* Адаптив до 1200px */
@media (max-width: 1200px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .left {
    min-width: 320px;
  }

  section {
    padding-top: 60px;
  }

  .right {
    width: 100%;
    min-height: 300px;
    margin-top: 40px;
  }

  .gun-1 {
    top: 0;
    right: 0;
    width: 60%;
  }
  .gun-2 {
    top: 40%;
    left: 5%;
    width: 35%;
  }
  .gun-3 {
    bottom: 20%;
    right: 20%;
    width: 30%;
  }
}
</style>
