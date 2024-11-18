let mainDiv = document.getElementById('item')

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((data) => {
    data.products.map((item)=> {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add("itemsDiv");
        itemDiv.innerHTML =`

        <img class="itemimg" src="${item.thumbnail}">
        
        <h3 class="title">${item.title}</h3>

        <p class="dscrpt">${item.description}</p>
        
        <p class="price">$${item.price}</p>
        `;

        mainDiv.appendChild(itemDiv);

    })
})