import { useParams } from "react-router-dom";
import styled from "styled-components";

// div에 ` `를 사용하면 css를 적용할 수 있음
// css가 적용된 div를 Box라는 이름으로 사용할 수 있음
// props를 사용하면 css를 조건부로 적용할 수 있음
// 백틱 사이에 ${}를 사용하면 js를 적용할 수 있음

// 장점1. CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일을 넣을 수 있습니다.
// 장점2. 여기 적은 스타일이 다른 JS 파일로 오염되지 않습니다. 원래 그냥 CSS파일은 오염됩니다.
// 장점3. 페이지 로딩시간 단축됩니다.

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
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id === id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={찾은상품.image} width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
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
