import { ElementType } from 'react'

type TFeatureList = {
  title: string
  icon: ElementType
  description: string
}

export function FeatureList({ title, icon: Icon, description }: TFeatureList) {
  return (
    <li className="flexColStart gap-3 ">
      <div className="flexCenter lg:flexStart gap-2 md:gap-4">
        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-primary-700 p-1">
          <Icon color="#fff0f1" />
        </div>
        <h2 className="p-bold-20 text-lg text-white md:text-[20px]">{title}</h2>
      </div>
      <p className="p-regular-16">{description}</p>
    </li>
  )
}
