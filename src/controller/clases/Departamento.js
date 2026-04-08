class Departamento {
    constructor(nombreDepartamento, listaEmpleados = []) {
        this.nombreDepartamento = nombreDepartamento
        this.listaEmpleados = JSON.parse(localStorage.getItem("empleados")) || listaEmpleados
        
    }
    agregarEmpleados(empleado) {
        this.listaEmpleados.push(empleado)
        localStorage.setItem("empleados", JSON.stringify(this.listaEmpleados))
   console.log("Empleado agregado: ",empleado.nombreEmpleado);
   
    }

    mostrarEmpleados() {
        console.log("Empleados del departamento: ",this.nombreDepartamento);
        this.listaEmpleados.forEach(empleado => {
            console.log("Nombre: ",empleado.nombreEmpleado);
            console.log("Puesto: ",empleado.puesto);
        });

    }
}
export default Departamento