
const inventoryModule = require('../../models').inventoryModel


module.exports = {
    async getInventoryData(){
        return await inventoryModule.findAll()
    },

    async getInventoryByMedicineId(medicinId){
        return await inventoryModule.findOne({where:{medicine_id:medicinId}})
    },

    async getInventoryDataById(id){
        return await inventoryModule.findOne({where:{id:id}})
    },

    async createInventory(data){
      return await inventoryModule.create(data)
    },

    async updateInventoryData(inventoryId, data) {
        return await inventoryModule.update(
          {
            title: data.title, 
            desc: data.desc,
            price:data.price,
            status:data.status,
            is_available:data.is_available,
            updated_at: new Date()
          },
          {
            where: {
              id: inventoryId
            }
          });
      },

    async deleteInventoryDataById(id){
      return await inventoryModule.update({is_inventory:false},{where:{id:id}})
    }
    
}