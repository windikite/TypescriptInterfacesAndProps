import './App.css';
import UserInfo from './components/UserInfo';
import { User } from './models/User.model';
import Card from './components/Card';
import { Image } from 'react-bootstrap';

function App() {
  const currentUser: User = {
    username: 'BobbyG',
    age: 26,
    email: 'BobbyG@gmail.com',
    id: 1
  }
  return (
    <div className="App">
      <UserInfo {...currentUser} />
      <Card>
        Sample content
      </Card>

      <Card>
        <h2>Gengar</h2>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWr5WRtkUmVaLhUIbgie3MzCuyfHLmG3fjsw&s' />
      </Card>

      <Card>
        <h2>Log In</h2>
        <input id='username' type='text' placeholder='username' />
      </Card>
    </div>
  );
}

export default App;
