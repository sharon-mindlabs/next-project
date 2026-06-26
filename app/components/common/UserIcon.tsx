interface UserIconProps {
  data: {
    id?: number;
    url: string;
  }[];
}

export default function UserIcon({ data }: UserIconProps) {
  return (
    <div className="user-icon-wrapper">
      {data?.map((item, index) => (
        <div className="user-icon" key={item.id || index}>
          <img src={item.url} alt="" />
        </div>
      ))}
    </div>
  );
}
