import { Briefcase, Cpu, GraduationCap, TrendingUp } from "lucide-react";

export const services = [
  {
    slug: "technology-services",
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: "Technology Services",
    description: "Cutting-edge tech solutions to drive your business forward.",
    details: (
      <div className="space-y-4">
        <p>
          We offer a comprehensive suite of technology services designed to empower your business. Our offerings include custom software development, where we build tailor-made web and mobile applications from the ground up, focusing on seamless user experience and robust performance. Our expertise extends to cloud infrastructure management, helping you migrate to and optimize on platforms like AWS, Azure, and Google Cloud for enhanced scalability and security.
        </p>
        <p>
          Furthermore, our IT consulting services provide strategic guidance to align your technology roadmap with your business objectives. We analyze your existing systems, identify areas for improvement, and recommend solutions that drive efficiency and innovation. Whether you are a startup needing to build a minimum viable product or an established enterprise seeking to modernize your legacy systems, our team is equipped to deliver results.
        </p>
      </div>
    )
  },
  {
    slug: "training-courses",
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: "Training Courses",
    description: "Upskill with our expert-led courses and certification programs.",
    details: (
      <div className="space-y-4">
        <p>
          Our training programs are meticulously designed to bridge the gap between academic knowledge and industry demands. We offer a diverse catalog of courses in high-demand fields such as Full-Stack Development (MERN/MEAN stacks), Data Science with Python, AI & Machine Learning, and Cybersecurity. Each curriculum is developed and taught by industry veterans with years of hands-on experience.
        </p>
        <p>
          Our learning methodology emphasizes practical, project-based learning to ensure you gain real-world skills. We also offer flexible learning options, including instructor-led live classes, self-paced video courses, and customized corporate training solutions tailored to the specific needs of your organization. Upon completion, you will receive a recognized certification to validate your new skills.
        </p>
      </div>
    )
  },
  {
    slug: "trading-support",
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: "Trading Support",
    description: "Comprehensive support and insights for your trading activities.",
    details: (
      <div className="space-y-4">
        <p>
          Navigate the complexities of the financial markets with our expert trading support services. We provide traders with real-time data feeds, in-depth market analysis, and actionable trading strategies across equities, commodities, and forex markets. Our goal is to equip you with the insights needed to make timely and informed decisions.
        </p>
        <p>
          Our support includes access to advanced charting tools, technical indicators, and algorithmic trading signals. We also conduct regular webinars and one-on-one coaching sessions to help you understand market dynamics, manage risk effectively, and develop a disciplined trading mindset. Whether you are a novice trader or a seasoned professional, our resources are designed to help you maximize your returns.
        </p>
      </div>
    )
  },
  {
    slug: "placement-internship",
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: "Placement/Internship",
    description: "Launch your career with our placement and internship opportunities.",
    details: (
      <div className="space-y-4">
        <p>
          Kickstart your professional journey with our comprehensive placement and internship assistance. We have established strong partnerships with a wide network of leading companies in the technology and finance sectors, providing you with exclusive access to job and internship openings that you won't find elsewhere.
        </p>
        <p>
          Our career services go beyond just connecting you with opportunities. We provide personalized support, including professional resume building, mock interviews with constructive feedback, and career counseling to help you identify your strengths and career goals. We are committed to helping you not only secure a position but also to thrive in it, ensuring a successful transition from student to professional.
        </p>
      </div>
    )
  },
];
