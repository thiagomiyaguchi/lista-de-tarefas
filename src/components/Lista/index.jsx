import('./Lista.css');

function Lista(props) {
  return (
    <div>
      {props.lista.map((item) => {
        return (
          <div key={item.id} className='tarefa'>
            <p>{item.tarefa}</p>
            <button onClick={() => props.removerTarefa(item.id)}>
              Excluir
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Lista;
