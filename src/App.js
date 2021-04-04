import "./styles.css";
import Counter from "./Counter";
import { Hello } from './Hello'
import reset from 'react-style-reset';
import { injectGlobal } from '@emotion/css';
injectGlobal(reset, {
});




export default function App() {
  return (
    <div className="App">
      My Counter
      <Hello />
    </div>
  );
}
