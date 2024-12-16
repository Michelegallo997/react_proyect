function getAsyncData()  {
    console.log("solicitando datos");
    const promiseData= new Promise((resolve, reject) => {
        const errorFatal= true;
       
        setTimeout(() => {
            if(errorFatal) reject("algo salio mal");
            
        console.log("promesa terminada");
        
        resolve({message: "ok"})
        }, 2000);
        
    })
    console.log("promesa generada");
    
    return promiseData;
}
export default getAsyncData();
// getAsyncData()
// .then((respuesta) =>{ console.log(respuesta)})
// .catch((error) => {console.log(error);
// })

