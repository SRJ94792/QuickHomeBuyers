"use client";

import Header from "../landing/Header";

export default function HeaderExample() {
  return <Header onScrollToSection={(section) => console.log("Scroll to:", section)} />;
}
