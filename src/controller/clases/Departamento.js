class Departamento {
    constructor(nombreDepartamento, listaEmpleados = []) {
        this.nombreDepartamento = nombreDepartamento
        this.listaEmpleados = JSON.parse(localStorage.getItem("empleados")) || listaEmpleados
        
    }
    agregarEmpleados(empleado) {
        this.listaEmpleados.push(empleado)
        localStorage.setItem("empleados", JSON.stringify(this.listaEmpleados))
    }

    mostrarEmpleados() {
        console.log("Empleados del departamento");
        this.listaEmpleados.forEach(departamento => {
            console.log(departamento.nombreDepartamento);
            console.log(departamento.listaEmpleados);
        });

    }
}
export default Departamento