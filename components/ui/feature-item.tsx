import Image from "next/image";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flexColCenter lg:flexColStart gap-3">
      <div className="flexCenter lg:flexStart gap-4">
        <Image src={icon} alt="map" width={28} height={28} />
        <h2 className="p-bold-24">{title}</h2>
      </div>
      <p className="p-regular-16">{description}</p>
    </li>
  );
};

export default FeatureItem;
