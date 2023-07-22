# 1. 리액트 시작

리액트는 자바스크립트를 활용하여 사용자 인터페이스를 개발하기 위한 자바스크립트 프레임워크이다. 또한, 메타에서 개발한 오픈 소스 자바스크립트 라이브러리.

프론트엔드 개발자 사이에서 AngularJS, Vue.js와 더불어 많은 인기를 얻고 있다. GitHub Star 수와 npm 패키지 다운로드 수는 React가 가장 많다.

SPA을 전제로 하고 있으며, Dirty checking과 Virtual DOM을 활용하여 업데이트 해야하는 DOM 요소를 찾아서 해당 부분만 업데이트하기 때문에, 리렌더링이 잦은 동적인 모던 웹에서 엄청나게 빠른 퍼포먼스를 내는게 가능하다. 기본적으로 모듈형 개발이기 때문에 생산성 또한 상당히 높은 라이브러리인지라 순식간에 대세로 떠올랐다. 거기에 기본적으로 프레임워크가 아니라 라이브러리인지라 다른 프레임워크에 간편하게 붙여서 사용하는 것도 가능하며, React Hooks라는 강력한 메소드들을 지원하면서 사실상 웹 프론트엔드 개발의 표준으로 자리잡았다. 이와 더불어 타입스크립트나 Sass 같은 언어도 지원한다. 또한 Next.js 등의 등장으로 인해 SSG, SSR등을 할 수 있게 되면서 사용 범위 또한 기하급수적으로 늘어났다.

<br>

## 1-1. 리액트의 특징

리액트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 효율적으로 진행하며, 리액트에서 데이터가 변하여 웹 브라우저에서 실제 DOM을 업데이트할 때는 세 가지 절차를 밟는다.

1. 데이터를 업데이트 하면 전체 UI를 Virtual DOM에 리렌더링을 한다.
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교한다.
3. 바뀐 부분만 실제 DOM에 적용한다.

```javascript
import ReactDOM from 'react-dom';

function App ({name}){
  return (
    <h1>Hello, {name}!</h1>
  )
}

ReactDOM.render(<App name="김기태" />, document.getElementById('root'));
```

## 1-2. 작업환경 설정

### 1-2-1. Node.js와 npm
1. Node.js는 크롬 V8 자바스크립트 엔진으로서 자바스크립트 코드를 빌드하여 실행하는 것으로 반드시 설치가 필요하다.
2. npm은 Node.js 에서 필요한 여러 라이브러리나 플러그인 등을 설치하거나 삭제, 변경하는 노드 패키지 관리 모듈이므로 Node.js 설치 시에 같이 설치된다.
3. 그러므로, es6 이상의 버전을 갖는 프로젝트를 진행하기 위해서는 노드 설치를 먼저 진행해야 하며, 이를 바탕으로 자바스크립트 파일을 만들고, 여러 버전과 방법으로 만들어진 자바스크립트 파일(*.js) 등을 컴파일하여 주는 바벨(babel)과 여러 파일들을 하나의 파일로 정리하여 번들링해 주는 웹팩(webpack) 등을 활용하여 실행되게 하면 된다.

### 1-2-2. Node.js와 npm 그리고, IDE 설치
1. Node.js 공식 사이트 : https://nodejs.org/ko 에서 운영체제에 맞게 LST 버전으로 다운로드한다. (2023-07-21 기준 / node-v18.16.1-x64.exe / Windows 10)<br>
다운로드 받은 node 설치 파일을 더블클릭하여 설치한다.
2. Node가 설치되면, IDE 로 사용할 에디터인 Visual Studio code를 공식 사이트 https://code.visualstudio.com/download 방문하여 운영체제에 맞는 User Installer를 다운로드한다.
(2023-07-21 기준 / VSCodeUserSetup-x64-1.80.1.exe / Windows 10)<br>
다운로드 받은 Visual Studio Code를 더블클릭하여 설치한다.
3. 설치된 Visual Studio code 를 실행한 후 파일(File) - 폴더 열기(Open Folder)를 진행하고, 임의로 디렉토리를 만든 후 그 디렉토리를 프로젝트 디렉토리로 지정한다.
4. Visual Studio code에서 보기(View) - 터미널(Terminal) 을 실행하고, 명령어를 입력한 후 설치된 Node의 버전을 확인한다.

```command
d:\kim\react> node -v
```

<br>

### 1-2-3. yarn 설치
Node.js의 패키지 관리 도구인 npm이 있으나, 빠르고, 효율적인 실습을 위해 yarn 을 설치하도록 한다. yarn은 npm 보다 빠르고, 효율적인 캐시 시스템과 기타 부가기능을 제공하기 때문에 편리하다.

yarn 공식 사이트 : https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

yarn 설치 및 설치 버전 확인

```command
d:\kim\react> npm install --global yarn
...중략....
d:\kim\react> yarn --version
...중략....
```

<br>

### 1-2-4. Visual Studio Code 의 확장 프로그램 설치
VS Code의 좀 더 편리한 활용을 위해 아래와 같은 확장 프로그램을 설치한다.

1. ESLint : 자바스크립트 문법 및 코드 스타일을 검사해 주는 도구이다.
2. Reactjs Code Snippet : 리액트 컴포넌트 및 라이프사이클 함수를 작성할 때 단축 단어를 사용하여 간편하게 코드를 자동으로 생성해 낼 수 있는 코드 스니펫 모음이다. 검색했을 때 유사한 결과가 여러 개 나올 수 있는데 제작자가 charalampos karypidis인 것을 설치한다.
3. Prettier-Code formmetter : 코드 스타일을 자동으로 정리해 주는 도구이다.


### 1-2-5. 프로젝트 생성하기

yarn을 활용하여 새로운 프로젝트를 생성하고, 프로젝트 디렉토리로 이동하여 생성된 프로젝트를 실행해본다.

```command
d:\kim\react> yarn create react-app test01
d:\kim\react> cd test01
d:\kim\react\test01> yarn start
```

<br><hr><br>

# 2. JSX 

## 2-1. JSX 란?

src/App.js 편집

```javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
    </div>
  );
}

export default App;
```

src/App.css 편집

```javascript
.App {
  text-align: center;
  color:gold;
}
```




