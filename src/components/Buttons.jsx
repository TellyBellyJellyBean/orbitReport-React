import "./styling.css"
import satData from "../components/satData"

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div>
      {orbitTypes.map((type, index) => {
        return (
        <button onClick={() => filterByType(type)} key={index}>
          {type} Orbit
        </button>
        );
      })}
      <button onClick = {()=> setSat(satData)}>
        All Orbits
      </button>
    </div>
      )};


// {satData.map((name, index) => {
//   return (
//     <div>
//       <button>
//         onClick={()=> setSat(name)} key ={index}
//       </button>
//     </div>
//   )}

export default Buttons;