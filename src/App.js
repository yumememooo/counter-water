import "./styles.css";
import Counter from "./Counter";




export default function App() {
  return (
    <div className="App">
      My Water & Drink Counter
      {[...Array(7)].map((item, index) => <div> {index + 1} <Counter /> </div>)}
    </div>
  );
}
