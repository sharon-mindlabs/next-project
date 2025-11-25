import Link from "next/link";

export default function BlogListSmall() {
  const items = [
    {
      date: "21 Aug 2025",
      title:
        "Unlock Faster Resolutions and Happier Customers with Better Ticketing",
      desc: "Streamline every support interaction with organized ticket workflows, real-time updates, and smart automation—empowering your...",
      link: "/",
    },
    {
      date: "21 Aug 2025",
      title:
        "A Complete Guide to Efficient, Customer-Centric Support Workflows",
      desc: "Learn how to design streamlined processes that prioritize customer needs, reduce response times, and empower your team to deliver...",
      link: "/",
    },
    {
      date: "21 Aug 2025",
      title: "Make Support Easy for Your Team—and Amazing for Your Customers",
      desc: "Simplify support operations with intuitive ticketing tools that help your team work efficiently, while providing fast, personalized assistance...",
      link: "/",
    },
  ];

  return (
    <div className="blog-list-small">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <section>
            <span className="date">{item.date}</span>
            <Link href="/">{item.title}</Link>
            <p>{item.desc}</p>
          </section>

          <Link href={item.link} className="rounded-link">
            <i className="icon-arrow-up-right"></i>
          </Link>
        </div>
      ))}
    </div>
  );
}
