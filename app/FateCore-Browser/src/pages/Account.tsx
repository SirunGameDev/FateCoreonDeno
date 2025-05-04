import LoginForm from "./incAccount/LoginForm.tsx";
import RegisterForm from "./incAccount/RegisterForm.tsx";

function Account() {
    return (
        <>
        <h1>Account</h1>

        <button>Login</button>
        <button>Register</button>

        < LoginForm />
        < RegisterForm />

        </>
    )
}

export default Account;
