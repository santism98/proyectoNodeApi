const jwt=require('jsonwebtoken');
const validarJWT=(req, res, next)=>{
    const token= req.header('x-token')
    console.log(token)

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'no hay token en la peticion'
        })
    }

    try {
        const payload=jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.id=payload()
        
    } catch (error) {
        return res.status(500).jason({
            ok: false,
            msg: 'Token no válido'
        })
        
    }

    next()
}


module.exports={
    validarJWT
}