import "./App.css";
import Navbar from "./components/Navbar";
import Camera from "./components/Camera";
import Form from "./components/Form";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Navbar />
      <Camera />
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
