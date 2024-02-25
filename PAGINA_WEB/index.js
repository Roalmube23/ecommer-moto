document.addEventListener("DOMContentLoaded", function() {
    /* const buttons = document.querySelectorAll('.comprar-btn');
    buttons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const item = button.parentElement.parentElement;
        const title = item.querySelector('p').textContent;
        const price = item.querySelector('.precio').textContent;
        const imgSrc = item.parentElement.querySelector('img').src;
        
        // Aquí puedes hacer lo que quieras con la información, por ejemplo, agregar el producto al carrito
        console.log(`Añadido al carrito: ${title} ${price}`);
    } */
    pintar()
    
});


let productosLenceria = [
    {
        nombre:"BMW S1000RR",
        precio:"100.000.000",
        imagen:"./BMW-S1000RR.jpeg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"BMW S1000RR",
        precio:"100.000.000",
        imagen:"./BMW-S1000RR.jpeg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"BMW S1000RR",
        precio:"100.000.000",
        imagen:"./BMW-S1000RR.jpeg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"NINJA ZX-10R",
        precio:"100.000.000",
        imagen:"./Kawasaki_Ninja_ZX-10.jpg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"NINJA ZX-10R",
        precio:"100.000.000",
        imagen:"./Kawasaki_Ninja_ZX-10.jpg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"NINJA ZX-10R",
        precio:"100.000.000",
        imagen:"./Kawasaki_Ninja_ZX-10.jpg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"R1 M",
        precio:"110.000.000",
        imagen:"./R1M.jpg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"R1 M",
        precio:"110.000.000",
        imagen:"./R1M.jpg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"R1 M",
        precio:"110.000.000",
        imagen:"./R1M.jpg",
        descripcion:"MOTO DE 1000 CC",
    },
    {
        nombre:"R1 M",
        precio:"110.000.000",
        imagen:"./R1M.jpg",
        descripcion:"MOTO DE 1000 CC",
    },
   
]


function pintar(){
    productosLenceria.forEach((item,index)=>{
        let card = document.createElement("div")
        let imagen = document.createElement("img")
        imagen.src= item.imagen
        card.appendChild(imagen)
        let div = document.createElement("div")
        div.classList = "informacion"
        card.appendChild(div)
        let parrafo = document.createElement("p")
        parrafo.textContent=item.nombre
        div.appendChild(parrafo)
        let precio = document.createElement("p")
        precio.textContent=item.precio
        div.appendChild(precio)
        let descripcion = document.createElement("p")
        descripcion.textContent=item.descripcion
        div.appendChild(descripcion)
        let talla = document.createElement("p")
        talla.textContent=item.talla
        div.appendChild(talla)
       

        const carrito = {
            productos: [], // Array para almacenar los productos en el carrito
        
            // Método para añadir un producto al carrito
            comprarProducto: function(e) {
                e.preventDefault();
                if (e.target.classList.contains('agregar-carrito')) {
                    const productoSeleccionado = e.target.parentElement.parentElement;
                    this.obtenerDatosProducto(productoSeleccionado);
                }
            },
        
            // Método para obtener los datos del producto seleccionado
            obtenerDatosProducto: function(producto) {
                const productoInfo = {
                    imagen: producto.querySelector('img').src,
                    nombre: producto.querySelector('p').textContent,
                    precio: producto.querySelector('.precio').textContent,
                    // Otros datos del producto que desees obtener
                };
                this.agregarProductoAlCarrito(productoInfo);
            },
        
            // Método para agregar un producto al carrito
            agregarProductoAlCarrito: function(producto) {
                this.productos.push(producto);
                console.log('Producto agregado al carrito:', producto);
                // Aquí podrías actualizar la interfaz de usuario para reflejar el cambio en el carrito
            }
        };
        




        

        

        document.getElementById("contenedor").appendChild(card)

    })
}
