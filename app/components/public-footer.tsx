import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";
import { Link } from "react-router";

const PublicFooter = () => {
  const socialLinks = [
    { icon: LuInstagram, href: "" },
    { icon: LuFacebook, href: "" },
    { icon: LuYoutube, href: "" },
    { icon: LuTwitter, href: "" },
  ];

  const menu = [
    {
      label: "Browse by subject",
      link: true,
      items: [
        { name: "Computer Science" },
        { name: "Psychology" },
        { name: "Cybersecurity" },
        { name: "Health" },
        { name: "Law" },
        { name: "Accounting" },
        { name: "Web Development" },
      ],
    },
    {
      label: "Browse by institution",
      link: true,
      items: [
        { name: "Kaduna Polytechnic" },
        { name: "University of Ilorin" },
        { name: "University of Offa" },
        { name: "FedPOffa" },
        { name: "Kaduna Polytecnic" },
        { name: "University of Lagos" },
      ],
    },
  ];

  const topics = [];

  const institutions = [];

  const tutors = [
    { name: "Babas Class" },
    { name: "University of Ilorin" },
    { name: "University of Offa" },
    { name: "FedPOffa" },
    { name: "Kaduna Polytecnic" },
    { name: "University of Lagos" },
  ];

  const rankings = [
    { name: "Best Online Courses of All Time" },
    { name: "Best Online Courses of the Year" },
    { name: "Most Popular Courses of All Time" },
    { name: "Most Popular Courses of the Year" },
    { name: "250 Top FREE Coursera Courses of All Time" },
    { name: "100 Top FREE edX Courses of All Time" },
    { name: "250 Top Udemy Courses of All Time" },
  ];

  const reports = [
    { name: 'The "New Normal" that Wasn\'t' },
    { name: "DDoS Attack on Class Central" },
    { name: "500+ Online Degrees in India" },
    { name: "Harvard's CS50 Free Certificate Guide" },
    { name: "How Open University Works" },
    { name: "Free Certificates & Courses" },
  ];

  const courses = [
    { name: "300+ Free Google Certificates" },
    { name: "9000 Free Courses from Tech Giants" },
    { name: "1800+ Free Coursera Courses" },
    { name: "Ivy League Online Courses" },
    { name: "180 Free Writing Online Courses" },
  ];

  return (
    <footer className="px-5 py-16 bg-gray-200">
      <div className="grid md:grid-cols-4 gap-5">
        <div className="">
          <h3>we're in the know</h3>
          <div className="">
            {socialLinks.map((link, index) => (
              <Link to={link.href} key={index}>
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
