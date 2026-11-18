import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:String,
    description:String
})

const NoteModel = mongoose.model("note",noteSchema);

export default NoteModel;