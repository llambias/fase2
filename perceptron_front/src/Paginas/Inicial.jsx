import { useState,useEffect } from 'react'
import  URL_BACK   from "../../config";
import './Inicial.css'
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'


function App() {
  console.log("inicial");
  const [count, setCount] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks= async () => {
    try {
      const response = await axios.get("URL_BACK"+ "/all");
      setTasks(response.data);
      console.log([response.data]);
      console.log("hola mundo");
      
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };
  
  // Llamar a fetchtasks una vez al cargar la página
  useEffect(() => {
    fetchTasks();
  }, []);
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
    </body>
  )
}
export default App