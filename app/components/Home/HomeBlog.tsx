"use client";
import Link from "next/link";
import { useState } from "react";

export type HomeBlogItems = {
  id: number;
  date: string;
  title: string;
  discription: string;
  image: string;
  link: string;
};

type HomeBlogProps = {
  data: HomeBlogItems[];
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function HomeBlog({ data }: HomeBlogProps) {
  return (
    <div className="home-blog">
      <div className="container">
        <div className="content-area">
          {data?.[0] && (
            <Link className="lastest-blog" href={`${data?.[0]?.link}`}>
              <div className="discription">
                <img src="images/document-text.svg" alt="" />
                <span>Blog</span>
              </div>
              <h4>{data[0].title}</h4>
              <span className="date">{formatDate(data[0].date)}</span>
              <p>{data[0].discription}</p>
              <img className="blog-image" src={data[0].image} alt="" />
            </Link>
          )}
          {/*  */}
          <div className="latest-blog-list">
            {data?.slice(1).map((item: HomeBlogItems) => (
              <Link className="item" href={`${item?.link}`}>
                <section>
                  <span className="date">{formatDate(item.date)}</span>
                  <h6>{item?.title}</h6>
                  <p>{item?.discription}</p>
                </section>
                <i className="icon-arrow-up-right"></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
