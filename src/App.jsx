// LIbrería 
import  {  jsPDF  }  from  "jspdf" 
import 'jspdf-autotable'
import './App.css'

function App() {

  const studentData = [
    {
    nie: "34567",
    name: "Mirna Zuleyma",
    lastname: "Lemus Recinos",
    promedio: "8.00"
  },
  {
    nie: "23455",
    name: "Victoria",
    lastname: "Hernández",
    promedio: "8.00"
  }
]  
  const generarPDF = () => {
    const doc = new jsPDF();

    //Mostrar                             80<= 95=> ubicación del text 30(arriba abajo 30 se mueve abajo)
      doc.text('Datos de los estudiantes', 80, 20);
/*     doc.text('NIE', 10, 20);
    doc.text(`Nombre ${studentData.name}`, 10, 30)
    doc.text(`Apellido ${studentData.lastname}`, 10, 40)
      doc.text(`Promedio ${studentData.promedio}`, 10, 50) */

    // Crear una tabla para guardar los datos
    const columns = ['NIE', 'Nombre', 'Apellido', 'Promedio']
  /*   const data = [ 
      [studentData.nie.toString(), studentData.name, studentData.lastname, studentData.promedio.toString()]
    ]; */
    const data = studentData.map((student) => [
      student.nie,
      student.name,
      student.lastname,
      student.promedio
    ])
    // Decir que se genere la tabla
    doc.autoTable({
      startY: 30, //Desde donde empieza
      head: [columns], // Las columnas
      body: data // Los datos de cada una de las columnas

    })

    // Guardar el pdf con un nombre específico
    doc.save(`Datos de_estudiantes.pdf`);

  }

  return (
     <>
    <div className="container">

    {/*  <h4>Datos del estudiante</h4>
     <p>NIE: {studentData.nie}</p>
     <p>Nombre: {studentData.name}</p>
     <p>Apellidos: {studentData.lastname}</p>
     <p>Promedio: {studentData.promedio}</p> */}

     <h4>Datos de estudiantes</h4>
     <table className="tabla">
        <thead>
           <tr>
           <th>NIE</th>
           <th>Nombre</th>
           <th>Apellido</th>
           <th>Promedio</th>
           </tr>
        </thead>
       <tbody>
         {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student.nie}</td>
              <td>{student.name}</td>
              <td>{student.lastname}</td>
              <td>{student.promedio}</td>
            </tr>
        ))}
       </tbody>
      </table>
   
     <button 
     onClick={generarPDF}
     className="btn-generar"
     >
      Generar y descargar PDF
    </button>

    </div>
    </>
  )
}

export default App
