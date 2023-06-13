const links = [
    { name: '论坛', href: 'https://bbs.tecostudio.cn' },
    { name: 'BILIBILI', href: 'https://space.bilibili.com/1387387251' },
    { name: '新闻', href: '/articles' },
    { name: 'MCBBS小组', href: 'https://www.mcbbs.net/group-2194-1.html'},
  ]
  const stats = [
    { name: '小组', value: '6' },
    { name: '正式成员', value: '30+' },
    { name: '实习组员', value: '100+' },
  ]
  
  export default function About() {
    return (
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="relative w-full h-full">
            <img
              src="https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612192916-50ebcf4d-me.png"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover object-right md:object-center opacity-70"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 text-center text-white z-10">
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">TecoStudio 帝咕团队</h2>
              <p className="mt-5 text-lg leading-8 max-w-2xl mx-auto">
              「TecoStudio」，简称「TECO」 成立于 2020.2.22 ，于 2022.7.22 在 MCBBS 上创立小组，是一个以红石技术、生电技巧为主的全方面 Minecraft 综合小组。
                本小组开设有两个生电服务器，分别是 TecoCraft 内服 和 TecoEX 探索服 ，内服致力于探索 1.16.5 版本的红石技术，探索服致力于随版本更新并体验新特性。
                除此之外，TECO 小组是一个以游戏技巧（红石方向）和地图制作为主，综合服务器插件、联机教程和材质包等多个领域的综合性小组。
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }