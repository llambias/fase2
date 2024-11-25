import { useState,useEffect } from 'react'
import  URL_BACK   from "../../config";
import './Inicial.css'
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'


function App() {
  console.log("inicial");
  const [count, setCount] = useState("");
  const [tasks, setTasks] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [status, setStatus] = useState("");
  const completed = false;

  const fetchTasks= async () => {
    try {
      const response = await axios.get(URL_BACK+ "/api/");
      setTasks(response.data);
      console.log("data de respuesta:");
      console.log([response.data]);
      
      
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };
  
  // Llamar a fetchtasks una vez al cargar la página
  useEffect(() => {
    fetchTasks();
  }, []);

  const create_task = async(e) => {
    e.preventDefault();
    settitulo(e.target.tarea.value);
    setTitulo(e.target.tarea.value);
    setStatus(e.target.tarea.value);
    setcompleted(false);
    setcolor(e.target.color.value);
    console.log("click",titulo);
    axios.post(`${URL_BACK}/api/new`, {
      "titulo": titulo,
      "completed": completed,
      "status:": status
    },{
      headers : {
        "Content-Type": "application/json"} 
    }).then((response) => {
      console.log('tarea creada', name);
      console.log(response);
  
    }).catch((error) => {
      console.error('An error occurred while trying to login:', error);
      //setError(true);// aquí puede haber más lógica para tratar los errores
    })
  }

  return (
    <body>
    {tasks.map((task) => {
      return(
        

        <div class="tarjeta">
          <div class="card">{task.name}</div>
          <div class="cuerpo">
              {task.name}
          </div>
          <div class="pie">
                <a href="#">Más información</a>
          </div>
        </div>
      )
      }
    )}
    <div className = 'Formcontainer'> 
    <div className="card">
      <form align ="center" onSubmit={create_task}>
        <div className = "field">
            <input  id="tarea" 
            placeholder="tarea" className="input-field" name="tarea" ></input>
            </div><div className = "field">
            <input  id="fecha" 
            placeholder="tarea" className="input-field" name="fecha" type="date"></input>
            </div><div className = "field">
            </div>
            <div className = "field">
            {/* <input  id="color" 
            placeholder="color" className="input-field" name="tarea"></input> */}
            <select name="cars" id="cars" className = "select-field" onChange={setStatus}>
              <option  value="to-do" >To Do</option>
              <option value="block" >Block</option>
              <option value="in-progress" >In-Progress</option>
              <option value="done">Done</option>
              
            </select>
            </div>
        <button className = "button"  type="submit">
            Crear tarea
        </button>
        </form>
    </div> 
    </div> 
    </body>
  )
}
export default App