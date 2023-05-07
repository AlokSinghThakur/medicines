const inventoryQueries = require('../../queries/inventory')


module.exports = {
    async getInventory(req,res){
        try{
            let inventoryData = await inventoryQueries.getInventory();
            return res
            .status(200)
            .send({ code: 200, status: "success", data: inventoryData });

        } catch (err) {
            return res.status(422).send({ code: 422, status: "failed", msg: err.message });
          }
    },
    
    async getInventoryById(req,res){
        try{
            let id = req.body.id
            let inventoryData = await inventoryQueries.getInventoryDataById(id)
            return res
            .status(200)
            .send({ code: 200, status: "success", data: inventoryData });

        }catch (err) {
            return res.status(422).send({ code: 422, status: "failed", msg: err.message });
          }
    },
    
    async createInventory(req,res){
        try{
            let title = req.body.title
            let medicine_id = req.body.medicine_id
            let amount = req.body.amount
            let status = req.body.status

            if (!medicine_id)
            return res.status(422).send({ code: 422, status: "failed", msg: "Email is required" });
            
            let inventoryExist = await inventoryQueries.getInventoryByMedicineId(medicine_id)
            if (inventoryExist && inventoryExist != null) {
                return res
                  .status(422)
                  .send({ code: 422, status: "failed", msg: "Medicine Already exist" });
              }
            let data = {
                title:title,
                medicine_id:medicine_id,
                amount:amount,
                status:status
            }

            let InventoryCreate = await inventoryQueries.createInventory(data)
            return res
            .status(200)
            .send({ code: 200, status: "success", data: InventoryCreate });
       

        }catch (err) {
            return res.status(422).send({ code: 422, status: "failed", msg: err.message });
          }
    },
    
    async updateInventory(req,res){
        let inventoryId = req.body.id;
        let data = rwq.body

        if (!inventoryId) res.status(422).send({ code: 422, status: 'failed', msg: 'Data is required' });

        try{
           
        for (let i in data) {
            if (!data[i]) delete data[i]
        }

        await inventoryQueries.updateInventoryData(inventoryId, data)
        let MedicineList = await inventoryQueries.getInventoryDataById(inventoryId)
        return res.status(200).send({ code: 200, status: 'success', msg: "feedback added successfully", data: MedicineList });
        }catch (err) {
            return res.status(422).send({ code: 422, status: "failed", msg: err.message });
          }
    },

    async deleteInventory(req,res){
        let id = req.body.id;
        if (!id) return res.status(422).send({ code: 422, status: 'failed', msg: 'Data is required' })
         
        try{

            await inventoryQueries.deleteInventoryDataById(id)
            return res.status(200).send({
                code: 200,
                status: "success",
                msg: "medicine deleted successfully",
              });
        }catch (err) {
            return res.status(422).send({ code: 422, status: "failed", msg: err.message });
          }

    }
}