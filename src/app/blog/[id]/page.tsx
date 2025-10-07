"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { BlogDetails } from "../../api/BlogList";
import { useEffect, useState } from "react";
import BlogPage from "../page";

const BlogDetail = ({}) => {
  const token = "fd20fa89183b75e530029557dcc57976bb091a29";
  type blogDetails = {
    title: string;
    date: any;
    updated_by_name: string;
    short_description: string;
    description: string;
    documents: any;
  };
  const params = useParams();
  console.log(params, "params");
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(true);
  const [blogDetailsData, setblogDetailsData] = useState<blogDetails>();
  const getImageUrl =
    "https://capstone-consultancy.s3.dualstack.ap-south-1.amazonaws.com/";
  const stripHTML = (html: any) => {
    if (!html) {
      return "";
    } else return html.replace(/<[^>]*>/g, "");
  };

  useEffect(() => {
    const fetchblogDetails = async () => {
      try {
        setLoading(true);
        const data = await BlogDetails(token, params.id);
        console.log(data, "dsdsdd");
        setblogDetailsData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchblogDetails();
  }, [params.id]);

  return (
    <>
    <section className="product-details">
      <div className="">
        <div className="row">
          <div className="col-lg-12 col-xl-12 product-info">
            <section className="product-details">
              <div className="container">
                {!loading ? (
                  <div className="row">
                    <div className="col-12">
                      <div className="product-details__top">
                        <h1 className="product-details__title mt-4 mb-2">
                          {" "}
                          {blogDetailsData?.title}
                        </h1>
                        <p className="product-details__review mb-3">
                          <span style={{ color: "rgb(255, 65, 108)" }}>
                            {new Date(blogDetailsData?.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}{" "}
                            | By {blogDetailsData?.updated_by_name}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="col-12 mb-4 text-center main-image">
                      {blogDetailsData?.documents &&
                      blogDetailsData?.documents.length > 0 ? (
                          <img
                              className="blog-detail-image mb-4"
                            
                              src={`${getImageUrl}${blogDetailsData?.documents[0]?.file}`} 
                              alt={`blog-image-${blogDetailsData?.documents[0]?.title}`}
                              style={{
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                        // blogDetailsData?.documents.map(
                        //   (item: any, index: any) => (
                          
                        //   )
                        // )
                      ) : (
                        <p>No Image found</p>
                      )}
                    </div>

                    <div className="col-12">
                      <p className="product-details__short-description mb-4">
                        {stripHTML(blogDetailsData?.short_description)}
                      </p>
                    </div>

                    <div className="col-12">
                      <div className="product-details__content">
                        <div
                          className="entry-content clear"
                          data-ast-blocks-layout="true"
                        >
                          <div className="blog-description">
                            {stripHTML(blogDetailsData?.description)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-9 gallery-section mt-2"></div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-center">Loading Blog Details...</h3>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    {/* <BlogPage/> */}
    </>
  );
};

export default BlogDetail;
