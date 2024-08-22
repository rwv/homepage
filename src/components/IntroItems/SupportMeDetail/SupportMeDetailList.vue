<script setup lang="ts">
import VueQrcode from '@chenfengyuan/vue-qrcode'

import { SupportMeDetailSetup } from './SupportMeDetailSetup'
import { ref } from 'vue'

const { t, supports, supportLinks, supportLinkLables, supportIcons, WeChatSponsorCode } =
  SupportMeDetailSetup()

const hoverStatus = {
  Bitcoin: ref(false),
  afdian: ref(false),
  Ethereum: ref(false),
  Dogecoin: ref(false),
  WeChat: ref(false)
}
</script>

<template>
  <div class="support-detail">
    <div>{{ t('supportPlatformHint') }}</div>

    <div class="intro-container">
      <div class="support-row" v-for="support in supports" :key="support">
        <div class="qrcode-container">
          <img
            :src="WeChatSponsorCode"
            v-if="support == 'WeChat'"
            alt=""
            class="qrcode"
            v-show="hoverStatus[support].value"
          />

          <VueQrcode
            v-else
            :value="supportLinks[support]"
            :options="{
              width: 200,
              color: {
                dark: '#2c3e50',
                light: '#ffffff'
              },
              margin: 2
            }"
            tag="svg"
            class="qrcode"
            v-show="hoverStatus[support].value"
          />
        </div>
        <div class="support-label">
          <component :is="supportIcons[support]" class="intro-icon" />
          <span>{{ t('supports.' + support + '.title') }}</span>
        </div>
        <div class="intro-description support-description">
          <a
            :href="supportLinks[support]"
            target="_blank"
            @mouseover="hoverStatus[support].value = true"
            @mouseleave="hoverStatus[support].value = false"
          >
            {{ supportLinkLables[support] }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.support {
  &-detail {
    margin-top: 1em;
  }

  &-label {
    flex: 0 0 7em;
    white-space: nowrap;
    vertical-align: top;
  }

  &-description {
    word-break: break-all;
  }

  &-row {
    display: flex;
    flex: 0 0 100%;
  }
}

.intro-icon {
  height: 1em;
  width: 1em;
}

.qrcode-container {
  width: 0px;
  height: 0px;
  position: relative;
}

.qrcode {
  width: 200px;
  height: 200px;
  right: 0px;
  top: -100px;
  position: absolute;

  @media (max-width: 1024px) {
    & {
      display: none;
    }
  }
}
</style>
