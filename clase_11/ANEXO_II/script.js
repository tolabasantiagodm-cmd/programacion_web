const URL = "http://localhost:3000/tareas";

async function crearTarea(texto){
    const respuesta = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            texto: texto,
            hecha: false,
        }),
    });
    const tareaCreada = await respuesta.json();
    console.log("tarea creada:", tareaCreada);
    return tareaCreada;
}

async function marcarHecho(id) {
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            hecha: true,
        }),
    });

    const tareaActualizada = await respuesta.json();
    console.log("Tarea actualizada:", tareaActualizada);
}

//DELETE
async function borrarTarea(id) {
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });

    if (!respuesta.ok) {
        throw new Error (`Error al borrar  la tarea: ${respuesta.status}`);
    }

    console.log("Tarea eliminada:", id);
}

async function reemplazarTarea(id, texto) {
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id,
            texto,
            hecha: false,
        }),
    });

    console.log("Tarea reemplazada:", await respuesta.json());
}

const tarea1 = await crearTarea("Estudiar JavaScript");
const tarea2 = await crearTarea("Practicar fetch");
const tarea3 = await crearTarea("Repasar HTTP");

await marcarHecho(tarea1.id);
await reemplazarTarea(tarea2.id, "Practicar métodos HTTP");
await borrarTarea(tarea3.id);