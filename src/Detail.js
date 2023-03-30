import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// div에 ` `를 사용하면 css를 적용할 수 있음
// css가 적용된 div를 Box라는 이름으로 사용할 수 있음
// props를 사용하면 css를 조건부로 적용할 수 있음
// 백틱 사이에 ${}를 사용하면 js를 적용할 수 있음

// 장점1. CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일을 넣을 수 있습니다.
// 장점2. 여기 적은 스타일이 다른 JS 파일로 오염되지 않습니다. 원래 그냥 CSS파일은 오염됩니다.
// 장점3. 페이지 로딩시간 단축됩니다.

// 컴포넌트의 life cycle hook
// 컴포넌트가 mount될 때, update될 때, unmount될 때 실행되는 함수
// useEffect를 사용하면 컴포넌트가 mount될 때, update될 때, unmount될 때 실행되는 함수를 만들 수 있음
// 컴포넌트의 핵심 기능은 html 렌더링이라 그거 외의 쓸데없는 기능들은 useEffect 안에 적으라는 소리입니다.
// 오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거 이런건 useEffect 안에 많이 적습니다.

let Box = styled.div`
  padding: 20px;
  color: grey;
`;
let Btn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams(); // useParams를 사용하면 url의 파라미터를 가져올 수 있음
  let target = props.shoes.find((shoe) => Number(shoe.id) === Number(id));

  useEffect(() => {
    setTimeout(() => {
      alert("안녕하세요");
    }, 2000);
  });

  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{target.title}</h4>
          <p>{target.content}</p>
          <p>{target.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}>
            버튼
          </button>
        </div>
      </div>
      <Box>
        <Btn bg="yellow">Yellow Button</Btn>
        <Btn bg="blue">Blue Button</Btn>
      </Box>
    </div>
  );
}

export { Detail };
