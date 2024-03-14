import TaskModel from './../../../models/Task/Task.js';

const getTasks = async (req, res) => {
   try {
      // verify
      const email = req.query.email;
      if (req.decoded.email !== email) {
         return res
            .status(403)
            .send({ status: 'error', message: 'Forbidden Access' });
      }

      const filter = { email: email };
      const sortOption = { lastUpdated: 1 };
      
      const tasks = await TaskModel.find(filter).sort(sortOption);
      return res.send({ status: 'success', tasks });
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error', errorMsg: error.message });
   }
};

export default getTasks;
