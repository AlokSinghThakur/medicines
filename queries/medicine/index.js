const medicineModule = require('../../models').medicineModel

module.exports = {
    async getMedicineData(){
        return await medicineModule.findAll()
    },

    async getmedicineByCode(code){
        return await medicineModule.findOne({where:{code:code}})
    },

    async getMedicineDataById(id){
        return await medicineModule.findOne({where:{id:id}})
    },

    async createmedicine(data){
        return await medicineModule.create(data)
    },

    async deleteMedicine(id){
        return await medicineModule.update({is_medicine:false},{where:{id:id}})
    },

    async updateMedicineData(id,data){
        return await medicineModule.update({
            title:data.title,
            medicine_id:data.medicine_id,
            amount:data.amount,
            status:data.status
        },{
            where: {
                id:id
            }
        })

    }
}