document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos');

    const productos = await getProductos();

    let body = "";

    for (let { image, title, price, category } of productos) {
       let titulo = title.slice(0,25)+"..."; 
       body += `
    <article class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">
            <span>${category}</span>
            </p>
            <p class="card-text">
            <span><strong>L. ${price}</strong></span>
            </p>
            <a href="#" class="btn btn-primary">Mas información</a>
        </div>
    </article>`
    }

    listaProductos.innerHTML = body;

})

const getProductos = async () => {

    const response = await fetch('https://fakestoreapi.com/products');

    const productos = await response.json();

    return productos;

}