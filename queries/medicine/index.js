const medicineModule = require('../../models').medicineModel

module.exports = {
    async getMedicineData(){
        return await medicineModule.findAll()
    },

    async getmedicineByCode(code){
        return await medicineModule.findOne({where:{code:code}})
    },

    async createmedicine(data){
        return await medicineModule.create(data)
    }
}