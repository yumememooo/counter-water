import "./styles.css";
import Counter from "./Counter";
import reset from 'react-style-reset';
import { injectGlobal } from '@emotion/css';
injectGlobal(reset, {
});
export default function App() {
  return (
    <div className="App">
      My Counter 
      <Counter />
    </div>
  );
}
