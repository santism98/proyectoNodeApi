const urlBase='http://localhost:3000/api'
const consulta = async(url,method,body) => {
    let options={}
    if(method=='post' || method=='put'){
        //const {servicio,descripcion}=body
       const data={...body};
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }
    if(method=='delete'){
        options={
            method: method, //mirar si hay que mandar mas cosas en el delete
        }
    }
    if(method=='get'){
        options={
            method: method,
        }
    }
      return await fetch(`${urlBase}${url}`,options);
}
module.exports={
    consulta
}