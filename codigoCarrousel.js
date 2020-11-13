const botonPrevio = document.getElementById('botonPrevio');
const botonSiguiente = document.getElementById('botonSiguiente');
const deslizados = document.querySelectorAll('.deslizados');
const listaContenido = document.getElementById('listaContenido');
const elemento = document.getElementById('elemento');



const anchoGaleria = deslizados[0].offsetWidth;

botonPrevio.onclick = () => Mover(1);
botonSiguiente.onclick = () => Mover(2);

function Mover(value) {
	const anchoLista = listaContenido.offsetWidth;
    const anchoElemento = elemento.offsetWidth;
    

    elemento.style.left == "" ? posicionIzquierda = elemento.style.left = 0 : posicionIzquierda = parseFloat(elemento.style.left.slice(0, -2) * -1);

    if(posicionIzquierda < (anchoElemento - anchoLista) && value == 2) {
        elemento.style.left = `${-1 * (posicionIzquierda + anchoGaleria)}px`;
    } else if(posicionIzquierda > 0 && value == 1) {
        elemento.style.left = `${-1 * (posicionIzquierda - anchoGaleria)}px`;
    }
}
