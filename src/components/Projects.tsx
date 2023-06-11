const posts = [
    {
      id: 1,
      title: 'Essentials 中文WIKI',
      href: 'https://www.mcbbs.net/thread-1367720-1-1.html',
      description:
        'Essentials 中文汉化WIKI',
      imageUrl:
        'https://attachment.mcbbs.net/data/myattachment/forum/202208/02/234418ann50tpqtbu0g733.png',
      date: 'July 28, 2022',
      datetime: '2022-07-28',
    },
    {
        id: 2,
        title: '红石理论',
        href: 'https://www.mcbbs.net/thread-1355338-1-1.html',
        description:
          '我的世界红石基础',
        imageUrl:
          'https://cdn.staticaly.com/gh/LYOfficial/Redstone-Theory@main/Banner/625%C3%97238%E7%B4%A2.webp',
        date: 'June 25, 2022',
        datetime: '2022-06-25',
    },
    {
        id: 3,
        title: 'FPP冻梨子材质包',
        href: 'https://www.mcbbs.net/thread-1361283-1-1.html',
        description:
          '我的世界红石基础',
        imageUrl:
          'https://attachment.mcbbs.net/data/myattachment/group/cd/group_2194_banner.png?1667564028',
        date: 'July 11, 2022',
        datetime: '2022-07-11',
      },
]
  
  export default function Projects() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的作品</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  