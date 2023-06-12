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
      name: 'airqt_',
      role: '红石组副组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=1425248077&s=100',
    },
    {
      name: 'yjxiang',
      role: '红石组小组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2316193171&s=100',
    },
    {
      name: 'Bbbbbrock',
      role: '正式组员',
      imageUrl: 
        'https://q.qlogo.cn/g?b=qq&nk=1194047946&s=100',
    },
    {
      name: '活塞脑壳',
      role: '正式组员',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=447554302&s=100',
    },
    {
      name: 'Pairman',
      role: '副总管/联机组副组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=3319907936&s=100',
    },
  ]
  
  export default function tech() {
    return (
      <>
        <head>
          <title>红石技术组 - TecoStudio</title>
        </head>
        <Header />
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">红石技术组</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                非独立小组，人员基于内服或者探索服成员。作为建筑师参与大型建筑、建筑团坑、主城大厅等工程的设计，如果可能会在以后参与地图制作。服内认定的技术组，全是红石生电方面的dalao，参与新机器的设计或实装。
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