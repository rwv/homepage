import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'
import { Github, Book, Cog, Inbox, Lock } from '@vicons/fa'

export function PortalSetup() {
  const portals = ['GitHub', 'Blog', 'Status', 'Email', 'ProtonMail'] as const
  type Portal = (typeof portals)[number]

  const portalLinks: Readonly<Record<Portal, string>> = {
    GitHub: 'https://github.com/rwv',
    Blog: 'https://blog.rwv.dev',
    Status: 'https://status.rwv.dev',
    Email: 'mailto:i@rwv.dev',
    ProtonMail: 'mailto:seedgou@proton.me'
  }

  const portalLinkLabels: Readonly<Record<Portal, string>> = {
    GitHub: 'github.com/rwv',
    Blog: 'blog.rwv.dev',
    Status: 'status.rwv.dev',
    Email: 'i@rwv.dev',
    ProtonMail: 'seedgou@proton.me'
  }

  const portalIcons: Readonly<Record<Portal, Component>> = {
    GitHub: Github,
    Blog: Book,
    Status: Cog,
    Email: Inbox,
    ProtonMail: Lock
  }

  const messages = {
    en: {
      title: 'Portals',
      portals: {
        GitHub: {
          title: 'GitHub'
        },
        Blog: {
          title: 'Blog'
        },
        Status: {
          title: 'Status'
        },
        Email: {
          title: 'Email'
        },
        ProtonMail: {
          title: 'Proton Mail'
        }
      }
    },
    zh: {
      title: '传送门',
      portals: {
        GitHub: {
          title: 'GitHub'
        },
        Blog: {
          title: '博客'
        },
        Status: {
          title: '服务状态'
        },
        Email: {
          title: '电子邮件'
        },
        ProtonMail: {
          title: 'Proton Mail'
        }
      }
    }
  }

  const { t } = useI18n({
    messages
  })

  return { t, portals, portalLinks, portalLinkLabels, portalIcons }
}
