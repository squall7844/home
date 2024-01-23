"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const doRegister = () => {
    const auth: Auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("登録完了！");
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
      <h1>新規登録</h1>

      <form>
        <div>
          <label>メールアドレス：</label>
          <input
            type="email"
            name="email"
            style={{ height: 50, fontSize: "1.2rem" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード：</label>
          <input
            type="password"
            name="password"
            style={{ height: 50, fontSize: "1.2rem" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{ width: 220 }}
          type="button"
          onClick={() => {
            doRegister();
          }}
        >
          登録
        </button>
      </form>
    </div>
  );
};

export default Register;
