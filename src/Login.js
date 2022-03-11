import React from 'react';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSingup,
    hasAcoount,
    setHasAccount,
    emailError,
    passwordError,
  }= props;
  return(
    <section>
  <div>
    <label>UserName</label>
    <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
    <p>{emailError}</p>
    <label>Password</label>
    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
    <p>{passwordError}</p>
    <div>
      {hasAcoount ? (
        <>
        <button onClick={ handleLogin}>sign in</button>
        <p>Dont have account ?<span onClick={()=> setHasAccount(!hasAcoount)}>sign up</span> </p>
        </>
      ) : (
        <>
        <button onClick={handleSingup}>sign up</button>
        <p>have an account ?<span onClick={() => setHasAccount(!hasAcoount)}> sign in</span></p>
        </>
      )}
    </div>
  </div>
      </section>
  );
};
export default Login;