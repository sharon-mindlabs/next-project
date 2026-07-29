export type HomeBlogItems = {
  id: number;
  date: string;
  title: string;
  discription: string;
  image: string;
  link: string;
};

export async function getLatestBlogs(): Promise<HomeBlogItems[]> {
  try {
    const res = await fetch(
      "https://blog.flockdesk.com/wp-json/recent/v1/latest-posts",
      {
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();

    return data.map((item: any) => ({
      id: item.id,
      date: item.date,
      title: item.title,
      discription: item.content || "",
      image: item.image || item.featured_image || "",
      link: item.link,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
