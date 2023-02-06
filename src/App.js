import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Lista from './components/Lista';
const url = 'http://localhost:5000/api/v1/tarefas';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setLista(response.data.tarefas);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { nome: tarefa });
      const data = response.data.tarefa;
      setLista([...lista, data]);
      setTarefa('');
    } catch (error) {
      console.log(error.response);
    }
  };

  const removerTarefa = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setLista(lista.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <div className='header'>
        <img
          className='imgHeader'
          src='https://static.vecteezy.com/system/resources/previews/009/362/738/non_2x/tick-icon-accept-approve-sign-design-free-png.png'
          alt='Imagem de Cabeçalho'
        />
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
