type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type FeaturesBoxProps = {
  features: FeatureItem[];
};

export default function FeaturesBox({ features }: FeaturesBoxProps) {
  return (
    <div className="features-box">
      {features.map((item, index) => (
        <div className="item" key={index}>
          <i className={item.icon}></i>
          <h6>{item.title}</h6>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
