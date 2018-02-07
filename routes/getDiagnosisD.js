var diganosis=
    {
        getDiganosis : function(req,res,next)
        {
             patientId=req.params.patientId;
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('call compData.storedProcedureDiagnosisDescription(?)',[patientId],function(err,diganosis_D) {

//CALL GetSportDetails()
                
            if(err)
            {
                console.log(err);
                return next("Mysql error, check your query");
            }
                    
                    var  prescriptionData=JSON.stringify(diganosis_D);
          
                    var diganosisdesc=JSON.parse(prescriptionData);
                    console.log(diganosisdesc);
                    
                    
                    
                     res.send(diganosis_D);
    
                    //res.json(spr);
         
                });

            });
        }
    }

//module.exports.router = router;
module.exports = diganosis;