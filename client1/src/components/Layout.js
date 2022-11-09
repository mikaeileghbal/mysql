import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
