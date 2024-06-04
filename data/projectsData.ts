interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'nftinfo.🟢nline',
    description: `3rd place winner in "Celestia Infinite Space Bazaar" hackathon “Build Whatever" track 🚀`,
    href: 'https://dorahacks.io/ko/buidl/12604',
  },
  {
    title: 'Dynamic Boy',
    description: `Dynamic bounty track winner in "ETHGlobal: Frameworks" hackathon 🏆`,
    href: 'https://ethglobal.com/showcase/dynamic-boy-xpwo0',
  },
  {
    title: 'Discovey',
    description: `Safe — Best Use of Safe{Core} for AA bounty track winner in "ETHGlobal 2023 Online" hackathon 🏆`,
    href: 'https://ethglobal.com/showcase/discovey-tuywc',
  },
  {
    title: 'Suiquid',
    description: `Wildcard winners in "2023 Sui Builder House SEOUL" hackathon 🏆`,
    href: 'https://github.com/soaryong/suiquid-html5-game',
  },
]

export default projectsData
