export default function login(){
    return `
        <h1>Login Form</h1>

        <form action="/submit" method="POST">
            <label>Enter name: </label>
            <input type="text" name="uname" placeholder="Enter name"/>

            <label>Enter password: </label>
            <input type="password" name="upass" placeholder="Enter password"/>

            <input type="submit" name="btnsubmit" value="Login"/>
        </form>
    `;
}