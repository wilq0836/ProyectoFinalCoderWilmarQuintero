

const impresion = document.getElementById("cargarModelos");

class Bicicleta {
    constructor (marca , modelo, precio, especificacion,foto,cantidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.especificacion = especificacion;
        this.foto = foto;
        this.cantidad = cantidad;       
             
    };
};


const modelos = [];
const marcaBicicleta =["scott","colnago","giant","pinarello","trek"];
const modeloBicicleta = [];
const precio =[];


const productos = [];//Se cargan los elementos al carrito


const carrito = [];
const compraFinal = [];


class Carrito {
    constructor(marca, modelo, precio, especificacion, foto, cantidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.especificacion = especificacion;
        this.foto = foto;
        this.cantidad = cantidad;
    }
}






const productosScott = [
    {marca:"scott",modelo:"addict",precio:12000000,especificacion:"Nueva",foto:"./img/addictrc10.jpg",cantidad:1},
    {marca:"scott",modelo:"addict",precio:10000000,especificacion:"Nueva",foto:"./img/addictrc20.jpg",cantidad:1},
    {marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:"./img/addictrc30.jpg",cantidad:1},
    {marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:"./img/addict30.jpg",cantidad:1}
];


const productosGiant = [
    {marca:"Giant",modelo:"advance",precio:12000000,especificacion:"Nueva",foto:"./img/giantadvance.jpg",cantidad:1},
    {marca:"Giant",modelo:"tcr",precio:10000000,especificacion:"Nueva",foto:"./img/gianttcrpro.jpg",cantidad:1},
    {marca:"Giant",modelo:"propel",precio:10000000,especificacion:"Nueva",foto:"./img/propeladvance.jpg",cantidad:1},
    {marca:"Giant",modelo:"propelBlue",precio:10000000,especificacion:"Nueva",foto:"./img/propelgray.jpg",cantidad:1}

];
const productosTrek = [
    {marca:"Trek",modelo:"Madone",precio:19000000,especificacion:"Nueva",foto:"./img/madone-sl-6-disc.JPG",cantidad:1},
    {marca:"Trek",modelo:"Emonda",precio:15000000,especificacion:"Nueva",foto:"./img/TREKEMONDA.JPG",cantidad:1},
    {marca:"Trek",modelo:"Madone Blue",precio:13000000,especificacion:"Nueva",foto:"./img/TREKMADONEBLUE.JPG",cantidad:1},
    {marca:"Trek",modelo:"Supercaliber",precio:16000000,especificacion:"Nueva",foto:"./img/TREKSUPERCALIBER.JPG",cantidad:1}
    
];
const productosColnago = [
    {marca:"Colnago",modelo:"C64",precio:20000000,especificacion:"Nueva",foto:"./img/colnagoc64.jpg",cantidad:1},
    {marca:"Colnago",modelo:"C60",precio:28000000,especificacion:"Nueva",foto:"./img/COLNAGOC60.jpg",cantidad:1},
    {marca:"Colnago",modelo:"VR3S",precio:29000000,especificacion:"Nueva",foto:"./img/colnagovr3s.jpg",cantidad:1},    
    
];

const productosPinarello = [
    {marca:"Pinarello",modelo:"f12",precio:21000000,especificacion:"nueva",foto:"./img/pinarello.jpg",cantidad:1},
    {marca:"Pinarello",modelo:"f10",precio:22000000,especificacion:"nueva",foto:"./img/pinarello10.jpg",cantidad:1},
    {marca:"Pinarello",modelo:"contrareloj",precio:23000000,especificacion:"nueva",foto:"./img/pinarellocontrareloj.jpg",cantidad:1},    
    
];



function impri (){   
    
    impresion.innerHTML = "";
 
    productos.forEach((item)=>{         
        
        
        let cre = document.createElement("div");
        cre.innerHTML = "";
        cre.className = "container";
        
        let botonAgregar = document.createElement("button");
        botonAgregar.className = "btn btn-secondary";
        botonAgregar.innerText = "Agregar";
        
        let e = document.createElement("div");
        e.innerHTML = `  
             
        <h5> Marca: ${item.marca}</h5>
        <h5> Modelo: ${item.modelo}</h5>
        <h5> Precio: $ ${item.precio}</h5>     
        <h5> Categoria: ${item.especificacion}</h5>                  
         `;
        e.className="card-body";
        e.append(botonAgregar);
        
        let imagen = document.createElement("img");
        imagen.src = item.foto;  
        imagen.className = "card-img-top";
        imagen.alt = item.nombre;


        let carta = document.createElement("div");
        carta.className = "card m-3 p-3";
        carta.style = "width: 20rem";
        carta.append(imagen);
        carta.append(e);
        cre.append(carta);
        impresion.append(cre);                   
        
             
       
        botonAgregar.onclick = () => {               

            let encontrarroducto = carrito.includes(item);            

            const {marca,modelo,precio,especificacion,foto,cantidad} = item;
            new Carrito (item);
            carrito.push(item);            
            console.log(JSON.stringify(carrito));      
                        
            dibujarCarrito();
                                        
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La bicicleta a sido agregada',
                showConfirmButton: false,
                timer: 2500
              })  

              totalCompra(); 
              
              
        };    
        
        

   });     
                 
         
                  
 
 };



