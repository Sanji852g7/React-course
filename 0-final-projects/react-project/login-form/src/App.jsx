import { Clock } from './components/Clock';
import { LoginForm } from './components/LoginForm';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Clock />
      </div>
      <div>
        <h1>Hello, welcome to my website</h1>
        <LoginForm />
      </div>
    </>
  );
}

export default App
