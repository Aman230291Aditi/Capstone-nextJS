
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../app/styles/globals.css";
import "../app/styles/responsive.css";
import Breadcrumb from "./components/Breadcrumb";

import "../app/styles/flaticon-finance.css"
import "../app/styles/flaticon-set-business.css"
import "../app/styles/flaticon.css"
import "../app/styles/linear.css"
import "../app/styles/fontawesome.css"
import "../app/styles/fontawesome-free.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Load Bootstrap JS on client side only
  if (typeof window !== "undefined") {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {/* <Breadcrumb /> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
