import "./App.css";
import Calender from "./components/Calendar";
import Checklist from "./components/Checklist";

const App = () => {
  return (
    <div className="App Container">
      <div>
        <h1>Itinerary ✨</h1>
        <h2>Welcome! This is a personalized itinerary for your week.</h2>
        <Calender />
      </div>

      <div>
        <h1>Checklist :3</h1>
        <Checklist />
      </div>

    </div>
  )
}

export default App