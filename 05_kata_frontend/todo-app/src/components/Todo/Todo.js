

const Todo = (props) => {

    const showCompleted = (isComplete) => {
        return isComplete
        ? { 
            textDecorationLine: 'line-through', 
            marginLeft: '20px',
          }
          : { marginLeft: '20px' };
    }
    
    return (
        <div>
            <button
            type="button"
            style={{marginRigth: "10px"}}
            onClick={() => props.delete(props.idex)}
            >
                Borrrar
            </button>
            <input type="checkbox" checked={props.isComplete} onChange={() => {
                props.setComplete(props.index)
            }}/>
            <span style={ showCompleted(props.isComplete)}>{props.text}</span>
        </div>
    )



}

export default Todo