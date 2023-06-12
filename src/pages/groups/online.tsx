import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

const people = [
    {
      name: 'Pairman',
      role: '副总管/联机组组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'LIPiston',
      role: '副总管/联机组副组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'lin',
      role: '联机组小组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'lsskyd',
      role: '联机组小组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'airqt_',
      role: '红石组副组长',
      imageUrl: 
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'asd123461',
      role: '正式组员',
      imageUrl: 
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Bbbbbrock',
      role: '正式组员',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'BlueTape_awa',
      role: '正式组员',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'crazyboy0122',
      role: '正式组员',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Crying_star',
      role: '正式组员',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: '厨师沙律',
      role: '正式成员',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Daybreak',
      role: '地图组副组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Dokin_Sama',
      role: '正式组员',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'FlyingDandeagle',
      role: '正式组员',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'kirihara1012',
      role: '美术组副组长',
      imageUrl: 
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'MouFengcoo',
      role: '美术组组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Orange_Wind',
      role: '地图组组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'LYOfficial',
      role: '总管/翻译组组长/红石组组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
  ]
  
  export default function online() {
    return (
      <>
        <head>
          <title>联机组成员 - TecoStudio</title>
        </head>
        <Header />
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">联机组</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                进行新版本 Minecraft 的探索，研究新的生电内容，编写联机相关教程、制作服务端插件。TecoCraft 内服、TecoEX 探索服 划分在该组下作为小组，由该组组长统一管理。
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                作为服务器的玩家参与服务器建设，探索新的世界！
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    )
  }