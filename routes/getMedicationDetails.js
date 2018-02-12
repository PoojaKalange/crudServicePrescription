var medication=
    {
        getMedication : function(req,res,next)
        {
             patientId=req.params.patientId;
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('call compData.storedProcedureMedicinesDetails(?)',[patientId],function(err,medication_D) {

//CALL GetSportDetails()
                
            if(err)
            {
                console.log(err);
                return next("Mysql error, check your query");
            }
                    
                    var  medicationData=JSON.stringify(medication_D);
          
                    var medicationdesc=JSON.parse(medicationData);
                    console.log(medicationdesc);
                    
                    
                    
                     res.send(medication_D);
    
                    //res.json(spr);
         
                });

            });
        }
    }

//module.exports.router = router;
module.exports = medication;