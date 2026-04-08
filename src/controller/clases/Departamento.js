class Departamento {
    constructor(nombreDepartamento, listaEmpleados = []) {
        this.nombreDepartamento = nombreDepartamento
        this.listaEmpleados = listaEmpleados
    }

    agregarEmpleados(empleado) {
        /* Cargar los departamentos registrados en el sistema */
        const departamentosDeEmpresa = JSON.parse(localStorage.getItem("departamentos")) || []
        const departamentoEnStorage = departamentosDeEmpresa.find(d => d.nombreDepartamento === this.nombreDepartamento)

        /* Validar si el departamento existe antes de intentar guardar empleados */
        if (!departamentoEnStorage) {
            console.log("Error: Departamento inexistente en el sistema.");
            return;
        }

        /* Sincronizar la lista de memoria con la de almacenamiento para no perder datos previos */
        this.listaEmpleados = departamentoEnStorage.listaEmpleados || [];

        /* Solo agregar si el empleado no existe en este departamento (evita duplicados) */
        const existe = this.listaEmpleados.some(e => e.nombreEmpleado === empleado.nombreEmpleado)
        if (!existe) {
            this.listaEmpleados.push(empleado)

            /* Actualizar la lista en el registro global */
            departamentoEnStorage.listaEmpleados = this.listaEmpleados
            localStorage.setItem("departamentos", JSON.stringify(departamentosDeEmpresa))

            console.log("Empleado agregado: " + empleado.nombreEmpleado + " al departamento " + this.nombreDepartamento);
        }
    }

    mostrarEmpleados() {
        console.log("Empleados del departamento: ", this.nombreDepartamento);
        this.listaEmpleados.forEach(departamento => {
            console.log("Nombre: ", departamento.nombreEmpleado);
            console.log("Puesto: ", departamento.puesto);
        });

    }
}
export default Departamento