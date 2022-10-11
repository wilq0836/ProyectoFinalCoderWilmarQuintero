
const elementoAgregado = document.getElementById("items"); 

function dibujarCarrito() {  
   
  elementoAgregado.innerHTML = "";
   
  carrito.forEach(
    
      (e) => {    
         
          
          let renglonesCar = document.createElement("tr");
            
              renglonesCar.innerHTML = `
              <td>${e.marca}</td>
              <td id = "cantidad-${e.modelo}">${e.modelo}</td>
              <td><input id="cantidad-producto-${e.modelo}" type="number" value="${e.cantidad}" min="1" max="100" step="1" style="width: 50px;"/></td>              
              <td>${e.precio}</td>         
              <td><button id="eliminar-${e.modelo}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
              <td id = "total-${e.modelo}">${e.cantidad*e.precio}</td>    
          `;          

           elementoAgregado.append(renglonesCar);            
           
           let sumaProdu = document.getElementById(`cantidad-producto-${e.modelo}`);
           sumaProdu.addEventListener('click', () => {
           
           let valor = sumaProdu.value;
           e.cantidad = valor;
           
           dibujarCarrito(); 
           totalCompra(); 
           
           });       
           

           let botonEliminarProducto = document.getElementById(`eliminar-${e.modelo}`);
           botonEliminarProducto.addEventListener('click', () => {
           //alert("Hicimos click en la posicion  " + carrito.indexOf(e));

              let pocision  =  carrito.indexOf(e);
              carrito.splice( pocision,1);           
              
              dibujarCarrito();
              totalCompra();
          });
                            

      });
    
};

let valor2 = 0;

function totalCompra(){

    let valor = 0;

    carrito.forEach((item)=>{    
    let totalCompra = document.getElementById(`total-${item.modelo}`);
    total = totalCompra.innerText;    
    localStorage.setItem(`${item.modelo}`,total);
    valor = valor + parseInt(localStorage.getItem(`${item.modelo}`));   

    });   

     
    const cerrarCompra = document.getElementById("total-compra");
    cerrarCompra.innerHTML = "";
    let totalvalor = document.createElement("h5"); 
    totalvalor = valor;   
    cerrarCompra.append(totalvalor);
    dibujarCarrito(); 
    valor2 = valor;

};



function completarCompra (){
    //alert("total compra = "+ valor2); 
    Swal.fire({
        title: 'Muchas gracias por comprar en Bikestwogo',
        text:  'Su compra total es: $'+valor2+' Este pedido sera entregado en 5 dias habiles',
        imageUrl: './img/fondo.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: '#8CD4F5'     
      })
      valor2 = 0;
    
    localStorage.clear();  
    //Aqui se va a confirmar 
    carrito.splice(0,carrito.length);
    
    totalCompra();
    dibujarCarrito();    
    inicio();

};

 


      

const modal = document.querySelector("#portafolio");
const modal2 = document.querySelector("#componentes")
const modal3 = document.querySelector("#componentes1")
let h ;

function crearModal1(){
    impresion.innerHTML = "";
    h = "Clothes";
    imprimirArticulos();
};


function crearModal(){
    impresion.innerHTML = "";
    h = "Electronics";
    imprimirArticulos();

};


const portafolio1 = document.getElementById("galeria-port");
const servicios = document.getElementById("about-services");

let crear = 0;

function portafolio (){

const imge = ["./img/imag1.jpg","./img/imag2.jpg","./img/imag3.jpg","./img/imag4.jpg"];


while (crear <=1){
for (const i of imge){


let portafolio = document.createElement("div");
portafolio.className = "imagen-port";


let im = document.createElement("img");
im.src = i;


let hover = document.createElement("div");
hover.className = "hover-galeria";


let icon = document.createElement("img");
icon.src = "./icon/ciclismo.png";

let parrafo = document.createElement("p");
parrafo.innerText = "Nuestro Trabajo";


portafolio.append(im);
hover.append(icon);
hover.append(parrafo);
portafolio.append(hover);
portafolio1.append(portafolio);

};


let servi = document.createElement("div");
servi.className = "servicio-cont";

let servicioInd = document.createElement("div");
servicioInd.className = "servicio-ind";

let imagen2 = document.createElement("img");
imagen2.src = "./img/imag2.jpg";

let p = document.createElement("h3");
p.innerText = "Servicio Mecanico";



servicioInd.append(imagen2);
servicioInd.append(p);
servi.append(servicioInd);
servicios.append(servi);

crear +=1; 

};

portafolio1.addEventListener("click",()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        background:'#FFF',
        text: 'Pronto tendremos mas productos en nuestro portafolio!',
        confirmButtonColor: '#8CD4F5'
        

        
      })
});

};




//Se aplica fecth para pedir de un servisor externo los productos 

const api = [];

function imprimirArticulos (){

    productos.splice(0,productos.length);

    const pedirPost = async () => {
    const resp =
    
    await fetch(  'https://api.escuelajs.co/api/v1/products')
    
    const data = await resp.json()    
    
    let filtrar = data.filter (item => item.category.name === h );
    
    filtrar.forEach((item)=> {

            const u = {marca:item.title,modelo:item.description,precio:item.price*4300,especificacion:item.category.name,foto:item.images,cantidad:1};
            productos.push(u);
            console.log(u);
            impri();

          })
        
    };

    
pedirPost();    

   
};


function inicio(){
    impresion.innerHTML ="";
    portafolio1.innerHTML = "";
    servicios.innerHTML = "";
    portafolio1.innerHTML ="";
    crear = 0;
}






    
    
    

     


