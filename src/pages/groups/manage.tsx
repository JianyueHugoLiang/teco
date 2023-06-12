import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

const people = [
    {
      name: 'LYOfficial',
      role: '总管/翻译组组长/红石组组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2523026981&s=100',
    },
    {
      name: 'Pairman',
      role: '副总管/联机组组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=3319907936&s=100',
    },
    {
      name: 'LIPiston',
      role: '副总管/联机组副组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=1910093789&s=100',
    },
    {
      name: 'MouFengcoo',
      role: '美术组组长',
      imageUrl: 
        'https://q.qlogo.cn/g?b=qq&nk=347296653&s=100',
    },
    {
      name: 'Orange_Wind',
      role: '地图组组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2423347596&s=100',
    },
    {
      name: 'airqt_',
      role: '红石组副组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=1425248077&s=100',
    },
    {
      name: 'Daybreak',
      role: '地图组副组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Kirihara1012',
      role: '美术组副组长',
      imageUrl: 
        'https://q.qlogo.cn/g?b=qq&nk=2848912430&s=100',
    },
    {
      name: 'sky_tianle',
      role: '翻译组副组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=1430413773&s=100',
    }
  ]
  
  export default function manage() {
    return (
      <>
        <head>
          <title>管理组 - TecoStudio</title>
        </head>
        <Header />
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">管理组</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                TecoStudio 组织核心管理成员
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