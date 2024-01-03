
import './App.css'

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img 
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
    <app
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
    <> <li>Hello Good Morning</li>
    <li>How Are You!</li>
    </>
      </header>
    </div>
  );
}
*/
/*
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email,setEmail]= useState('');

  function handleEmailchange(e){
    setEmail(e.target.value);
  }
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:{' '}
        <input
          value={email}
          onChange={handleEmailchange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
*/
// inside src/App.js
// Replace previous code with this.

/*
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setErrorMessage('');
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleLogin}>Login</button>

    </div>
  );
};
const Registration = () => {
 
  const [Password, setPassword] = useState('');
  const [lastname,setLastname]= useState('');
  const [firstname,setFirstname]= useState('');
  const[email,setEmail]=useState('');

  const handleRegistration = () => {
  
    console.log('Registration clicked with firstname :', setFirstname, 'and password:',Password);
  };

  return (
    <div>
    <h2>Registration</h2>
    <form>
      
      <label>
        Firstname:
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </label>
      <br />
      <label>
        Lastname:
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="button" onClick={handleRegistration}>Register</button>
    </form>
  </div>
);
};
  const App = () => {
    return (
      <div>
        <Login />
        <Registration />
      </div>
    );
  };
  export default App;
*/

//import { useState } from 'react';

/*
export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {  
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
*/
import React, { useState } from 'react';
  

function App() {
  const [items, setItems] = useState(['Item1', 'Item2']);

  const addItem = () => {
    setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  const deleteFromLast = () => {
    setItems(prevItems => prevItems.slice(0, -1));
  };

  const deleteFromFirst = () => {
    setItems(prevItems => prevItems.slice(1));
  };

  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
      <button onClick={deleteFromLast}>Delete Last Item</button>
      <button onClick={deleteFromFirst}>Delete First Item</button>
    </div>
  );
}

export default App;
