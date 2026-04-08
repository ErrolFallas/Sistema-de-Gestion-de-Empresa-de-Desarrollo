class Empresa {
    constructor(nombre, departamentos = []) {
        this.nombre = nombre
        this.departamentos = JSON.parse(localStorage.getItem("departamentos")) || departamentos
        this.empleadoPorDepartamento = JSON.parse(localStorage.getItem("empleados")) || []
    }

    agregarDepartamentos(departamento) {
        this.departamentos.push(departamento)
        localStorage.setItem("departamentos", JSON.stringify(this.departamentos))
        console.log("Departamentos registrados:", departamento.nombreDepartamento)
    }

    mostrarInfoEmpresa(){
        console.log("Nombre de la empresa"+this.nombre);
        console.log("Nombre del departamento");
        this.departamentos.forEach(departamento => {
            console.log("Nombre: ",departamento.nombreDepartamento);
            console.log("Lista de empleado: ",departamento.listaEmpleados);
        });
    }
}
export default Empresa