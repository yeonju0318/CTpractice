import { useState } from "react";
import "./App.css";

function App() {
  //변경되어야 하는 값은(UI로 바꾸기위해)State로 선언해줘야함
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const onIdChangeHandler = (event) => {
    setID(event.target.value);
  }; //id 필드가 변경될 경우
  const onPwChangeHandler = (event) => {
    setPassword(event.target.value);
  }; //pw 필드가 변경될 경우

  function onClickHandler() {
    alert(
      `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${password}입니다.`
    );
    setID("");
    setPassword("");
  }

  return (
    <div>
      <div>
        아이디 :
        <input type="text" value={id} onChange={onIdChangeHandler} />
      </div>
      <div>
        비밀번호 :
        <input type="password" value={password} onChange={onPwChangeHandler} />
      </div>
      <button onClick={onClickHandler}>로그인</button>
    </div>
  );
}

export default App;
