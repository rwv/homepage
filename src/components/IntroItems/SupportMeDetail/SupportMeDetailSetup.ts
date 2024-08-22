import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'
import { Bitcoin, Ethereum } from '@vicons/fa'
import { LogoWechat } from '@vicons/ionicons5'
import IconAfdianOneColor from '@/components/icons/IconAfdianOneColor.vue'
import WeChatSponsorCode from '@/assets/WeChatSponsorCode.svg'
import router from '@/router'

export function SupportMeDetailSetup() {
  const supports = ['afdian', 'WeChat', 'Bitcoin', 'Ethereum'] as const
  type Support = (typeof supports)[number]

  const bitcoinAddress = 'bc1q8e2lvgr4q0zxh6vwkg0g9604smu2vkjralmtf8'
  const ethAddress = '0xf4c60a6699eD05fad8cE5Bf8734f09564C010Ffb'
  const WeChatSponsorLink = router.resolve({ name: 'sponsorWechatCode' }).href

  const supportLinks: Readonly<Record<Support, string>> = {
    Bitcoin: `bitcoin:${bitcoinAddress}?message=Support%20Me`,
    afdian: 'https://afdian.com/@seedgou',
    WeChat: WeChatSponsorLink,
    Ethereum: `ethereum:${ethAddress}`
  }

  const supportIcons: Readonly<Record<Support, Component>> = {
    Bitcoin: Bitcoin,
    afdian: IconAfdianOneColor,
    Ethereum: Ethereum,
    WeChat: LogoWechat
  }

  const messages = {
    en: {
      supportPlatformHint: 'You can support me on',
      supports: {
        Bitcoin: {
          title: 'Bitcoin'
        },
        afdian: {
          title: '爱发电'
        },
        Ethereum: {
          title: 'Ethereum'
        },
        WeChat: {
          title: 'WeChat',
          description: 'WeChat QR code'
        }
      }
    },
    zh: {
      supportPlatformHint: '你可以通过以下平台来支持我',
      supports: {
        Bitcoin: {
          title: '比特币'
        },
        afdian: {
          title: '爱发电'
        },
        Ethereum: {
          title: '以太坊'
        },
        WeChat: {
          title: '微信',
          description: '微信赞赏码'
        }
      }
    }
  }

  const { t } = useI18n({
    messages
  })

  const supportLinkLables: Readonly<Record<Support, string>> = {
    Bitcoin: bitcoinAddress,
    afdian: 'afdian.com/@seedgou',
    Ethereum: ethAddress,
    WeChat: t('supports.WeChat.description')
  }

  return {
    t,
    supports,
    supportLinks,
    supportLinkLables,
    supportIcons,
    WeChatSponsorCode
  }
}
