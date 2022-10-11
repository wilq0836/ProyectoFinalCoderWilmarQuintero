
//llamo los selectores 
const valor = document.getElementById("opcion");
const objeto = document.getElementById("inventario"); 
const impresionObjeto = document.getElementById("inventario2");
const componentes = document.getElementById("componentes");


//Esta funcion se podria optimizar con data.json pero se dejo con el fin de mostrar las dos opciones posibles de codigo

function cambio1(){

componentes.innerHTML ="";
objeto.innerHTML="";

   //Le asigno las marcas disponibles y creo un select
       marcaBicicleta.forEach((item)=>{
       let infor  = document.createElement ("li");      
       infor.className = "dropdown-item"; 
       infor.id =  `${item}`; 
       infor.innerHTML = `${item}`;               
       objeto.append(infor); 
       const ingreso2 = document.getElementById( `${item}`);
       ingreso2.addEventListener (  "click", ()=>{
       let obtener = ingreso2.innerHTML;
      

        switch (obtener){   

           case "scott":            
                 
               productosScott.forEach((item)=> {
               const { marca,modelo,precio,especificacion,foto} = item;
               new Bicicleta (item)
               productos.push(item);  });//Operadores avanzados
               impri();                                  

           break;

            
           case "colnago":
               
               productosColnago.forEach((item)=> {
               const { marca,modelo,precio,especificacion,foto} = item;
               new Bicicleta (item)
               productos.push(item);  });
               impri(); 
               
               break;
               

       
           case "pinarello":
               
                   productosPinarello.forEach((item)=> {
                   const { marca,modelo,precio,especificacion,foto} = item;
                   new Bicicleta (item)
                   productos.push(item);  });
                   impri();  
                   
               break;

       
           case "trek":
              
               productosTrek.forEach((item)=> {
                   const { marca,modelo,precio,especificacion,foto} = item;
                   new Bicicleta (item)
                   productos.push(item);  });
                   impri();  
                   
               break;

       
           case "giant":
               
               productosGiant.forEach((item)=> {
                   const { marca,modelo,precio,especificacion,foto} = item;
                   new Bicicleta (item)
                   productos.push(item); 
                 });
                   impri();   
                  
               break;
                      
               };

               productos.splice(0,productos.length);

            });
       
      
        });  


};



//Se trae del data.json los articulos llamados


const listaD = ["Marcos", "Repuestos","Implementos","Cascos"]


function imprimirArticulosJSON (){
    impresion.innerHTML ="";
    objeto.innerHTML="";
    componentes.innerHTML ="";
   

       listaD.forEach((item)=>{
       let infor  = document.createElement ("li");      
       infor.className = "dropdown-item"; 
       infor.id =  `${item}`; 
       infor.innerHTML = `${item}`;               
       componentes.append(infor); 
       const ingreso2 = document.getElementById( `${item}`);
       ingreso2.addEventListener (  "click", ()=>{
       let obtener = ingreso2.innerHTML;
       

   
   fetch("/data.json")
   .then((res) => res.json())   
   .then((data) => {

       let filtrar = data.filter (item => item.especificacion === obtener );
       filtrar.forEach((item)=> {
          productos.push(item);
          impri();          

         })
   });
   productos.splice(0,productos.length);

});

});


}






        
