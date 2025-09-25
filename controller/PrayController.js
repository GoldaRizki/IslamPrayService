const validator = require('validator');
const response = require('../response');
const fs = require('fs');

const get = (req, res) => {

    if(req.body){

        if(req.body.doa){

            let doa = req.body.doa;



            fs.readFile('./pray.json', 'utf-8', (err, data) =>{

                if (err) {
                    response('', 500, 'Error server' + err.message, req, res);
                }


                let data_doa = JSON.parse(data);

                let hasil_doa = data_doa.find( (x) => x.doa === doa)

                if(hasil_doa){

                    response(hasil_doa.bacaan, 200, 'berhasil', req, res);

                }else{

                    response('', 404, 'doa tidak ditemukan', req, res);

                }


            });


            //let data_doa = JSON.parse(file_doa);
            //response(JSON.stringify(data_doa), 200, 'berhasil', req, res);

            /*

            if(doa === 'do\'a sebelum makan'){
                response('ALLOOHUMMA BAARIK LANAA FIIMAA RAZAQTANAA WAQINAA ‘ADZAA BANNAAR', 200, 'Do\'a berhasil dikirimkan', req, res);
            }else if(doa === 'do\'a sebelum tidur'){
                response('Bismikallohumma ahya wa amuut', 200, 'Do\'a berhasil dikirimkan', req, res);
            }else{
                response('-', 404, 'Do\'a sepertinya belum tersedia', req, res);
            }
                */

        }else{

            response("-", 400, "Pastikan request benar!", req, res);

        }

    }else{

        response("-", 400, "Pastikan request benar!", req, res);

    }

};


module.exports = {get};