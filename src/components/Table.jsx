import "./styling.css"
import Buttons from "./Buttons";


const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type of Satellite</th>
          <th className="date">Launch Date</th>
          <th className="status">Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) => {
          return (
              <tr key = {data.id}> 
                <td className="name" key = {data.id} value = {data.name}>{data.name}</td>
                <td className="type" key = {data.id} value = {data.type}>{data.type}</td>
                <td className="date" key = {data.id} value = {data.launchDate}>{data.launchDate}</td>
                <td className="status" key = {data.id} value = {data.operational}>{data.operational ? "active" : "inactive"}</td>
              </tr>
        )}
        )}
     </tbody>
   </table>
  );
};

export default Table;