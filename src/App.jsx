import logo from "./logo.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.scss";
import { portfolioData } from "./components/portfolio";
import About from "./components/About";
import {primaryData} from "./components/resPrimary"
import Experience from "./components/Experience";

function App() {
  // const [data] = useState(portfolioData);
  // const [prim] = useState(primaryData)
  let data = portfolioData
  let prim=primaryData

  // useEffect(() => {
  //   setData(portfolioData);
  // }, [portfolioData,data]);

  // console.log(data, "data");
  return (
    <div>
      <Header sharedData={data} />
      <About primData={prim} sharedData={data}/>
      <Skills
          sharedSkills={data}
          resumeBasicInfo={prim}
        />
      <Experience
                resumeExperience={prim?.experience}
                resumeBasicInfo={prim?.basic_info}
                />
      <Footer sharedBasicInfo={data.basic_info} />
    </div>
  );
}

export default App;
