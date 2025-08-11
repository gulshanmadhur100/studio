import { Briefcase, Cpu, GraduationCap, TrendingUp } from "lucide-react";

export const services = [
  {
    slug: "technology-services",
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: "Technology Services",
    description: "Cutting-edge tech solutions to drive your business forward.",
    details: "We offer a wide range of technology services, including software development, cloud solutions, and IT consulting. Our team of experts is dedicated to providing you with the best solutions to meet your business needs. We specialize in creating custom applications that are scalable, reliable, and secure."
  },
  {
    slug: "training-courses",
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: "Training Courses",
    description: "Upskill with our expert-led courses and certification programs.",
    details: "Our training programs are designed to help you and your team stay ahead of the curve. We offer courses in a variety of subjects, from programming languages to project management. All our courses are taught by industry experts with years of practical experience."
  },
  {
    slug: "trading-support",
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: "Trading Support",
    description: "Comprehensive support and insights for your trading activities.",
    details: "Navigate the complexities of the financial markets with our expert trading support. We provide real-time data, market analysis, and personalized strategies to help you make informed decisions and maximize your returns."
  },
  {
    slug: "placement-internship",
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: "Placement/Internship",
    description: "Launch your career with our placement and internship opportunities.",
    details: "Kickstart your career with our comprehensive placement and internship programs. We partner with leading companies to provide you with opportunities to gain valuable experience and make a successful transition into the professional world."
  },
];
