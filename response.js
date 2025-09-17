const response = (bacaan_doa, responseCode, message, req, res) => {

    let payload = {

    
        doa : bacaan_doa,
        message : message,
        response : responseCode

    }

    res.status(responseCode).json(payload);

};



module.exports = response;