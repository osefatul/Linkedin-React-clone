import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/*Header */}
      <Header />
      {/*App Body*/}
      <div className="app_body">
        <Sidebar />
      </div>
      {/*sidebar*/}
      {/*feed*/}
      {/*Widgets*/}
    </div>
  );
}

export default App;
