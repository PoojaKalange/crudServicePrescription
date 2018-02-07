var BuyNowD={
    postBuyNow : function(req,res,next)
    {
         var buyData =
        {
            eventID:req.body.eventID,
            tokend:req.body.tokend,
            quantity:req.body.quantity,
           // status:req.body.status,
            attributeId:req.body.attributeId
        }
    
        req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");
      
        
        var query = conn.query('CALL addToCartDetails(?,?,?,?,@cartId,@stockstatusId); SELECT @cartId AS cartId, @stockstatusId AS stockstatusId',              [buyData.eventID,buyData.tokend,buyData.quantity,buyData.attributeId],function(err,buynowD){

                
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            console.log(buynowD);
           //  console.log(timeInMss);
            res.send(buynowD);
           
                });

            });
    }
}

module.exports = BuyNowD;