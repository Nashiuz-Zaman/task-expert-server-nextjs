import { Schema, model } from 'mongoose';

const pinnedTaskSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   taskId: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
});

const PinnedTaskModel = model('PinnedTask', pinnedTaskSchema);
export default PinnedTaskModel;
