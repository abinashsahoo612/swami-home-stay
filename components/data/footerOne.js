import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const footerOne = {
    logo: '/assets/img/logo-9.png',
    title_1: 'About Us',
    description: 'Subscribe to out newsletter today to receive updates on the latest news, releases and special offers respect your privacy.',
    title_2: 'Other Pages',
    widgetMenus: [
        {link:'#about',title:'About Us'},
        {link:'#contact',title:'Contact Us'},
        {link:'#rooms',title:'Room List'},
    ],
    title_3: 'Gallery',
    title_4: 'Office Info',
    office_des: 'Nalva Road, Nandurbar,Maharashtra-425412',
    officeInfos: [
        {
            icon: <FaMapMarkerAlt />,
            info: "Panhala Fort, Panhala, Gude, Maharashtra 416201",
            link: "https://maps.google.com/?q=191+Rakshi+Panhala"
        },
        {
            icon: <FaPhoneAlt />,
            info: "+91 9423281708",
            link: "tel:+919423281708"
        },
        {
            icon: <FaEnvelope />,
            info: "contact@breezeresort.com",
            link: "mailto:contact@swamihomestay.com"
        }
    ],
  }

  export default footerOne;