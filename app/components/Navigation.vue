<template>
  <nav class="navbar">
    <img src="/images/icons/logo-icon.svg" class="logo" alt="" />
    <div class="mobile-wrap">
      <img src="/images/icons/hamburger-icon.svg" class="burger" alt="" />
      <img
        src="/images/icons/mobile-logo-icon.svg"
        class="mobile-logo"
        alt=""
      />
    </div>
    <ul class="nav-links">
      <li>{{ $t("nav.link_1") }}</li>
      <li>{{ $t("nav.link_2") }}</li>
      <li>{{ $t("nav.link_3") }}</li>
    </ul>

    <div class="wrapper">
      <div class="currency-change" @click="toggleCurrencyMenu">
        <div class="selected">
          <img
            src="/images/icons/mobile-currency.svg"
            alt="currency"
            class="currency-icon"
          />
          <span>{{ currentCurrency }}</span>
          <img
            src="/images/icons/arrow-icon.svg"
            alt="arrow"
            class="arrow"
            :class="{ open: currencyMenuOpen }"
          />
        </div>

        <ul v-if="currencyMenuOpen" class="dropdown">
          <li @click.stop="changeCurrency('PLN')">PLN</li>
          <li @click.stop="changeCurrency('USD')">USD</li>
        </ul>
      </div>

      <div class="language-change" @click="toggleLangMenu">
        <div class="selected">
          <img :src="currentFlag" alt="flag" class="flag" />
          <img
            src="/images/icons/arrow-icon.svg"
            alt="arrow"
            class="arrow"
            :class="{ open: langMenuOpen }"
          />
        </div>

        <ul v-if="langMenuOpen" class="dropdown">
          <li @click.stop="changeLanguage('en')">
            <img src="/images/flags/en.svg" alt="EN" class="flag" />
            English
          </li>
          <li @click.stop="changeLanguage('pl')">
            <img src="/images/flags/pl.svg" alt="PL" class="flag" />
            Polski
          </li>
        </ul>
      </div>

      <button class="steam-login">
        <img src="/images/icons/steam-icon.svg" alt="" />
        Login via Steam
      </button>
      <button class="steam-login-mobile">
        <img src="/images/icons/mobile-steam-icon.svg" alt="" />
        Login
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const langMenuOpen = ref(false);
const currencyMenuOpen = ref(false);

const { locale } = useI18n();
const currentCurrency = ref("PLN");

function toggleLangMenu() {
  langMenuOpen.value = !langMenuOpen.value;
}

function toggleCurrencyMenu() {
  currencyMenuOpen.value = !currencyMenuOpen.value;
}

function changeLanguage(lang: string) {
  locale.value = lang;
  langMenuOpen.value = false;
}

function changeCurrency(curr: string) {
  currentCurrency.value = curr;
  currencyMenuOpen.value = false;
}

const currentFlag = computed(() =>
  locale.value === "en" ? "/images/flags/en.svg" : "/images/flags/pl.svg"
);
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid #1a1a20;
  position: relative;
}

.burger {
  display: none;
}

.logo {
  height: 40px;
  flex: 0 0 auto;
}

.mobile-logo {
  display: none;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex: 0 0 auto;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex: 1;
}

.nav-links li {
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-links li:hover {
  color: #fff;
}

.language-change {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  padding: 8px 16px;
}

.selected {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag {
  width: 24px;
  height: 24px;
}

.arrow {
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  background-color: #121219;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 10;
  min-width: 120px;
}

.dropdown li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown li:hover {
  background-color: #1a1a20;
}

.currency-change {
  display: none;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.currency-change span {
  color: var(--color-white);
  font-size: 1.2rem;
}

.steam-login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: var(--color-green);
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #090910;
  height: 40px;
}

.steam-login-mobile {
  display: none;
  background: var(--color-green);
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #090910;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  height: 36px;
}

@media (max-width: 850px) {
    nav {
        padding: 16px 8px !important;
    }
    .language-change {
        padding: 8px !important;
    }
  .logo,
  .nav-links,
  .steam-login {
    display: none;
  }

  .mobile-logo {
    display: block;
  }

  .steam-login-mobile {
    display: flex;
  }
  .burger {
    display: block;
  }
  .mobile-wrap {
    display: flex;
    gap: 12px;
  }

  .currency-change {
    display: block;
  }
}
</style>