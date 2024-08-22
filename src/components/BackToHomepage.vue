<template>
  <div class="back-to-homepage">
    <RouterLink :to="{ name: 'home' }">
      <ArrowCircleLeft class="back-to-homepage-icon" />{{ t('backToHomepage') }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ArrowCircleLeft } from '@vicons/fa'

const messages = {
  en: {
    backToHomepage: 'Back To Homepage'
  },
  zh: {
    backToHomepage: '返回主页'
  }
}

const { t } = useI18n({
  messages
})
</script>

<style lang="scss">
.back-to-homepage {
  &-icon {
    margin-right: 0.4rem;
    height: 1em;
  }

  & a {
    color: inherit !important;
    opacity: 0.5;

    @media (hover: hover) {
      &:hover {
        background-color: inherit;
        opacity: 0.9;
      }
    }
  }
}
</style>
