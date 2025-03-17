document.getElementById("menuBtn").addEventListener("click", function () {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
});

const items = [
    {
        title:"Taquiza Para 50 Personas", 
        description:"Taquiza para 50 personas $800 (25% de deposito requerido) Incluye-3 tipos de carne de su prefedencia Vasos para frijoles Cilantro,cebolla,limones,cebolla asada ,chile toriados, 50 quesadillas Frijoles charros 2 tipos agua fresca",
        image: "./images/tacos.jpg"
    },
    {
        title:"Taquiza Para 100 Personas",
        description:"Taquiza para 100 personas $1,750 (25% de deposito requerido) Incluye- 3 tipos de carne de su prefedencia Vasos para frijoles Cilantro,cebolla,limones,cebolla asada ,chile toriados, 50 quesadillas Frijoles charros 2 tipos agua fresca",
        image:"./images/tacos2.jpg"
    },
    {
        title:"Taquiza Para 50 Personas con Toro Mechanico",
        description:"Taquiza para 50 personas con toro mecanico $ 1,200 (25% de deposito \requerido) Incluye- Toro mecanico por 3 hrs (si quiere por todo El dia se agrega $150) 3 tipos de carne de su prefedencia Vasos para frijoles Cilantro,cebolla,limones,cebolla asada ,chile toriados, 50 quesadillas Frijoles charros 2 tipos agua frescas",
        image: "./images/tacos3.jpg"

    }
   
];
const container = document.getElementById("cardContainer");

items.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-all cursor-pointer transition-transform duration-300 ";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-full h-52 object-cover">
        <div class="p-6">
            <h3 class="text-lg font-bold">${item.title}</h3>
            <p class="text-gray-600">${item.description}</p>
        </div>
    `;

    container.appendChild(card);
});


const menuItems = [
 
    {
        title:"Bebidas",
        description:"Horchata, Jamaica, Tamarindo, Pina, Pepino, Sandia",
        image:"./images/aguasfrescas.jpg"
    },
    {
        title:"Carnes",
        description:"Pastor, Fajita, Fajita Marinada, Bistec, Bistec Marinado, Pollo, Cochina Pibil, Carnitas",
        image:"./images/meats.jpg"
    },
    {
        title:"Aguachiles",
        description:"Rojo, Verde, Tropical, Mango, Habanero, Levanta Muertos",
        image:"./images/aguachiles.jpg"
    }
];
const menuContainer = document.getElementById("menuCardContainers");

menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-all cursor-pointer transition-transform duration-300 ";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-full h-52 object-cover">
        <div class="p-6">
            <h3 class="text-lg font-bold">${item.title}</h3>
            <p class="text-gray-600">${item.description}</p>
        </div>
    `;

    menuContainer.appendChild(card);
});