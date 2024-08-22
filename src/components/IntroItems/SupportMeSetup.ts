import { useI18n } from 'vue-i18n'

export function SupportMeSetup() {
  const messages = {
    en: {
      title: 'Support Me',
      text: `Thanks for using my works. If you like my works, please consider `,
      supportMeText: 'supporting me',
      yourSupport: 'Your generous support',
      supportBenefits: {
        benefit1: 'Keep servers running',
        benefit2: 'Help me to keep developing new projects',
        benefit3: 'Support independent developers like me'
      }
    },
    zh: {
      title: '赞助我',
      text: `感谢体验我的作品！如果你喜欢我的作品，请考虑`,
      supportMeText: '赞助我',
      yourSupport: '你的支持',
      supportBenefits: {
        benefit1: '保障服务正常运行',
        benefit2: '帮助我继续开发新项目',
        benefit3: '支持像我一样的独立开发者'
      }
    }
  }

  const { t } = useI18n({
    messages
  })

  return { t }
}
