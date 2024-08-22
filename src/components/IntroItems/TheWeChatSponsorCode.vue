<script setup lang="ts">
import IntroItem from './IntroItem.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import BackToHomepage from '../BackToHomepage.vue'
import WeChatSponsorCode from '@/assets/WeChatSponsorCode.svg'
</script>

<template>
  <IntroItem>
    <template #beforeHeading>
      <BackToHomepage class="back-to-home-page-header" />
    </template>

    <template #icon>
      <SupportIcon />
    </template>
    <img :src="WeChatSponsorCode" class="wechat-sponsor-code" />
  </IntroItem>
</template>

<style lang="scss" scoped>
.back-to-home-page-header {
  margin-bottom: 1rem;
}

.wechat-sponsor-code {
  width: 100%;

  @media (prefers-color-scheme: dark) {
    & {
      opacity: 0.75;
    }
  }
}
</style>
