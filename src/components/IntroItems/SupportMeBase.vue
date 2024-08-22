<script setup lang="ts">
import IntroItem from './IntroItem.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import { RouterLink } from 'vue-router'

import { SupportMeSetup } from './SupportMeSetup'

const { t } = SupportMeSetup()

const props = defineProps({
  supportMeATag: Boolean
})
</script>

<template>
  <IntroItem>
    <template #beforeHeading>
      <slot name="beforeHeading"></slot>
    </template>

    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ t('title') }}</template>
    <p>
      <span>{{ t('text') }}</span>
      <RouterLink :to="{ name: 'sponsor' }" v-if="props.supportMeATag">
        {{ t('supportMeText') }}
      </RouterLink>
      <span v-else>{{ t('supportMeText') }}</span>
      <span> ❤</span>
    </p>

    <span>{{ t('yourSupport') }}</span>
    <ul>
      <li>{{ t('supportBenefits.benefit1') }}</li>
      <li>{{ t('supportBenefits.benefit2') }}</li>
      <li>{{ t('supportBenefits.benefit3') }}</li>
    </ul>

    <slot></slot>
  </IntroItem>
</template>
