"use client";

import Link from "next/link";
import { BlogList } from "../api/BlogList";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import GetinTouch from "../components/GetinTouch";

export default function BlogPage() {
  const token = "fd20fa89183b75e530029557dcc57976bb091a29";
  type blogListData = {
    title: any;
    blog_id: number;
    date: number;
    documents: { file: string; type: string; title: string }[];
    file: string;
  };

  const [blogListData, setBlogListData] = useState<blogListData[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBloglist = async () => {
      try {
        const response = await BlogList(token);
        setLoading(true);
        console.log(response.results);
        setBlogListData(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBloglist();
  }, []);

  const getImageUrl =
    "https://capstone-consultancy.s3.dualstack.ap-south-1.amazonaws.com/";

  return (
    <>
      <Breadcrumb title={"Blogs"} />
      <section className="news-secton section-padding fix">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <span className="triangle triangle1"></span>
              <span className="triangle triangle2"></span>
              Our Blog
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Insights from Latest Blog
            </h2>
          </div>
          <div className="news-box-container">
            <div className="row">
              {loading ? (
                <div>
                  <h3 className="text-center">Loading blogs...</h3>
                </div>
              ) : blogListData.length > 0 ? (
                blogListData
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="col-md-4 wow fadeInUp animated"
                      data-wow-delay="${animationDelay}s"
                      style={{
                        visibility: "visible",
                        animationDelay: `0.2s`,
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="news-box-items">
                        <div className="news-image">
                          <img
                            src={
                              item.documents && item.documents.length > 1
                                ? `${getImageUrl}${item.documents[0]?.file}`
                                : `/assets/images/black-logo.png`
                            }
                            alt={item.documents[0]?.title}
                            className="blog-image"
                          />
                          <img
                            src={
                              item.documents && item.documents.length > 0
                                ? `${getImageUrl}${item.documents[0]?.file}`
                                : `/assets/images/black-logo.png`
                            }
                            alt={item.documents[0]?.title}
                            className="blog-image"
                          />
                        </div>
                        <div className="news-content">
                          <ul className="comments-list">
                            <li>
                              <i>
                                {new Date(item.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </i>
                            </li>
                          </ul>
                          <h3>
                            <Link href={`/blog/${item.blog_id}`}>{item.title}</Link>
                          </h3>
                          <Link
                            // href={`${item.blog_id}`}

                            href={`/blog/${item.blog_id}`}
                            className="link-btn"
                          >
                            Learn More
                            <span className="icon">
                              <i className="lnr-icon-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <p>No Blog Found</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <GetinTouch/>
    </>
  );
}
