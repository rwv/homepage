export const languages = {
  en: 'English',
  zh: '中文'
} as const

export type Lang = keyof typeof languages
export const defaultLang: Lang = 'en'

export const ui = {
  en: {
    'site.name': 'rwv',

    'portals.title': 'Portals',
    'portals.GitHub.title': 'GitHub',
    'portals.Blog.title': 'Blog',
    'portals.Status.title': 'Status',
    'portals.Email.title': 'Email',
    'portals.ProtonMail.title': 'Proton Mail',

    'projects.title': 'Projects',
    'projects.InBrowserApp.title': 'InBrowser.App',
    'projects.InBrowserApp.description': 'Build web apps that fully run in the browser.',
    'projects.LookScanned.title': 'Look Scanned',
    'projects.LookScanned.description':
      'Make your PDF look scanned. No printers and scanners any more.',
    'projects.ChineseDosGames.title': 'Chinese Dos Games',
    'projects.ChineseDosGames.description': 'Chinese DOS games collection and Play it in browser.',
    'projects.FlashArchiveProject.title': 'Flash Archive Project',
    'projects.FlashArchiveProject.description':
      "Chinese good old days' Adobe Flash and Play it in browser.",
    'projects.AppStorify.title': 'AppStorify',
    'projects.AppStorify.description': 'Find non-Mac App Store apps and storify it.',
    'projects.Others.title': 'Others',
    'projects.Others.description': 'Find more on GitHub',

    'support.title': 'Support Me',
    'support.text': 'Thanks for using my works. If you like my works, please consider ',
    'support.supportMeText': 'supporting me',
    'support.yourSupport': 'Your generous support',
    'support.benefit1': 'Keep servers running',
    'support.benefit2': 'Help me to keep developing new projects',
    'support.benefit3': 'Support independent developers like me',

    'support.platformHint': 'You can support me on',
    'support.Bitcoin.title': 'Bitcoin',
    'support.afdian.title': '爱发电',
    'support.Ethereum.title': 'Ethereum',
    'support.WeChat.title': 'WeChat',
    'support.WeChat.description': 'WeChat QR code',

    'nav.backToHomepage': 'Back To Homepage'
  },
  zh: {
    'site.name': 'rwv',

    'portals.title': '传送门',
    'portals.GitHub.title': 'GitHub',
    'portals.Blog.title': '博客',
    'portals.Status.title': '服务状态',
    'portals.Email.title': '电子邮件',
    'portals.ProtonMail.title': 'Proton Mail',

    'projects.title': '作品',
    'projects.InBrowserApp.title': 'InBrowser.App',
    'projects.InBrowserApp.description': '打造完全运行在浏览器中的 Web 应用',
    'projects.LookScanned.title': 'Look Scanned',
    'projects.LookScanned.description': '让 PDF 看上去就像是扫描件一样，无需打印机和扫描仪',
    'projects.ChineseDosGames.title': '在线 DOS 游戏',
    'projects.ChineseDosGames.description': '在浏览器中在线游玩 DOS 游戏，电脑、手机全平台支持',
    'projects.FlashArchiveProject.title': 'Flash 保存计划',
    'projects.FlashArchiveProject.description':
      '保存闪客时代的历史，纪念带给我们无限欢乐的 Flash 作品',
    'projects.AppStorify.title': 'AppStorify',
    'projects.AppStorify.description': '找出非 Mac App Store 应用并替换成商店版本',
    'projects.Others.title': '其他',
    'projects.Others.description': '在 GitHub 上找到其他更多作品',

    'support.title': '赞助我',
    'support.text': '感谢体验我的作品！如果你喜欢我的作品，请考虑',
    'support.supportMeText': '赞助我',
    'support.yourSupport': '你的支持',
    'support.benefit1': '保障服务正常运行',
    'support.benefit2': '帮助我继续开发新项目',
    'support.benefit3': '支持像我一样的独立开发者',

    'support.platformHint': '你可以通过以下平台来支持我',
    'support.Bitcoin.title': '比特币',
    'support.afdian.title': '爱发电',
    'support.Ethereum.title': '以太坊',
    'support.WeChat.title': '微信',
    'support.WeChat.description': '微信赞赏码',

    'nav.backToHomepage': '返回主页'
  }
} as const
