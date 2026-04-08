import Departamento from "./Departamento.js";

class Empresa {
    constructor(nombre, departamentos = []) {
        this.nombre = nombre
        this.departamentos = JSON.parse(localStorage.getItem("departamentos")) || departamentos
        this.empleadoPorDepartamento = JSON.parse(localStorage.getItem("empleados")) || []
    }

    agregarDepartamentos(departamento) {
        // Solo agregar si el departamento no existe ya (evita duplicados al recargar)
        const existe = this.departamentos.some(d => d.nombreDepartamento === departamento.nombreDepartamento)
        if (!existe) {
            this.departamentos.push(departamento)
            localStorage.setItem("departamentos", JSON.stringify(this.departamentos))
            console.log("Departamentos registrados:", departamento.nombreDepartamento)
        }
    }

    mostrarInfoEmpresa() {
        console.log("Nombre de la empresa: " + this.nombre);
        console.log("Informacion de cada departamento");
        this.departamentos.forEach(departamento => {
            console.log("Nombre: " + departamento.nombreDepartamento);
            console.log("Lista de empleado: " + departamento.listaEmpleados);
        });
    }
}
export default Empresa