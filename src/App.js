import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message title="Доброе утро" text="Говорят с 6 до 12 часов."/>
      <Message title="Добрый день" text="Приветствуют собеседника с 12 до 18 часов."/>
      <Message title="Добрый вечер" text="Обращаются друг к другу с 18 до 24 часов."/>

    </div>
  );
}

export default App;
