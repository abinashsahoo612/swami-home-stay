"use client"
import SEO from "@/components/seo";
import Footer from "@/app/footer/footer";
import HeaderThree from "@/app/header/headerThree";
import ScrollToTopButton from "@/app/scroll-to-top/scrollToTop";
import Accommodations from "@/app/home-three/accommodations";
import Bandarea from "@/app/home-three/band-area";
import Banner from "@/app/home-three/banner";
import Bookingarea from "@/app/home-three/booking-area";
import Callarea from "@/app/home-three/call-area";
import Deluxe from "@/app/home-three/deluxe";
import Placearea from "@/app/home-three/place-area";
import Roomarea from "@/app/home-three/room-area";
import Services from "@/app/home-three/services";
import Teamarea from "@/app/home-three/team-area";
import HeaderOne from "./header/HeaderOne";
import Contact from "@/app/home-three/contact";
import Gallery from "@/app/home-three/gallery";

const Home3 = () => {
  return (
    <>
        <SEO pageTitle='Swami Home Stay' />
        <HeaderOne />
        <Banner />
        <Deluxe />
        {/* <Callarea /> */}
       
        {/* <Services /> */}
        <Gallery />
        <Roomarea />
        <Accommodations/>
        {/* <Teamarea /> */}
        {/*<Bookingarea />*/}
        <Contact /> {/* Add this line */}
        <Placearea />
        {/* <Bandarea /> */}
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Home3;
