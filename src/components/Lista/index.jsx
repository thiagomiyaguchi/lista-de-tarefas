import('./Lista.css');

function Lista(props) {
  return (
    <div className='tarefa'>
      {props.lista.map((item) => {
        return (
          <div key={item._id} className='tarefa2'>
            <p className='taskTitle'>{item.nome}</p>
            <button
              className='btnDelete'
              onClick={() => props.removerTarefa(item._id)}
            >
              <img
                className='btnImg'
                src='https://images.freeimages.com/fic/images/icons/1681/siena/256/trash.png'
                alt=''
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Lista;
