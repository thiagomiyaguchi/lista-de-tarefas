import { useEffect, useState } from 'react';
import './App.css';
import Lista from './components/Lista';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState(
    JSON.parse(localStorage.getItem('lista')) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaTarefa = { id: new Date().getTime(), tarefa: tarefa };
    setLista([...lista, novaTarefa]);
    setTarefa('');
  };

  const removerTarefa = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lista));
  }, [lista]);

  return (
    <div className='App'>
      <div className='header'>
        <img className='imgHeader' src="https://static.vecteezy.com/system/resources/previews/009/362/738/non_2x/tick-icon-accept-approve-sign-design-free-png.png"/>
        <p className='titleHeader'>App Lista Tarefas</p>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='input'
          required={true}
          type='text'
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button className='btnCadastrar'>+</button>
      </form>
      <div className='listaTarefas'>
      <Lista lista={lista} removerTarefa={removerTarefa} />
      </div>
    </div>
  );
}

export default App;
