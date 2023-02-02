import('./Lista.css');

function Lista(props) {
  return (
    <div>
      {props.lista.map((item) => {
        return (
          <div key={item.id} className='tarefa'>
            
            <p className='taskTitle'>{item.tarefa}</p>
            <button className='btnDelete' onClick={() => props.removerTarefa(item.id)}>
              <img className='btnImg' src="https://images.freeimages.com/fic/images/icons/1681/siena/256/trash.png" alt="" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Lista;
