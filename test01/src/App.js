import './App.css'
//import 컴포넌트별칭 from '경로및/컴포넌트이름'
import CompA from './components/Comp06'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
      <CompA />
    </div>
  );
}

export default App
