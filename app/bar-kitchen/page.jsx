"use client";
import React from "react";
import Footer from "../footer/footer";
import BreadCrumb from "../breadcrumb/breadcrumb";
import ServicesDetails from "./service-details";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import SEO from "@/components/seo";

const Servicedetails = () => {
  return (
    <>
      <SEO pageTitle="Bar & Kitchen" />
        <HeaderOne />
        <BreadCrumb title="Bar & Kitchen" innerTitle="Bar & Kitchen" bgImage="/img/banner-4.jpg"/>
        <ServicesDetails />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Servicedetails;
