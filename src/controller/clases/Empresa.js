class Empresa {
    constructor(nombre, departamentos = "[]") {
        this.nombre = nombre
        this.departamentos = JSON.parse(localStorage.getItem("departamentos") || departamentos)
        this.empleadoPorDepartamento=JSON.parse(localStorage.getItem("empleados")) || "[]"
    }

    agregarDepartamentos(departamento) {
        this.departamentos.push(departamento)
        localStorage.setItem("departamentos", JSON.stringify(this.departamentos))
        console.log("el departamento " + this.departamentos + " ha sido registrado con éxito al departamento: " + this.nombre);
        
    }

    mostrarInfoEmpresa(){
        console.log("Nombre de la empresa"+this.nombre);
console.log("Nombre del departamento"+this.departamentos);
console.log("Lista de empleado"+this.empleadoPorDepartamento);
        
    }
}
export default Empresa