class Empleado {
    constructor(nombreEmpleado, puesto) {
        this.nombreEmpleado=nombreEmpleado
        this.puesto=puesto
    }

    mostrarInfoEmpleado(){
        console.log(this.nombreEmpleado);
        console.log(this.puesto);
    }
}

export default Empleado