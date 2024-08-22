import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'
import { Apple, Print, Gamepad, Bolt, EllipsisH } from '@vicons/fa'
import { Box16Filled } from '@vicons/fluent'

export function ProjectSetup() {
  const projects = [
    'InBrowserApp',
    'LookScanned',
    'ChineseDosGames',
    'FlashArchiveProject',
    'AppStorify',
    'Others'
  ] as const
  type Project = (typeof projects)[number]

  const projectIcons: Readonly<Record<Project, Component>> = {
    AppStorify: Apple,
    InBrowserApp: Box16Filled,
    LookScanned: Print,
    ChineseDosGames: Gamepad,
    FlashArchiveProject: Bolt,
    Others: EllipsisH
  }

  const projectLinks: Readonly<Record<Project, string>> = {
    AppStorify: 'https://github.com/rwv/AppStorify',
    LookScanned: 'https://lookscanned.io/',
    ChineseDosGames: 'https://dos.lol/',
    FlashArchiveProject: 'https://flash.zczc.cz/',
    Others: 'https://github.com/rwv',
    InBrowserApp: 'https://inbrowser.app/'
  }

  const messages = {
    en: {
      title: 'Projects',
      projects: {
        AppStorify: {
          title: 'AppStorify',
          description: 'Find non-Mac App Store apps and storify it.'
        },
        LookScanned: {
          title: 'Look Scanned',
          description: 'Make your PDF look scanned. No printers and scanners any more.'
        },
        ChineseDosGames: {
          title: 'Chinese Dos Games',
          description: 'Chinese DOS games collection and Play it in browser.'
        },
        FlashArchiveProject: {
          title: 'Flash Archive Project',
          description: "Chinese good old days' Adobe Flash and Play it in browser."
        },
        Others: {
          title: 'Others',
          description: 'Find more on GitHub'
        },
        InBrowserApp: {
          title: 'InBrowser.App',
          description: 'Build web apps that fully run in the browser.'
        }
      }
    },
    zh: {
      title: '作品',
      projects: {
        AppStorify: {
          title: 'AppStorify',
          description: '找出非 Mac App Store 应用并替换成商店版本'
        },
        LookScanned: {
          title: 'Look Scanned',
          description: '让 PDF 看上去就像是扫描件一样，无需打印机和扫描仪'
        },
        ChineseDosGames: {
          title: '在线 DOS 游戏',
          description: '在浏览器中在线游玩 DOS 游戏，电脑、手机全平台支持'
        },
        FlashArchiveProject: {
          title: 'Flash 保存计划',
          description: '保存闪客时代的历史，纪念带给我们无限欢乐的 Flash 作品'
        },
        InBrowserApp: {
          title: 'InBrowser.App',
          description: '打造完全运行在浏览器中的 Web 应用'
        },
        Others: {
          title: '其他',
          description: '在 GitHub 上找到其他更多作品'
        }
      }
    }
  }

  const { t } = useI18n({
    messages
  })

  return { t, projects, projectIcons, projectLinks }
}
