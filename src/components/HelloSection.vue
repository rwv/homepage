<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const messages = {
  en: {
    name: 'rwv'
  },
  zh: {
    name: 'rwv'
  }
}

const { t } = useI18n({
  messages
})
</script>

<template>
  <div class="greetings">
    <h1>{{ t('name') }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>
