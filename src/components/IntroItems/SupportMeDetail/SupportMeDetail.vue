<script setup lang="ts">
import SupportMeBase from '../SupportMeBase.vue'

import BackToHomepage from '@/components/BackToHomepage.vue'

import SupportMeDetailList from './SupportMeDetailList.vue'
</script>

<template>
  <SupportMeBase :supportMeATag="false">
    <template #beforeHeading>
      <BackToHomepage class="back-to-home-page-header" />
    </template>

    <SupportMeDetailList />
  </SupportMeBase>
</template>

<style lang="scss" scoped>
.back-to-home-page-header {
  margin-bottom: 1rem;
}
</style>
