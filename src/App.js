// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Contact from "./views/Contact";
// import Navbar from "./components/Navbar";
// import About from "./views/About";
// import Home from './views/Home'
// import Services from "./views/Services";
// import Projects from "./views/Projects";
// import LoadingScreen from "./components/LoadingScreen";
// import { ThemeProvider } from "./themeProvider";

// function App() {
//   const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000)
//   }, [])

//   return (
//     <ThemeProvider>
//       <>

//         {!loading ? (
//           <div >
//             <Navbar />
//             <Home />
//             <About />
//             <Services />
//             <Projects />
//             <Contact />
//           </div>

//         ) : (
//           <LoadingScreen />
//         )}
//       </>
//     </ThemeProvider>

//   );
// }

// export default App;




import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home';
import Services from "./views/Services";
import Projects from "./views/Projects";
import Project1 from './views/Project1'; // Import the Project1 view
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <Router>
            <Navbar />

            {/* Define the routes */}
            <Routes>
              {/* Static pages like Home, About, Projects etc., will be wrapped in a Route */}
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <About />
                    {/* <Services /> */}
                    <Projects />
                    <Contact />
                  </>
                }
              />

              {/* Project-specific route */}
              <Route path="/project1" element={<Project1 />} />
            </Routes>
          </Router>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
