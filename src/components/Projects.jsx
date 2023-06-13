import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: '翻译组',
    features: [
      {
        name: 'EssentialX 中文WIKI',
        description:
          '描述',
        imageSrc: 'https://attachment.mcbbs.net/data/myattachment/forum/202208/02/234418ann50tpqtbu0g733.png',
        imageAlt: '',
        link: 'https://www.mcbbs.net/thread-1367720-1-1.html',
      },
    ],
  },
  {
    name: '美术组',
    features: [
      {
        name: 'FPP冻梨子材质包',
        description:
          '描述',
        imageSrc: 'http://space.coldregion.top/FPP/pack.png',
        imageAlt: '',
        link: 'https://www.mcbbs.net/thread-1361283-1-1.html',
      },
    ],
  },
  {
    name: '红石技术组',
    features: [
      {
        name: '红石理论',
        description:
          "描述",
        imageSrc: 'https://cdn.staticaly.com/gh/LYOfficial/Redstone-Theory@main/Banner/625%C3%97238%E7%B4%A2.webp',
        imageAlt: '',
        link: 'https://www.mcbbs.net/thread-1355338-1-1.html',
      },
    ],
  },
]

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              我们的作品
            </h2>
            <p className="mt-4 text-gray-500">
              描述 
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                        <a
                          href={feature.link}
                          aria-hidden="true"
                          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                        >
                          详细
                          <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
                        </a>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}
