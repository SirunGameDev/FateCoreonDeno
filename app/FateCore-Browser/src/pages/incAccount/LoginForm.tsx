//import { User } from 'Database/Entity/User.ts';

function LoginForm() {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
    }
    
    return (
    <form method="post" onSubmit={handleSubmit}>
        <label>
        EMail <input name="email" defaultValue="" />
      </label>
      <label>
        Password <input name="password" defaultValue="" />
      </label>
        <hr />
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
    </form>
    )
}

export default LoginForm