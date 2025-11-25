import Image from "next/image";
import LatestBlog from "../blog/LatestBlog";

import BlogListSmall from "../blog/BlogListSmall";
export default function HomeBanner() {
  return (
    <div className="home-blog-section">
      <div className="container">
        <div className="content-area">
          <LatestBlog />
          <BlogListSmall />
        </div>
      </div>
    </div>
  );
}
