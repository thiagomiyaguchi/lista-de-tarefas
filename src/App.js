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
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          required={true}
          type='text'
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button>Cadastrar</button>
      </form>
      <Lista lista={lista} removerTarefa={removerTarefa} />
    </div>
  );
}

export default App;
