const validator = require('validator');
const response = require('../response');

const get = (req, res) => {

    if(req.body){

        if(req.body.doa){

            let doa = req.body.doa

            if(doa === 'do\'a sebelum makan'){
                response('ALLOOHUMMA BAARIK LANAA FIIMAA RAZAQTANAA WAQINAA ‘ADZAA BANNAAR', 200, 'Do\'a berhasil dikirimkan', req, res);
            }else if(doa === 'do\'a sebelum tidur'){
                response('Bismikallohumma ahya wa amuut', 200, 'Do\'a berhasil dikirimkan', req, res);
            }else{
                response('-', 404, 'Do\'a sepertinya belum tersedia', req, res);
            }

        }else{

            response("-", 400, "Pastikan request benar!", req, res);

        }

    }else{

        response("-", 400, "Pastikan request benar!", req, res);

    }

};


module.exports = {get};