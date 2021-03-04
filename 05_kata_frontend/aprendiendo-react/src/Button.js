
const Button = ({title, miFuncion, myCount, myState}) => (
  <button 
    onClick={()=> miFuncion(myState, myCount)} 
  >
    {title}
  </button>
)

export default Button;
