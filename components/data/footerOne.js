import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const footerOne = {
  logo: "/assets/img/logo-9.png",
  title_1: "About Us",
  description:
    "Subscribe to out newsletter today to receive updates on the latest news, releases and special offers respect your privacy.",
  title_2: "Other Pages",
  widgetMenus: [
    { link: "#about", title: "About Us" },
    { link: "#contact", title: "Contact Us" },
    { link: "#rooms", title: "Room List" },
  ],
  title_3: "Gallery",
  title_4: "Office Info",
  office_des: "Nalva Road, Nandurbar,Maharashtra-425412",
  officeInfos: [
    {
      icon: <FaMapMarkerAlt />,
      info: "229, Dannamma, Panhala Near Bajiprabhu Putla ( Statue ) Main Road Panhala, Dist - Kolhapur, Maharashtra 416201",
      link: "https://www.google.com/maps/place/Swami+Home+Stay/@16.8073656,74.1088489,19z/data=!4m15!1m5!3m4!2zMTbCsDQ4JzI2LjgiTiA3NMKwMDYnMzQuMSJF!8m2!3d16.8074444!4d74.1094722!3m8!1s0x3bc1af25e229eb2f:0x6f6d100046418e4a!5m2!4m1!1i2!8m2!3d16.8072376!4d74.1094631!16s%2Fg%2F11f1108vtm?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaPhoneAlt />,
      infoLink: [
        {
          info: "+91 9423281708",
          link: "tel:+919423281708",
        },
        {
          info: "+91 9545489180",
          link: "tel:+919545489180",
        },
      ],
      type: "custom",
    },
    {
      icon: <FaEnvelope />,
      info: "sramesh0025@gmail.com",
      link: "mailto:contact@swamihomestay.com",
    },
  ],
};

export default footerOne;
