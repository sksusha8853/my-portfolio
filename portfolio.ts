import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  AchievementsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Saurabh Kumar Singh",
  title: "Hey Everyone, I'm Saurabh",
  description:
    "I am a passionate Competitive Programmer and Full Stack Developer. I love solving tricky problems and creating cool stuff using the MERN stack. I've done well in competitions, like ranking among the top 100 programmers in India on Codeforces and placing 10th in the ICPC Kanpur Regionals 2021. I'm skilled in various programming languages and technologies like C++, React.js, Node.js, Java, and Spring Boot. I'm always eager to learn new things and improve my skills. Outside of coding, I enjoy playing badminton, cooking tasty food, and listening to music. These activities add balance to my life and keep me happy and motivated.",
  resumeLink: "https://drive.google.com/file/d/1HfccbsQ7sZAfE-h3rcV1NrZdsHyXkTLr/view?usp=sharing",
};

export const openSource = {
  githubUserName: "sksusha8853",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:sksusha8853@gmail.com",
  linkedin: "https://www.linkedin.com/in/sksusha/",
  github: "https://github.com/sksusha8853",
  instagram: "https://www.instagram.com/sksusha8853",
  // twitter:"https://www.instagram.com/sksusha8853",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY COMPETITIVE PROGRAMMER and FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Creating efficient Java-based Search APIs using Protocol Buffers, Spanner, and Guice."),
        emoji("⚡ Developing innovative genome sequence clustering methods with Apache Spark and Python."),
        emoji("⚡ Expertise in developing MERN stack apps."),
      ],
      softwareSkills: [
        {
          skillName: "Cpp",
          iconifyTag: "vscode-icons:file-type-cpp",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        
        {
          skillName: "Springboot",
          iconifyTag: "logos:spring",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "SQL",
          iconifyTag: "vscode-icons:file-type-sql",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Indian Institute Of Technology, Indore",
    subHeader: "Bachelor of Technology in Computer Science and Engineering",
    duration: "November 2020 - May 2024",
    desc: "",
    grade: "CPI 8.81",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Sunbeam School Lahartara",
    subHeader: "Senior Seconday School",
    duration: "April 2018 - April 2020",
    desc: "Physics, Math, Chemistry, Computer Science & English",
    grade: "Percentage 97.2",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Jawahar Navodaya Vidyalaya, Mirzapur",
    subHeader: "Secondary School",
    duration: "July 2013 - April 2018",
    desc: "",
    grade: "Percentace 91",
    descBullets: [], // Array of Strings
  },

];

export const achievementInfo: AchievementsType[] = [
  {
    achievementTitle: "AIR 10 in ICPC'21 Regional",
    achievementImage: "/img/icons/common/icpc.png",
    duration: "",
    desc: "Team Name: lets_code_it",
  },
  {
    achievementTitle: "Candidate Master(2080) at Codeforces",
    achievementImage: "/img/icons/common/codeforces.png",
    duration: "",
    desc: "Handle: sksusha8853",
  },
  {
    achievementTitle: "6⭐ on CodeChef",
    achievementImage: "/img/icons/common/codechef.png",
    duration: "",
    desc: "Handle: sksusha8853",
  },
  {
    achievementTitle: "AIR 2 in Codeforces Round #800(Div2)",
    achievementImage: "/img/icons/common/codeforces.png",
    duration: "",
    desc: "Global rank 32 among 24000+ Participants.",
  },
  {
    achievementTitle: "1st rank in CodeDrift",
    achievementImage: "/img/icons/common/interviewbit.png",
    duration: "",
    desc: "1st rank in CodeDrift November 1.0 by InterviewBit",
  },
  {
    achievementTitle: "Global Rank 125 in Google KickStart",
    achievementImage: "/img/icons/common/google.png",
    duration: "",
    desc: "Among 10322 participants in Round E'22 with (100/100 points)",
  },
  {
    achievementTitle: "Best Python Project Award",
    achievementImage: "/img/icons/common/hackistica.png",
    duration: "",
    desc: "For project \"Psuedo Code in Latex\" in Hackistica'23 ",
  },
  {
    achievementTitle: "1st Rank on Code O' Geeks 2.0",
    achievementImage: "/img/icons/common/codechef.png",
    duration: "",
    desc: "Organized on CodeChef",
  },
  {
    achievementTitle: "1st rank in GFG Job-a-thon 10",
    achievementImage: "/img/icons/common/gfg.png",
    duration: "",
    desc: "Among 5746 active participants.",
  },
  {
    achievementTitle: "1st Rank in Coding Marathon",
    achievementImage: "/img/icons/common/prepbytes.png",
    duration: "",
    desc: "3 times in Nov'21, June'22 and July'22 on PrepBytes.",
  },
  {
    achievementTitle: "100 Percentile in Physics",
    achievementImage: "/img/icons/common/jeemain.png",
    duration: "",
    desc: "In Jee Main 2020.",
  },
  {
    achievementTitle: "100 out of 100 in Physics",
    achievementImage: "/img/icons/common/jeemain.png",
    duration: "",
    desc: "In 12th CBSE Board Exam 2020.",
  },
  // {
  //   achievementTitle: "",
  //   achievementImage: "/img/icons/common/",
  //   duration: "",
  //   desc: "",
  // },

];

export const experience: ExperienceType[] = [
  // {
  //   role: "Software Development Engineer Intern",
  //   company: "Walmart Global Tech.",
  //   companyLogo: "/img/icons/common/walmart.jpeg",
  //   date: "May 2023 - August 2023",
  //   desc: "During my internship at Walmart Global Tech, I collaborated on various projects that honed my skills in backend and frontend development. I played a pivotal role in developing APIs and middleware using SpringBoot for seamless integration, as well as contributing to UI enhancements and API integration with React.js. Additionally, I led the development of API adapters to streamline access to critical Walmart APIs across teams, and spearheaded the migration of multiple apps to JFrog, optimizing repository management and software delivery.",
  // },
  {
    role: "Software Engineering Intern",
    company: "Google",
    companyLogo: "/img/icons/common/google.png",
    date: "May 2023 - August 2023",
    desc: "During my internship at Google, I worked in the Corporate Engineering team where my project was to create a highly optimized Search API with over 140 million records with type-ahead search functionality. I completed my project within the designated time limit, and the code has been deployed into production.",
  },
  {
    role: "Problem Setter and Technical Content Reviewer",
    company: "Scaler",
    companyLogo: "/img/icons/common/scaler.png",
    date: "Sept 2023 - Current",
    desc: "During my internship, I conducted quality checks for over 100 articles, authored video scripts for more than 50 lecture animations, and developed quizzes for 50+ lectures.",
  },
  {
    role: "Problem Setter Intern",
    company: "Coding Ninjas",
    companyLogo: "/img/icons/common/codingninjas.png",
    date: "June 2023 - Sept 2023",
    desc: "During my internship, I prepared more than 30 Data Structures and Algorithmic problems on Coding Ninjas' platform, CodeStudio.",
  },
  {
    role: "Intern",
    company: "GeeksforGeeks",
    companyLogo: "/img/icons/common/gfg.png",
    date: "February 2024 - Current",
    desc: "At GFG, I carefully review articles to make sure they're good. I've improved 8 articles already, and I'm still working on making more better.",
  },
  {
    role: "Research Consultant",
    company: "WorldQuant Brain",
    companyLogo: "/img/icons/common/wq.png",
    date: "December 2023 - Current",
    desc: "In my role at WorldQuant, I am tasked with crafting unique alpha strategies that leverage proprietary data and advanced quantitative techniques. These strategies are meticulously developed to capitalize on market inefficiencies and generate superior returns for our clients. Through extensive research, analysis, and innovative thinking, I strive to uncover hidden patterns and insights that drive alpha creation in the dynamic landscape of global financial markets.",
  },
  {
    role: "Member",
    company: "The Programming Club, IIT Indore",
    companyLogo: "/img/icons/common/tpc.png",
    date: "October 2021 - April 2023",
    desc: "As a member of the club, I contribute by creating competitive programming problems for contests organized by the club. I have organized contests such as 'Fool U' and 'Surprize Language', and served as a problem setter for contests including 'Codeforces Contest #841 Div 2', 'Fool U', 'Surprize Language', and 'Codegolf'. Additionally, I actively participate in internal decision-making processes within the club.",
  },
  {
    role: "REMO REVIEWER",
    company: "Remotasks",
    companyLogo: "/img/icons/common/remotask.png",
    date: "September 2023 - October 2023",
    desc: "At Remotasks, my primary responsibility involved thoroughly examining the LLM responses, identifying any errors present, and evaluating the overall quality and accuracy of each response through grading.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Trendflix",
    desc: "TrendFlix is a cutting-edge movie streaming platform that redefines the traditional streaming experience by seamlessly blending entertainment and fashion. Much like popular services such as Amazon Prime, TrendFlix offers a vast library of movies and TV shows for your viewing pleasure. However, what sets TrendFlix apart is its unique and innovative feature: the ability to display shopping links for products similar to the wearable items worn by your favorite movie stars.",
    github: "https://github.com/sksusha8853/Trendflix",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Research Paper",
    desc: "Title: An Alignment-Free Scalable Feature Extraction Method for Genomic Data Clustering. Desc: Introduced a groundbreaking genome sequence clustering approach with a Scalable feature extraction method, effectively managing large-scale Genomic data and mitigating scalability issues in alignment-free approaches. The clustering result of this 13D approach is better than the available 17D and 4D approaches on various datasets.",
    github: "https://github.com/Saurabh915/BucketDrop",
  },
  {
    name: "HostelHub",
    desc: "I developed a web application tailored for the hostel community, enabling efficient management of hostel activities, student records, and staff information. The application assigns different user roles with specific privileges to ensure smooth administration. It serves as a platform for overseeing and addressing students' complaints and suggestions effectively.",
    github: "https://github.com/sksusha8853/HostelHub",
  },
  {
    name: "3D-Simulation-Of-Spider",
    desc: "This project presents a 3-D simulation of a spider navigating through a room and across a web. Featuring realistic leg movements, the simulation allows for various interactions including forward movement at different speeds, rotation, zooming, and the application of light and dark effects. The simulation aims to be educational, providing a detailed view of spider anatomy through an interactive medium.",
    github: "https://github.com/sksusha8853/3D-Simulation-Of-Spider",
  },
  
];

export const feedbacks: FeedbackType[] = [

];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Saurabh Kumar Singh",
  description: greetings.description,
  author: "Saurabh Kumar Singh",
  image: "https://avatars.githubusercontent.com/u/80574561?s=400&u=12a61358eb07ce4da94542e2e99794b4c6c0828d&v=4",
  url: "https://saurabh8853-portfolio.vercel.app/",
  keywords: [
    "Saurabh",
    "Saurabh Kumar Singh",
    "@sksusha8853",
    "skusha8853",
    "sksusha.8853",
    "Saurabh IIT Indore",
    "Portfolio",
    "Saurabh's Portfolio ",
    "Saurabh Kumar Singh Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
};
