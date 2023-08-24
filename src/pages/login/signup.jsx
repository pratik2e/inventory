
import { Button, Checkbox, Label, TextInput} from 'flowbite-react';
import { Link } from 'react-router-dom';
import auth from '/mnt/94E6980DE697EDAC/inventory mang/inventory_management/src/firebasec.jsx';
import  {useNavigate} from 'react-router-dom'; 
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 


export default function Signup() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword for login
      navigate('/inventory'); // Redirect to the /inventory page on successful login
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
    <form className="max-w-xl w-full flex flex-col gap-4 p-10"onSubmit={handleLogin}>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          placeholder="name@flowbite.com"
          required
          shadow
          type="email"
          value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Your password"
          />
        </div>
        <TextInput
          id="password2"
          required
          shadow
          type="password"
          value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          id="repeat-password"
          required
          shadow
          type="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label
          className="flex"
          htmlFor="agree"
        >
        </Label>
      </div>
      <Button type="submit">
        Register new account
      </Button>
    </form>
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    <Link to="/login">
        <Button>
          Already have an account? Login
        </Button>
      </Link>
    </div>
  )
}


