const koneksi = require("../config/database");
const identitasModels = require("../models/index");

const controller = {
        inputData : async (req, res) => {
            try {
                const identitas = await identitasModels.create({
                nama: req.body.nama,
                about: req.body.about,
                phone: req.body.phone,
                email: req.body.email,
                alamat: req.body.alamat
            });
                res.json({
                    status: 200,
                    message: "Input Berhasil",
                    data: identitas
                })
            } catch (error) {
                res.json({
                    status: 404,
                    message: error.message
                })
            }
          },
      
      getData : async (req, res) => {
        const identitas = await identitasModels.findAll();
        if (identitas.length > 0 ){
            res.json({
                status: 200,
                message: "Berhasil",
                data: identitas
            })
        }else{
            res.json({
                status: 200,
                message: "Gagal",
                data: []
            })
        }
      },
      
     putData : async (req, res) => {
        
            try {
                const identitas = await identitasModels.update({
                nama: req.body.nama,
                about: req.body.about,
                phone: req.body.phone,
                email: req.body.email,
                alamat: req.body.alamat
            },{
                where: {
                    id: req.params.id
                }
            });
        res.json({
            status: 200,
            message: "Update Berhasil",
            data: identitas
        })
    } catch (error) {
        res.json({
            status: 404,
            message: error.message
        })
    }
        
    
      },
      
     deleteData : async (req, res) => {
       try {
        const identitas = await identitasModels.destroy({
            where: {
                id: req.params.id
            }
        });
    res.json({
        status: 200,
        message: "Delete Berhasil",
        data: identitas
    })
       } catch (error) {
        res.json({
            status: 404,
            message: error.message
        })
       }
       
      },
      detailData : async (req, res) => {
        try {
         const identitas = await identitasModels.findAll({
             where: {
                 id: req.params.id
             }
         });
    if (identitas.length > 0) {
        res.json({
            status: 200,
            message: "Berhasil",
            data: identitas
        })
    } else {
        res.json({
            status: 200,
            message: "Gagal",
            data: []
        })
    }
        } catch (error) {
         res.json({
             status: 404,
             message: error.message
         })
        }
        
       }
 }

 module.exports = controller;