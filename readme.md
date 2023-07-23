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

<br><hr><br>

# 2. 컴포넌트(Component)

src/Compo01.jsx 파일 작성

```javascript
//const 컴포넌트이름 = () => { }
const Compo01 = () => {
    //리턴되는 내용은 하나로 묶어서 처리
    return(
        <div>
            <h2>첫 번째 컴포넌트</h2>
        </div>
    )
}
//export default 컴포넌트이름
export default Compo01;
```

<br>

src/Compo02.jsx 파일 작성

```javascript
//rafce 단축 명령
import React from 'react'

const Compo02 = () => {
  return (
    <div>
        <h2>두 번째 컴포넌트</h2>
    </div>
  )
}

export default Compo02
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
//import 컴포넌트별칭 from '경로및/컴포넌트이름'
import CompA from './Compo01'
import CompB from './Compo02'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
      <CompB />
    </div>
  );
}

export default App
```

<br><hr><br>

## 2-1. 사용자 정의 컴포넌트(User Define Component) = component

src/components/Comp01.jsx 파일 작성

```javascript
import React from 'react';

const Comp01 = () => {
    const style={
        color:'red',
        background:'#666',
        fontSize:'30px'
    }
    const name="김기태";
    const nickname="리액트신";
    const nick=""; 
    return (
        <div>
            <h1 style={style}>세 번째 스타일 적용하기</h1>
            <h2>나의 이름은 {name} 입니다.</h2>
            <p>{name === '김기태' ? <span>김기태</span> : <span>김기태가 아닙니다.</span>}</p>
            {nickname && <h2>김기태의 별명은 {nickname}</h2>}
            {nick || <h2>별명이 없습니다.</h2>}
        </div>
    );
}

export default Comp01
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
import CompA from './components/Comp01'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
    </div>
  );
}

export default App
```



## 2-2. 속성(Properties) = props

src/components/Student.jsx 파일 작성

```javascript
import React from 'react'

const Student = (props) => {
    return (
        <div>
            <h2>학번:{props.stu.no}</h2>
            <h2>이름:{props.stu.name}</h2>
            <h2>학과:{props.stu.dept}</h2>
        </div>
    )
}

export default Student
```

<br>

src/components/Comp02.jsx 파일 작성

```javascript
import React from 'react'
import Student from './Student'

const Comp02 = () => {
    const student1 = {
        no: '1', name:'홍길동', dept:'컴정과'
    }
    const student2 = {
        no: '2', name:'심청이', dept:'전자과'
    }
    const student3 = {
        no: '3', name:'김기태', dept:'통신과'
    }
    return (
        <div>
            <Student stu={student1}/>
            <hr/>
            <Student stu={student2}/>
            <hr/>
            <Student stu={student3}/>
        </div>
    )
}

export default Comp02
```

<br>

src/components/Comp03.jsx 파일 작성

```javascript
import React from 'react'
import Student from './Student'

const Comp03 = () => {
    const students=[
        {no: '1', name:'홍길동', dept:'컴정과'},
        {no: '2', name:'심청이', dept:'전자과'},
        {no: '3', name:'김기태', dept:'통신과'}
    ]
    return (
        <div>
            <h1>배열 출력</h1>
            {students.map(s=>
                <Student stu={s} />
            )}
        </div>
    )
}

export default Comp03
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
import CompA from './components/Comp02'
import CompB from './components/Comp03'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
      <CompB />
    </div>
  );
}
```

<br>

src/components/Product.jsx 파일 작성

```javascript
import React from 'react'

const Product = (props) => {
  return (
        <tr>
            <td>{props.pro.no}</td>
            <td>{props.pro.name}</td>
            <td>{props.pro.price}</td>
        </tr>
  )
}

export default Product
```

<br>

src/components/Comp04.jsx 파일 작성

```javascript
import React from 'react'
import Product from './Product'

const Comp04 = () => {
    const products=[
        {no: '1', name:'새우깡', price:500},
        {no: '2', name:'꿀꽈배기', price:800},
        {no: '3', name:'문어깡', price:700}
    ]
  return (
    <div>
        <h1>상품 목록</h1>
        <table>
          <thead>
            <tr>
              <th>번호</th><th>상품명</th><th>가격</th>
            </tr>
          </thead>
          <tbody>
              {products.map(s=>
                  <Product key={s.no} pro={s} />
              )}
          </tbody>
        </table>
    </div>
  )
}

export default Comp04
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
import CompA from './components/Comp04'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
    </div>
  );
}
```


<br><hr><br>


## 2-3. 상태(State) = state

<br>

src/components/Comp05.jsx 파일 작성

```javascript
import React, { useState } from 'react'

const Comp05 = () => {
  //let count = 0;
  const [count, setCount] = useState(100);
  const onIncrease = () => {
    setCount(count+1);
  }
  const onDecrease = () => {
    setCount(count-1);
  }
  return (
    <>
        <h1>state 변수란?</h1>
        <h2>카운트 : {count}</h2>
        <div>
            <button onClick={onDecrease}>감소</button>
            <button onClick={onIncrease}>증가</button>
        </div>
    </>
  )
}

export default Comp05
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
import CompA from './components/Comp05'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
    </div>
  );
}
```

<br><hr><br>

# 3. 이벤트(Event)

## 3-1. onClick 이벤트

src/components/Comp06.jsx 파일 작성

```javascript
import React, { useState } from 'react'

const Comp06 = () => {
  const [color, setColor] = useState('#999');
  return (
    <div>
        <h1 style={{background:color, color:'#fff'}}>안녕하세요!</h1>
        <div>
            <button onClick={()=>setColor('blue')}>파랑</button>
            <button onClick={()=>setColor('red')}>빨강</button>
            <button onClick={()=>setColor('green')}>초록</button>
        </div>
    </div>
  )
}

export default Comp06
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
import CompA from './components/Comp06'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
    </div>
  );
}
```

## 3-2. onChange 이벤트

src/components/Comp07.jsx 파일 작성

```javascript
import React, { useState, useRef } from 'react'
//이벤트 - onClick(), onChange(), onKeyPress()
const Comp07 = () => {
    const [name, setName] = useState("김기태");
    const [address, setAddress] = useState("서울시 금천구 가산동");
    const [sel, setSel] = useState("서울");
    const ref_name = useRef(null);

    const onClick = ()=> {
        alert('이름:' + name + "\n주소:" + address);
        setName('');
        setAddress('');
        ref_name.current.focus();
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }
  return (
    <div>
         <input placeholder='이름을 입력하세요!'
                value={name}
                ref={ref_name}
                onChange={(e)=>setName(e.target.value)} />
            <hr/>
            <input placeholder='주소를 입력하세요!' 
                value={address}
                onKeyPress={onKeyPress}
                onChange={(e)=>setAddress(e.target.value)} />
            <hr/>

            <select onChange={(e)=>setSel(e.target.value)}>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="강원">강원</option>
            </select>
            
            <hr />

            <h2>입력된 정보</h2>
            <ul>
                <li><span>{name}</span> </li>
                <li><span>{address}</span></li>
                <li><span>{sel}</span></li>
            </ul>

            <button onClick={ onClick }>확인</button>
    </div>
  )
}

export default Comp07
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
import CompA from './components/Comp07'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
    </div>
  );
}
```

<br><hr><br>

## 3-3. onKeyPress 이벤트

src/components/Products.jsx 파일 작성

```javascript
import React, { useState } from 'react'
import Comp08 from './Comp08'

const Products = () => {
    const [products, setProducts] = useState([
        {code: 1, name:'오브제 냉장고', price:350},
        {code: 2, name:'삼성세탁기', price:250},
        {code: 3, name:'오브제 스타일러', price:150}
    ]);

    const onInsert = (product) => {
        setProducts(products.concat(product));
    }
    
    const onDelete = (code)=> {
        if(window.confirm(code + '번 상품을 삭제하실래요?')) {
            setProducts(products.filter(p=>p.code !== code))
        }
    }

    return (
        <div>
            <Comp08 onInsert={onInsert}/>
            <h2>상품목록</h2>
            <table>
                <thead>
                    <tr>
                        <td>상품코드</td>
                        <td>상품이름</td>
                        <td>상품가격</td>
                        <td>상품삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, index)=>
                        <tr key={index}>
                            <td>{p.code}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td><button onClick={()=>onDelete(p.code)}>삭제</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Products
```

<br>

src/components/Comp08.jsx 파일 작성

```javascript
import React, { useRef, useState } from 'react'
import Products from './Products'

const Comp08 = ({onInsert}) => {
    const [form, setForm] = useState({
        code: 4,
        name: '냉장고',
        price: 250
    });

    const {code, name, price} = form;
    const ref_name = useRef(null);

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(window.confirm('저장하실래요?')){
            setForm({
                code: code+1,
                name: '',
                price: ''
            });
            ref_name.current.focus();
            onInsert(form);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input name='code' placeholder='상품코드'
                value={code} onChange={onChangeForm}/>
            <hr/>
            <input name='name' ref={ref_name} placeholder='상품이름'
                value={name} onChange={onChangeForm}/>
            <hr/>
            <input name='price' placeholder='상품가격'
                value={price} onChange={onChangeForm}/>
            <hr/>
            <button>입력</button>
            <hr />
            <fieldset>
                <legend>입력 정보</legend>
                <table>
                    <thead>
                        <tr>
                            <th>상품코드</th>
                            <th>상품이름</th>
                            <th>상품가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>{code}</span> </td>
                            <td><span>{name}</span></td>
                            <td><span>{price}</span></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
            <fieldset>
                <legend>등록된 정보</legend>
                <Products />
            </fieldset>
        </form>
    )
}

export default Comp08
```

<br>

src/App.jsx 파일 편집

```javascript
import './App.css'
import CompA from './components/Comp08'

function App() {
  return (
    <div className="App">
      <h1>리액트 시작</h1>
      <CompA />
      <hr />
    </div>
  );
}
```

<br><hr><br>


## 3-4. useRef(참조체) = ref

<br>

src/components/Products.jsx 파일 편집

```javascript
import React, { useState } from 'react'

const Products = ({pro, del}) => {
    console.log(pro);
  return (
    <div>
        <h1>상품목록</h1>
        <table>
            <thead>
                <tr>
                    <th width={100}>코드</th>
                    <th width={300}>상품명</th>
                    <th width={100}>가격</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {pro.map(p=>
                    <tr key={p.code}>
                        <td>{p.code}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td><button onClick={()=>del(p.code)}>삭제</button></td>
                    </tr>
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default Products
```

<br>

src/components/Comp08.jsx 파일 편집

```javascript
import React, { useRef, useState } from 'react'
import Products from './Products';

const Comp08 = () => {
    const ref_name = useRef(null);  //이름에 포커스
    const [products, setProducts] = useState([
        {code:1, name:'냉장고',price:300},
        {code:2, name:'세탁기',price:250},
        {code:3, name:'스타일러',price:150},
    ]);

  const onDelete = (code) => {
    if(window.confirm(`${code}번 상품을 삭제하실래요?`)){
      const newProducts = products.filter(p => p.code !== code);
      setProducts(newProducts);
    }
  }  

  const [form, setForm] = useState({
    'code':4,
    'name':'냉장고',
    'price':2500000
  });

  const onChangeForm = (e) => {
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
  }

  const {code, name, price} = form;

  const onSubmit = (e) => {
    e.preventDefault();
    if(window.confirm(`${code}:${name}:${price} 등록하실래요?`)){
        setProducts(products.concat(form));
        setForm({
            ...form,
            code: code+1,
            name:'',
            price:200
        });
        ref_name.current.focus();
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="code" 
            onChange={onChangeForm} readOnly
            type="text" placeholder="상품코드" value={code}/> {code}
        <hr />
        <input name="name" 
            onChange={onChangeForm} ref={ref_name} 
            type="text" placeholder="상품이름" value={name}/> {name}
        <hr />
        <input name="price" 
            onChange={onChangeForm}
            type="text" placeholder="상품가격" value={price}/> {price}
        <hr />
        <input type="submit" value="등록" />
        <input type="reset" value="취소" />
      </form>
      <hr />
      <Products pro={products} del={onDelete}/>
    </div>
  )
}

export default Comp08
```

<br>

src/components/Post.jsx 파일 작성

```javascript
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Post = ({history}) => {
    const params= useParams();
    const navigator = useNavigate();
    const id=params.id;
    const [post, setPost] = useState('');
    const [loading, setLoading] = useState(false);

    const callAPI = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            setPost(json);
            setLoading(false);
        });
    }

    useEffect(()=>{
        callAPI();
    }, []);

    if(loading) return <h1>로딩중...</h1>
    return (
        <div>
            <h1>게시글정보</h1>
            <h3>[{post.id}] {post.title}</h3>
            <hr/>
            <div>
                {post.body}
            </div>
            <button onClick={()=>navigator(-1)}>목록으로</button>
        </div>
    )
}

export default Post
```

<br>


# 4. 컴포넌트 라이프사이클

## 4-1. 마운트

## 4-2. 업데이트

## 4-3. 언마운트

# 5. Hooks

## 5-1. useState

## 5-2. useEffect

## 5-3. useRef





