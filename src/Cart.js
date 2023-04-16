import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, addCart, removeCart } from "./store"; // store에서 action을 가져온다.

function Cart() {
  let user = useSelector((state) => state.user);
  let stock = useSelector((state) => state.stock);
  let cart = useSelector((state) => state.cart);
  // useSelector를 사용하면 store의 state를 가져올 수 있다.

  let dispatch = useDispatch();
  // useDispatch를 사용하면 store의 action을 dispatch할 수 있다.

  return (
    <div>
      <h6>
        {user.age}세 {user.name}의 장바구니
      </h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCart(item)); // dispatch로 action을 실행한다.
                    }}>
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export { Cart };
