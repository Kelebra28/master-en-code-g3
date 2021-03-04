
const Button = ({title, miFuncion, myCount}) => {
  console.log(myCount)
  return (
    <button 
      onClick={()=> miFuncion("count", myCount)} 
    >
      {title}
    </button>
  )
};

export default Button;
