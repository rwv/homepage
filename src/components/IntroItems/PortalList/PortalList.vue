<template>
  <IntroItem>
    <template #icon>
      <ApertureIcon />
    </template>
    <template #heading>{{ t('title') }}</template>
    <div class="intro-container">
      <div class="intro-row" v-for="portal in portals" :key="portal">
        <div class="intro-label">
          <component :is="portalIcons[portal]" class="intro-icon" />
          <span>{{ t('portals.' + portal + '.title') }}</span>
        </div>
        <div class="intro-description">
          <a :href="portalLinks[portal]" target="_blank">
            {{ portalLinkLabels[portal] }}
          </a>
        </div>
      </div>
    </div>
  </IntroItem>
</template>

<script setup lang="ts">
import IntroItem from '../IntroItem.vue'
import ApertureIcon from '@/components/icons/IconAperture.vue'

import { PortalSetup } from './PortalSetup'

const { t, portals, portalLinks, portalLinkLabels, portalIcons } = PortalSetup()
</script>

<style scoped>
.intro-icon {
  height: 1em;
  width: 1em;
}
</style>
