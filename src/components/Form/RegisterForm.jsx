import { useState } from 'react';

function RegisterForm(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordValue2, setPasswordValue2] = useState('');
  const [passwordsMatch, setpasswordsMatch] = useState(true);
  //vvv  prisideti state pakartotiniam slaptazodziui

  const submitHandler = (e) => {
    e.preventDefault();
    //vvv padaryti kad forma neperkrautu psl
    passwordValue === passwordValue2
      ? setpasswordsMatch(true)
      : setpasswordsMatch(false);
    // patikrinti ar sutampa slaptazodziai
    // pranesti vartotojui ar sutampa ar ne su tekstu virs formos
  };

  return (
    <div>
      <h2>Register here</h2>
      {!passwordsMatch && <h2>Passwords dont match</h2>}
      <form onSubmit={submitHandler} className="card">
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          type="password"
          placeholder="password"
        />
        <input
          onChange={(e) => setPasswordValue2(e.target.value)}
          value={passwordValue2}
          type="password"
          placeholder="repeat password"
        />
        <button type="submit">Login</button>
      </form>
      {!props.hideDebug && (
        <>
          <hr />
          <h3>Debug values</h3>
          <p>Email: {emailValue}</p>
          <p>Password: {passwordValue}</p>
          <p>Repeat Password: {passwordValue2}</p>
        </>
      )}
    </div>
  );
}
export default RegisterForm;
