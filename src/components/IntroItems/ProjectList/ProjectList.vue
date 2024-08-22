<template>
  <IntroItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ t('title') }}</template>

    <div class="intro-container">
      <div class="intro-row" v-for="project in projects" :key="project">
        <div class="intro-label">
          <component :is="projectIcons[project]" class="intro-icon" />
          <a :href="projectLinks[project]" target="_blank">
            {{ t('projects.' + project + '.title') }}
          </a>
        </div>
        <div class="intro-description">
          {{ t('projects.' + project + '.description') }}
        </div>
      </div>
    </div>
  </IntroItem>
</template>

<script setup lang="ts">
import IntroItem from '../IntroItem.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'

import { ProjectSetup } from './ProjectSetup'

const { t, projects, projectIcons, projectLinks } = ProjectSetup()
</script>

<style scoped>
.intro-icon {
  height: 1em;
  width: 1em;
}
</style>
