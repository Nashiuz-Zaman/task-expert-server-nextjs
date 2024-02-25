// import
import UserModel from './../../../models/User/User.js';

const getMembers = async (req, res) => {
   const filter = { role: 'member' };
   const members = await UserModel.find(filter);

   res.send(members);
};

export default getMembers;
