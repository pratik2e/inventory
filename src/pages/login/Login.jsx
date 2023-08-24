import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import auth from '/mnt/94E6980DE697EDAC/inventory mang/inventory_management/src/firebasec.jsx';
import  {useNavigate} from 'react-router-dom'; 
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 


const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword for login
      navigate('/inventory'); // Redirect to the /inventory page on successful login
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">DEEP WES</h1>
      <form className="max-w-xl w-full flex flex-col gap-4 p-10" onSubmit={handleLogin}>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            placeholder="name@deepwes.com"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit" >
          Submit
        </Button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
export default LoginPage;