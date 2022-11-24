const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};
//SEO Related settings
const seo = {
  title: "Suresh T R | Portfolio",
  description:
    "I'm A Passionate Web Developer With Over 3 Years Of Experience.Experienced With All Stages Of The Development Cycle For Dynamic Web Projects",
  og: {
    title: "Suresh T R",
    type: "website",
    url: "http://sureshtr.ml/",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Suresh T R",
  logo_name: "Suresh T R",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#1179f7",
      },
      profileLink: "https://github.com/Sureshtr1998",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/suresh-tr-15b729147/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Front-End Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, Tailwind, VueJS, ReactJS & NodeJS",
        "⚡ Having experience in Domain & Hosting using Netlify and Heroku",
        "⚡ Creating application from scratch",
        "⚡ Having good hands-on using state container like Redux, Vuex ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#228B22",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Backend-Web Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various use cases",
        "⚡ Experience in working with Node JS, Express JS",
        "⚡ Having good hands-on with Mong DB query, Graph QL, and SQL basic queries",
        "⚡ Experience with E-commerce web app, which includes image upload, razorpay implementation and filters",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#00FF00",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "logos-express",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos-graphql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
           style: {
             backgroundColor: "transparent",
             color: "#228B22",
           },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
           style: {
             backgroundColor: "transparent",
             color: "#4169E1",
           },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#0096FF",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I've created various of Web Application for various clients which includes E-Commerce, Product Inventory, Payment System, Live Image Demo etc.",
};

const educationCards = {
 info: [
  {
  title: "SSLC",
  img_path: "hvp.png",
  name: 'HRUSHIKESH VIDYAPEETA',
  percentage: "76.95%",
  total:"600",
  scored:"481",
  description: "Qualified SSLC from Hrushikesh Vidya Peeta (Bangalore-560085) on 6th of May 2013 by the board Karnataka Secondary Education Examination Board (KSEEB)",
},
  {
  title: "PUC",
  img_path: "pes.png",
  name: 'PES PU College',
  percentage: "67.83%",
  total:"600",
  scored:"407",
  description: "Completed 2nd PU from PES PU College (Bangalore-560050) on 10th of March 2015 by the university Department Of PRE-University Education",
},
  {
  title: "Degree",
  img_path: "dayanand.png",
  name: 'Dayanad Sagar College',
  percentage: "7.55 CGPA",
  total:"5200",
  scored:"3797",
  description: "Graduated from Dayanad Sagar College (Bangalore-560078) on 14th of July 2018 which is affiliated to Bangalore University",
},
  {
  title: "Masters",
  img_path: "bits.png",
  name: 'BITS PILANI',
  percentage: "8.29 CGPA",
  total:"",
  scored:"",
  description: "Masters in Mtech from BITS Pilani University through Wipro Work Integrated Learning Program(WILP) graduated on 22nd of Nov 2022",
},
 ]
}

const  projects = {
  details:[
    {
      name: "Levi's",
      img_path: "view.png",
      title: "View Rivet",
      description:"User can be able to view the final approved products here, it includes grouping of different products, assigning it to teams, generating logos, placement of logos on top etc"
    },
    {
      name: "Levi's",
      img_path: "user.png",
      title: "User Rivet",
      description:"This application provides access for different levi's user for different application along with adding them to specific groups, Admins either can approve the request or deny it "
    },
    {
      name: "Levi's",
      img_path: "dev.png",
      title: "Dev Rivet",
      description:"A Web App where user can finalize 3D models by using different types of textures, threads and patches etc and also it includes creation of cards, status, comments and Assigned to so on"
    },
    {
      name: "Project",
      img_path: "Main.png",
      title: "SpaceX(Clone)",
      description:"A Web App where user can register and look at the rocket launches done by SpaceX, they can filter, watch videos and also can get more information about the launches (spacex-traveosoft.herokuapp.com) "
    },
    {
      name: "Jhonson and Jhonson",
      img_path: "J and J.png",
      title: "Smartfind",
      description:"Full stack app for doing OCR to fetch the product names"
    },
    {
      name: "Project",
      img_path: "ecomm.png",
      title: "E- Commerce",
      description:"Web Application where user can order a product, Add to a cart, Review the product, track the delivery items, Admin can manage the users and add new products so on. It is hosted in heroku (Wetop.herokuapp.com) "
    },
    {
      name: "Levi's",
      img_path: "BOM.png",
      title: "BOM APP",
      description:"This app is mainly used by the Vendors in order to check the amount applied to different material and which material is getting used. Which Sundry, which material there amount all these details are set in BOM app and it supplies the Vendors all these infos."
    },
    {
      name: "Project",
      img_path: "prod.png",
      title: "Product Inventory",
      description:"This App helps shop owners to manage their products, by tracking the number of items available in their shop along with that providing the graph which mentions the user interest on a particular product"
    },
    // {
    //   client: "Levi's",
    //   img_path: "project-06.png",
    //   projectName: "Dev RVT",
    //   description:"A Web App where user can finalize 3D models by using different types of textures, threads and patches etc which also includes cards, status, comments and Assigned to so on"
    // },
  ]
}
//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]




//certificate cards
const certifications = {
  certifications: [
    {
      title: "SAP Ariba Procurement",
      subtitle: "SAP Ariba",
      logo_path: "sap.png",
      certificate_link:
        "https://www.youracclaim.com/go/McmClI1H",
      alt_name: "SAP Ariba",
      color_code: "#000000",
    },
    {
      title: "MERN E commerce",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-ed5a2e5b-1eb6-4c51-af20-afa7cdb70ad3/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "C Programming",
      subtitle: "NIIT",
      logo_path: "NIIT.png",
      certificate_img: "c.png",
      alt_name: "NIIT",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-102269e7-5e67-401a-93b6-ab2d4da5dc48/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Complete Web Development Bootcamp",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-66cb598a-5f08-47ff-9a4a-42dd6dcc46b5/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Java",
      subtitle: "Aptech",
      logo_path: "Aptech.png",
      certificate_img: "java.png",
      alt_name: "Aptech",
      color_code: "#000000",
    },
    {
      title: "SVG Animation",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-cb39e08d-5169-43f9-b3a7-8f64211db74d/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Front End Development(React JS)",
      subtitle: "Wipro",
      logo_path: "wipro.png",
      certificate_img: "FED.png",
      alt_name: "Wipro",
      color_code: "#000000",
    },
    {
      title: "Vue JS",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-d42a0a59-3469-4f34-8feb-b10598f8b0e8/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "C++ Programming",
      subtitle: "NIIT",
      logo_path: "NIIT.png",
      certificate_img: "cpp.png",
      alt_name: "NIIT",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "Feel free to ping me in linkedin or drop a message in mail. I am happy to build a beautiful and effective website for you.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Banashankari, Bangalore-560085",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9632972404",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Sureshtr1998",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#1179f7", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suresh-tr-15b729147/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sureshtr22i0@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  certifications,
  educationCards,
  projects
};
