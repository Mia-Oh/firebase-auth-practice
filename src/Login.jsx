import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase-config";


const Login = () => {

  const [userData, setUserData] = useState(null);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
    .then((data) => {
      setUserData(data.user); // user data 설정
      console.log(data.user);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  return (
    <>
      <div>
        <h1>구글 로그인 테스트</h1>
        <button onClick={handleGoogleLogin}>로그인</button>
        <h3>로그인하면 하단에 이름이 나타납니다</h3>
        <div>
          {userData
            ? '당신의 이름은 : ' + userData.displayName
            : '로그인 버튼을 눌러주세요'
          }
        </div>
        {
          userData
          ? (<img src={`${userData.photoURL}`} alt="img"></img>)
          : <></>
        }
      </div>
    </>
  );
}

export default Login;