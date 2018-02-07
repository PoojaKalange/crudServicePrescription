var prescription=
    {
        getPrescription : function(req,res,next)
        {
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('call compData.stored_procedure_patient_info()',function(err,prescription_D) {

//CALL GetSportDetails()
                
            if(err)
            {
                console.log(err);
                return next("Mysql error, check your query");
            }
                    
                    var  prescriptionData=JSON.stringify(prescription_D);
          
                    var dpr=JSON.parse(prescriptionData);
                    console.log(dpr);
                    
                    
                    
                     res.send(prescription_D);
    
                    //res.json(spr);
         
                });

            });
        }
    }

//module.exports.router = router;
module.exports = prescription;