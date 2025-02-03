import jwt from 'jsonwebtoken';


export const jwtSign = (payload)=>{
  return jwt.sign(payload,process.env.SECRET_KEY || 'HP001',{expiresIn:'1d'});
}

export const jwtDecode = (token)=>{
    return jwt.verify(token,process.env.SECRET_KEY || 'HP001')
}