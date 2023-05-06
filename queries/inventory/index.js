const inventoryModule = require('../../models').inventoryModel


module.exports = {
    async getInventoryData(){
        return await inventoryModule.findAll()
    },

    async getInventoryDataById(medicinId){
        return await inventoryModule.findOne({where:{medicine_id:medicinId}})
    }
}