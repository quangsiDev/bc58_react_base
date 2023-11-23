import logo from "./logo.svg";
import "./App.css";
import FunctionComponent from "./DemoComponent/FunctionComponent";
import ClassComponent from "./DemoComponent/ClassComponent";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import DemoState from "./DemoState/DemoState";
import DataBinding from "./DataBinding/DataBinding";
import Ex_Car from "./Ex_Car/Ex_Car";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Phone from "./Ex_Phone/Ex_Phone";
import Ex_Shoe from "./Ex_Shoe/Ex_Shoe";
import DemoRedux from "./DemoRedux/DemoRedux";
import Ex_Shoe_Redux from "./Ex_Shoe_Redux/Ex_Shoe_Redux";

function App() {
  return (
    <div className="App">
      {/* ---- lý thuyết */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <DataBinding /> */}
      {/* <DemoState /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoRedux /> */}

      {/* --- bài tập --- */}
      {/* <Ex_Layout /> */}
      {/* <Ex_Car /> */}
      {/* <Ex_Phone /> */}
      {/* <Ex_Shoe /> */}
      {<Ex_Shoe_Redux />}
    </div>
  );
}

export default App;
