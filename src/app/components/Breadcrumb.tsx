"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";


interface BreadcrumbProps {
  title?: string
}

const Breadcrumb = ({title }: BreadcrumbProps) => {
  const pathName = usePathname();


  // const pathArray = pathName.slice(1);
  // console.log(pathArray,"patharray")
  // if (pathName === "/") return null;


  return (
    <section
      className="page-title"
      style={{ background: "url('./assets/images/inner/page-title-bg.jpg')" }}
    >
      <div className="auto-container">
        <div className="title-outer">
          <ul className="page-breadcrumb wow fadeInUp" data-wow-delay=".3s">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li> {title}</li>
          </ul>
          <h1 className="title wow fadeInUp" style={{textTransform:'capitalize'}} data-wow-delay=".5s">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
