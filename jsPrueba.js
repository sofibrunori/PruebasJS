//PRODUCTOS
class Producto {
    constructor(id, imagen, nombre, precio) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new Producto(1, '../MULTIMEDIA/vogue.jpg', 'Vogue', 3000),
    new Producto(2, '../MULTIMEDIA/weekend.jpg', 'Weekend', 2000),
    new Producto(3, '../MULTIMEDIA/vino.jpg', 'Vino', 1500),
    new Producto(4, '../MULTIMEDIA/rules.jpg', 'Rules', 4000),
    new Producto(5, '../MULTIMEDIA/new-york.jpg', 'New York', 5000),
    new Producto(6, '../MULTIMEDIA/new-york-times.jpg', 'I don´t care', 5000),
    new Producto(7, '../MULTIMEDIA/more-amore.jpg', 'More Amore', 4500),
    new Producto(8, '../MULTIMEDIA/euphoria.jpg', 'Euphoria', 3000),
    new Producto(9, '../MULTIMEDIA/angel-numbers.jpg', 'Angel Numbers', 6000),
];

const productosContainer = document.getElementById('cont-productos');

productos.forEach(producto => {
    let productoHTML = `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button id="agregar-carrito" class="btn" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
    `;
    productosContainer.innerHTML += productoHTML
});


//AGREGAR AL CARRITO
const containerCarrito = document.getElementById ("cont-carrito")
const carrito = []

const agregarCarrito = document.getElementById("agregar-carrito").addEventListener("click", (productoSeleccionado) => {
        const productoSeleccionado = productos.find(producto => producto.id === producto) //?
        carrito.push(productoSeleccionado)
        mostrarCarrito()
})  

function mostrarCarrito() {
    carritoContainer.innerHTML = ''; 
    if (carrito > 0) {
        carrito.forEach(producto => {
        let productoCarritoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
            </div>
        `;
        const containerCarrito = document.getElementById ("cont-carrito")
        let botonComprar = document.createElement('btn-comprar');
        botonComprar.innerText = 'Comprar';
        botonComprar.classList.add('btn');
        carritoContainer.appendChild(botonComprar);

        carritoContainer.innerHTML += productoCarritoHTML; //?
     });   
    } else if (carrito === 0) {
        const carritoVacio = document.getElementById ("carrito-vacio")
        carritoContainer.innerHTML = ''
        let carritoVacioHTML = `
             <img src="../MULTIMEDIA/carrito.jpg" alt="carrito de compras" class="img-fluid carrito-img">
             <h6 class="carrito-texto"> Aún no tienes nada en tu carrito de compras </h6>
        `;
    }  
    mostrarCarrito()
}

//SUMAR TOTAL
botonComprar.addEventListener("click", () => {
    let total = 0;
    carrito.forEach(producto => {
    total += producto.precio;
    });
    mensajeTotal.innerText = `El total es: $${total}`;
})
