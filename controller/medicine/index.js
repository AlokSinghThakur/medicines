const medicineQueries = require("../../queries/medicine");

module.exports = {
  async createMedicineData(req, res) {
    try {
      let title = req.body.title;
      let code = req.body.code;
      let desc = req.body.desc;
      let price = req.body.price;
      let status = req.body.status;
      let is_available = req.body.available;

      if (!title)
        return res
          .status(422)
          .send({ code: 422, status: "failed", msg: "title is required" });

      let medicineExist = await medicineQueries.getmedicineByCode(code);

      if (medicineExist && medicineExist != null) {
        return res
          .status(422)
          .send({ code: 422, status: "failed", msg: "Medicine Already exist" });
      }

      let data = {
        title: title,
        code: code,
        desc: desc,
        price: price,
        status: status,
        is_available: is_available,
      };

      let medicineCreate = await medicineQueries.createmedicine(data);
      return res
        .status(200)
        .send({ code: 200, status: "success", data: medicineCreate });
    } catch (err) {
      console.log(err);
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },

  async getMedicine(req, res) {
    try {
      let medicineData = await medicineQueries.getMedicineData();
      return res
        .status(200)
        .send({ code: 200, status: "success", data: medicineData });
    } catch (err) {
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },

  async getMedicineById(req, res) {
    let id = req.body.id;
    try {
      let medicineData = await medicineQueries.getMedicineDataById(id);
      return res
        .status(200)
        .send({ code: 200, status: "success", data: medicineData });
    } catch (err) {
      return res
        .status(422)
        .send({ code: 422, status: "failed", msg: err.message });
    }
  },

  async updateMedicine(req, res) {
    let medicineId = req.body.medicineId;
    let data = req.body;

    if (!medicineId)
      res.status(422).send({ code: 422, status: "failed", msg: "Data is required" });

    try {
      for (let i in data) {
        if (!data[i]) delete data[i];
      }

      await medicineQueries.updateMedicineData( medicineId,data );
      let MedicineList = await medicineQueries.getMedicineDataById(medicineId);
      return res.status(200).send({code: 200,status: "success",msg: "feedback added successfully",data: MedicineList, });
    } catch (err) {
      return res.status(422).send({ code: 422, status: "failed", msg: err.message });
    }
  },
  async deleteMedicine(req, res) {
    let medicineId = req.body.medicineId;
    if (!medicineId) return res.status(422).send({ code: 422, status: 'failed', msg: 'Data is required' })
       
    try {
      await medicineQueries.deleteMedicine(medicineId)
      return res.status(200).send({code: 200,status: "success",msg: "medicine deleted successfully"});
    } catch (err) {
      return res.status(422).send({ code: 422, status: "failed", msg: err.message });
    }
  },
};
