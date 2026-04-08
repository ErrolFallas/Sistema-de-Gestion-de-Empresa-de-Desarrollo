class Departamento {
    constructor(nombreDepartamento, listaEmpleados = []) {
        this.nombreDepartamento = nombreDepartamento
        this.listaEmpleados = JSON.parse(localStorage.getItem("empleados_" + this.nombreDepartamento)) || listaEmpleados
        
    }
    agregarEmpleados(empleado) {
        // Solo agregar si el empleado no existe en este departamento (evita duplicados al recargar)
        const existe = this.listaEmpleados.some(e => e.nombreEmpleado === empleado.nombreEmpleado)
        if (!existe) {
            this.listaEmpleados.push(empleado)
            localStorage.setItem("empleados_" + this.nombreDepartamento, JSON.stringify(this.listaEmpleados))
            console.log("Empleado agregado: ", empleado.nombreEmpleado + "con el puesto de "+empleado.puesto);
        }
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