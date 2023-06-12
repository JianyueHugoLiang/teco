import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

const people = [
    {
      name: 'MouFengcoo',
      role: '美术组组长',
      imageUrl:
        'https://photo.jianyuelab.cc/_data/i/upload/2023/06/12/20230612091708-0b53856c-me.png',
    },
    {
      name: 'Kihara1012',
      role: '美术组副组长',
      imageUrl:
        '',
    },
    {
      name: '活塞脑壳',
      role: '正式成员',
      imageUrl:
        '',
    },
    {
      name: 'LYOfficial',
      role: '总管/翻译组组长/红石组组长',
      imageUrl:
        '',
    },
    {
      name: 'LIPiston',
      role: '副总管/联机组副组长',
      imageUrl:
        '',
    },
    {
      name: 'Pairman',
      role: '副总管/联机组组长',
      imageUrl:
        '',
    },
    {
      name: 'SmallCoral',
      role: '正式组员',
      imageUrl:
        '',
    },
    {
      name: 'zyl456',
      role: '正式组员',
      imageUrl:
        '',
    }
  ]
  
  export default function art() {
    return (
      <>
        <Header />
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">美术组</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                独立于服务器的小组，有服内成员，也有服外成员。参与团坑材质的制作设计等（如冻梨子材质）。
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