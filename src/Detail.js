import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store";
import styled from "styled-components";
import axios from "axios";

// div에 ` `를 사용하면 css를 적용할 수 있음
// css가 적용된 div를 Box라는 이름으로 사용할 수 있음
// props를 사용하면 css를 조건부로 적용할 수 있음
// 백틱 사이에 ${}를 사용하면 js를 적용할 수 있음

// 장점1. CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일을 넣을 수 있습니다.
// 장점2. 여기 적은 스타일이 다른 JS 파일로 오염되지 않습니다. 원래 그냥 CSS파일은 오염됩니다.
// 장점3. 페이지 로딩시간 단축됩니다.

//서버에 GET, POST 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능을 AJAX

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
    // 컴포넌트의 life cycle hook
    // useEffect를 사용하면 컴포넌트가 mount될 때, update될 때, unmount될 때 실행되는 함수를 만들 수 있음
    // 컴포넌트의 핵심 기능은 html 렌더링이라 그거 외의 쓸데없는 기능들은 useEffect 안에 적으라는 소리입니다.
    // 오래 걸리는 반복연산, 서버에서 데이터 가져오는 작업, 타이머 이런 건 useEffect 안에 많이 적습니다.
    // useEffect()의 둘째 파라미터로 [ ] 를 넣을 수 있는데 거기에 변수나 state같은 것들을 넣을 수 있습니다.
    // 그렇게 하면 [ ]에 있는 변수나 state 가 변할 때만 useEffect 안의 코드를 실행해줍니다.
    // 그래서 위의 코드는 count라는 변수가 변할 때만 useEffect 안의 코드가 실행되겠군요.
    // 참고) [ ] 안에 state 여러개 넣을 수 있음
    // useEffect가 동작하기 전에 특정 코드를 실행하고 싶으면
    // return () => { 실행할 코드 } 를 넣으면 됩니다.
    // 이렇게 하면 useEffect가 실행되기 전에 return 안의 코드가 실행됩니다.
    // useEffect(()=>{ 실행할코드 }) 컴포넌트가 재렌더링 될 때마다 실행
    // useEffect(()=>{ 실행할코드 }, []) 컴포넌트가 mount될 때 한 번만 실행
    // useEffect(()=>{ 실행할코드 }, [변수]) 변수가 변할 때마다 실행
    // useEffect(()=>{ return ()=>{실행할코드}) useEffect가 실행되기 전에 실행
    // useEffect(()=>{ return ()=>{실행할코드}, []) 컴포넌트가 unmount될 때 실행
    // setTimeout(() => {
    //   alert("안녕하세요");
    // }, 2000);
  });

  let [count, setCount] = useState(0);
  // useState는 state를 만드는 함수
  // useState의 파라미터로 state의 초기값을 넣어줌
  // useState의 리턴값은 배열이고 배열의 첫번째 요소는 state, 두번째 요소는 state를 변경하는 함수
  // state를 변경하는 함수는 state를 변경할 때마다 컴포넌트가 다시 렌더링됨

  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{target.title}</h4>
          <p>{target.content}</p>
          <p>{target.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: target.id, name: target.title, count: 1 }));
            }}>
            장바구니
          </button>

          <button
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((결과) => {
                  console.log(결과.data);
                })
                .catch(() => {
                  console.log("실패함");
                });
            }}>
            axios
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
