const {infoHandlers, getAllDoctorsHandler,getServicesHandler} = require('./botHandlers');

try {
    getServicesHandler.getServices
    getAllDoctorsHandler.getDoctors;
    infoHandlers.botInfoMessages;

} catch (e) {
    console.log(e);
}




