**Asunto:** Tarea Técnica: Desarrollo de una Aplicación de Lista de Tareas con Épicas

Hola,

¡Gracias por tu interés en unirte a nuestro equipo! Como parte de nuestro proceso de selección, nos gustaría pedirte que desarrolles una aplicación simple de lista de tareas (To-Do App) utilizando **Python**, **Django** y **React**. Esta tarea nos ayudará a entender tu nivel de habilidad como desarrollador full stack, especialmente en lo que respecta al desarrollo backend con Django y frontend con React.

### Objetivo de la Tarea
Desarrollar una aplicación de lista de tareas que permita a los usuarios:
- Crear, leer, actualizar y eliminar tareas (CRUD) sin usar **viewsets**.
- Crear y gestionar Épicas, que son colecciones de tareas.
- Asignar tareas a una o más Épicas.
- Marcar tareas con diferentes estados: `to-do`, `in-progress`, `block`, `done`.
- Ver las actualizaciones en tiempo real en el frontend.
- Visualizar un gráfico de estado de las tareas.

### Requerimientos Técnicos
1. **Backend en Django**
   - **Modelos Django**:
     - `Task`: Define un modelo de tarea con los campos:
       - `title`: nombre de la tarea (Texto, máximo 200 caracteres).
       - `status`: estado de la tarea (opciones: `to-do`, `in-progress`, `block`, `done`).
       - `completed`: booleano para indicar si la tarea está completada (este campo puede derivar del estado).
       - `created_at`: fecha y hora en que se creó la tarea.
       - `updated_at`: fecha y hora de última actualización de tarea.
     - `Epic`: Define un modelo de épica que puede tener muchas tareas.
     - Relación: Una `Task` puede pertenecer a muchas `Épicas`, y una `Épica` puede tener muchas `Tareas` (relación many-to-many).
   - **API REST**: Implementa operaciones CRUD para tareas y épicas usando el ORM de Django. **No uses viewsets**; implementa las consultas directamente con funciones del ORM.
   - **Consultas Adicionales**:
     - Obtener todas las tareas completadas por Épica.
     - Obtener tareas pendientes creadas en los últimos 2 días.

2. **Frontend en React**
   - **Lista de Tareas y Épicas**: Muestra todas las tareas y las épicas.
   - **Añadir Nuevas Tareas y Épicas**: Implementa formularios para añadir tareas y épicas.
   - **Completar y Eliminar Tareas**: Incluye botones para:
     - Cambiar el estado de una tarea.
     - Eliminar una tarea o épica.
   - **Gráfico de Estado de Tareas**: Implementa un gráfico de tipo **pie** que muestre la distribución de tareas por estado (`to-do`, `in-progress`, `block`, `done`).
   - **Actualización en Tiempo Real**: La lista debe actualizarse automáticamente después de realizar operaciones como añadir, cambiar de estado, o eliminar una tarea.

3. **Estilos Básicos**
   - La interfaz debe ser simple y fácil de usar. Puedes agregar estilos básicos en CSS para mejorar la apariencia.

### Opcional: Dockerización y Autenticación
- **Dockerización**: Como opción adicional, puedes dockerizar la aplicación para facilitar su despliegue. Si decides incluir esta opción, asegúrate de proporcionar un archivo `Dockerfile` y `docker-compose.yml` que configuren tanto el backend como el frontend.
- **Puntos Extra**: Ganarás puntos adicionales si agregas autenticación y autorización básicas (por ejemplo, con tokens JWT usando Django REST Framework). La autenticación debe permitir que solo los usuarios autenticados puedan crear, modificar y eliminar tareas y épicas.

### Recomendaciones
- **Organización del Código**: Asegúrate de que el código esté bien estructurado y sea fácil de leer.
- **Manejo de Estado en React**: El estado debe actualizarse en tiempo real en el frontend.
- **Documentación**: Incluir un archivo README con instrucciones para ejecutar el proyecto en un entorno local y una breve explicación de tu enfoque.

### Entrega
Por favor, envía el código en un repositorio de Git (GitHub, GitLab, Bitbucket, etc.) con instrucciones para ejecutar la aplicación. Puedes compartir el enlace al repositorio respondiendo a este correo. 

### Fecha de Entrega
Nos gustaría que completes y entregues en un plazo de **72 horas** desde el envío de este correo.

Si tienes alguna duda o necesitas aclaraciones, no dudes en contactarnos.

Saludos,