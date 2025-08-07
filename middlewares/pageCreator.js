//defining the pageCreator Middleware
const pageCreator = ( req, res, next ) => {
 console.log("viene usato il page creator")
 next();
}

//export middleware
module.exports=pageCreator;