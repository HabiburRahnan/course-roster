import "./App.css";
import Home from "./components/Home/Home";

function App() {
  // toast.error("This didn't work.")
  return (
    <div className=" ">
      <h1 className="text-4xl text-center font-bold mt-4">Course Registration</h1>
      <div>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
