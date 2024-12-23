import React, {useContext} from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import Card7 from "../components/Card7";

import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          My projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
         
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">

            
            <Card6 title="Project 1" description="Business Intelligence System" />


            <Card7 title="Project 1" description="AutoGrader System" />

                
            <Card1 title="Project 1" description="Diabetes Disease prediction" />
        

            <Card2 title="Project 1" description="Spotify popular songs" />
     
        
            <Card3 title="Project 1" description="Sea World Data Analysis" />
        

            <Card4 title="Project 1" description="Tableau case studies" />
      
       
            <Card5 title="Project 1" description="U.S. Awards data analysis" />




  
        
        </div>
        
        <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;



// import React, { useContext } from "react";
// import { motion } from "framer-motion";
// import Card1 from "../components/Card1";
// import Card2 from "../components/Card2";
// import Card3 from "../components/Card3";
// import Card4 from "../components/Card4";
// import Card5 from "../components/Card5";

// import { ThemeContext } from "../themeProvider";

// const Projects = () => {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
//   };

//   return (
//     <div
//       id="projects"
//       className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
//     >
//       <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-12">
//         <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
//           My projects
//         </h2>
//         <h4 className="mt-16 text-3xl font-semibold text-blue-600"></h4>
//         <div className="mt-8 flex justify-between items-stretch flex-wrap">
//           {[
//             { component: <Card1 title="Project 1" description="Diabetes Disease prediction" />, link: "/Project1" },
//             { component: <Card2 title="Project 2" description="Spotify popular songs" />, link: "/Project2" },
//             { component: <Card3 title="Project 3" description="Sea World Data Analysis" />, link: "/Project3" },
//             { component: <Card4 title="Project 4" description="Tableau case studies" />, link: "/Project4" },
//             { component: <Card5 title="Project 5" description="U.S. Awards data analysis" />, link: "/Project5" },
//           ].map(({ component, link }, index) => (
//             <motion.a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }} // Animates only once when in view
//             >
//               {component}
//             </motion.a>
//           ))}
//         </div>
        
//         <a
//           href="hello"
//           className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
//         >
//           Show More
//           <svg
//             className="ml-2 -mr-1 w-4 h-4"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Projects;
