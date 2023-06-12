import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const people = [
    {
      name: 'Orange_Wind',
      role: '地图组组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2423347596&s=100',
    },
    {
      name: 'Daybreak',
      role: '地图组副组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'nbsp_in_heaven',
      role: '地图组小组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2478896527&s=100',
    },
    {
      name: 'wajz',
      role: '地图组小组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Annijiang',
      role: '正式成员',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=27761010872&s=100',
    },
    {
      name: 'Devanaoi',
      role: '正式成员',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2834841080&s=100',
    },
    {
      name: 'LYOfficial',
      role: '总管/翻译组组长/红石组组长',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2523026981&s=100',
    },
    {
      name: 'Yang',
      role: '正式成员',
      imageUrl:
        'https://q.qlogo.cn/g?b=qq&nk=2954205878&s=100',
    },
  ]
  
  export default function map() {
    return (
      <>  
        <head>
          <title>地图组 - TecoStudio</title>
        </head>
        <Header />
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">地图组</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                非独立小组，人员基于内服或者探索服成员。作为建筑师参与大型建筑、建筑团坑、主城大厅等工程的设计，如果可能会在以后参与地图制作。
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