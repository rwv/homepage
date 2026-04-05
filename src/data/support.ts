export const bitcoinAddress = 'bc1q8e2lvgr4q0zxh6vwkg0g9604smu2vkjralmtf8'
export const ethAddress = '0xf4c60a6699eD05fad8cE5Bf8734f09564C010Ffb'

export const supports = [
  {
    key: 'afdian' as const,
    link: 'https://afdian.com/@seedgou',
    label: 'afdian.com/@seedgou',
    icon: 'afdian'
  },
  {
    key: 'WeChat' as const,
    link: '/sponsor/wechat',
    label: 'wechat-qr',
    icon: 'ion:logo-wechat'
  },
  {
    key: 'Bitcoin' as const,
    link: `bitcoin:${bitcoinAddress}?message=Support%20Me`,
    label: bitcoinAddress,
    icon: 'fa6-brands:bitcoin'
  },
  {
    key: 'Ethereum' as const,
    link: `ethereum:${ethAddress}`,
    label: ethAddress,
    icon: 'fa6-brands:ethereum'
  }
] as const
