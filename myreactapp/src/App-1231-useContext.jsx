import { createContext, useContext,useState } from "react";

export default function App() {
    // 建立共用環境區域
    const UserContext = createContext({});
    const [username, setUsername] = useState('');
    // 建立登入元件
    const LoginForm = () => {
        // 因為要被放在共用區，所以要放在App元件內
        // const [username, setUsername] = useState('');
        // 從共用區UserContext解構出username, setUsername
        // const{username, setUserName}=useContext(UserContent)
        return (
            <>
                <label htmlFor="username">使用者名稱</label>
                <input
                    type="text"
                    id="username"
                    placeholder="請輸入使用者名稱"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="button">登入</button>
            </>
        )

    }

    // 登入後的歡迎元件
    const Greeting = () => {
        // 從共用區取得username
        const {username}=useContext(UserContext);
        return (
            <div>
                Hi,{username}
            </div>
        )
    }


    return (
        <>
            <h1>useContent</h1><hr style={{ marginBottom: "50px" }} />
            <UserContext.Provider value={{username,setUsername}}>
                <LoginForm />
                <br />
                <Greeting />
            </UserContext.Provider>
        </>
    )
}