const validator = require('validator');
const response = require('../response');
const fs = require('fs');
const path = require('path');


const file_path = path.join(process.cwd(), "./pray.json");

const get = (req, res) => {

    if(req.body){

        if(req.body.doa){

            let doa = req.body.doa;



            fs.readFile(file_path, 'utf-8', (err, data) =>{

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



        }else{

            response("-", 400, "Pastikan request benar!", req, res);

        }

    }else{

        response("-", 400, "Pastikan request benar!", req, res);

    }

};


module.exports = {get};