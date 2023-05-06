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
    async createInventory(req,res){
        try{
            let title = req.body.title
            let medicine_id = req.body.medicine_id
            let amount = req.body.amount
            let status = req.body.status

            if (!medicine_id)
            return res.status(422).send({ code: 422, status: "failed", msg: "Email is required" });
      

        }catch (err) {
            return res.status(422).send({ code: 422, status: "failed", msg: err.message });
          }
    }
}