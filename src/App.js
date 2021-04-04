import "./styles.css";
import Counter from "./Counter";
import reset from 'react-style-reset';
import { injectGlobal } from '@emotion/css';
injectGlobal(reset, {
});

//const Hello: () => JSX.Element
//rafc - ReactArrowFunctionComponent
//const Hello = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }
//如果不寫retrun則{}要改成（）


const Hello = () =>
(
  <div>
    hello
  </div>
);


export default function App() {
  return (
    <div className="App">
      My Counter
      <Hello />
    </div>
  );
}
