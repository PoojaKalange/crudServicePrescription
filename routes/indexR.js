var express = require('express');
var router  =  express.Router();


//For get routers files call
var prescriptionD = require('./getPrescriptionDetails.js');
var diganosisD = require('./getDiagnosisD.js')
var medicationD = require('./getMedicationDetails.js')

/*Access get routes from here*/
router.get('/api/prescriptionD', prescriptionD.getPrescription);
router.get('/api/diagnosisD/:patientId',diganosisD.getDiganosis);
router.get('/api/medicationD/:patientId',medicationD.getMedication);




module.exports = router;


/*for post routers file call
var BuyNowD = require('./BuyNowPost.js');




 * Routes that can be accessed by any one
 
router.post('/login', auth.login);
*/











/*Access post routes from here*/
//router.post('/api/BuyNow',BuyNowD.postBuyNow);


