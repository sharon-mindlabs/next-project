import Image from "next/image";
export default function HomeBanner() {
  return (
    <div className="latest-blog">
      <span className="subtitle">Blog</span>
      <h3>The Power of an Organized Ticketing System</h3>
      <span className="date">21 Aug 2025</span>
      <p>
        Deliver faster, more organized support with an effective ticketing
        system. Keep customers happy and your team productive every step of the
        way.
      </p>

      <Image
        src="/images/blog-main-image.png"
        alt="My Logo"
        width={764}
        height={383}
      />
    </div>
  );
}
