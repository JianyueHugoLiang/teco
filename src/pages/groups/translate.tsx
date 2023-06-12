import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const people = [
    {
      name: 'LYOfficial',
      role: '总管/翻译组组长/红石组组长',
      imageUrl:
        '',
    },
    {
      name: 'sky_tianle',
      role: '翻译组副组长',
      imageUrl:
        '',
    },
    {
      name: 'soda',
      role: '翻译组小组长',
      imageUrl:
        '',
    },
    {
      name: 'Annijang',
      role: '正式成员',
      imageUrl:
        '',
    },
    {
      name: 'Valorr',
      role: '正式成员',
      imageUrl:
        '',
    },
  ]
  
  export default function translate() {
    return (
      <>
        <Header />
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">翻译组</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                独立于服务器的小组，有服内成员，也有服外成员。作为翻译人员，参与 TECO 团坑的翻译项目，如插件、Mod、Wiki等。
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