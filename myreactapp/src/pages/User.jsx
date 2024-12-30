import { auth } from "../config/firebase";

export default function User() {
    console.log(auth);

    return (
        /* 帶入登入者資訊 */
        <div>
            <p>{auth?.currentUser?.displayName}</p>
            <p>{auth?.currentUser?.email}</p>
            <p>
                <img src={auth?.currentUser?.photoURL} alt="" />
            </p>
        </div >
    )
}