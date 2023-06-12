import { 
    GitHubIcon,
    BiliBiliIcon,
    YouTubeIcon,
    DiscordIcon,
} from "@/components/SocialIcons.jsx"

const navigation = [
    {
      name: 'BiliBili',
      href: 'https://space.bilibili.com/1387387251',
      icon: BiliBiliIcon,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/TecoStudio',
      icon: GitHubIcon,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCuzP3_UFXRdm84TbdwcEFDA',
      icon: YouTubeIcon,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/nGHvDz55bn',
      icon: DiscordIcon,
    }
  ]
  
  export function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2020 - {new Date().getFullYear()} TecoStudio. <a href="https://blog.jianyuelab.cc" className="italic">Made by JianyueLab</a>. All rights reserved. 鲁ICP备2022009633号-2
            </p>
          </div>
        </div>
      </footer>
    )
  }
  