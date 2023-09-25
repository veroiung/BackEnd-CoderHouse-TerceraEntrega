//TODO: Completar Modelo con Mongoose:

import mongoose from "mongoose";


const collectionName = 'courses';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true,
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    unique: true,
    required: true,
};


const courseSchema = new mongoose.Schema({

title: stringTypeSchemaNonUniqueRequired,
description: stringTypeSchemaNonUniqueRequired,
teacherName: stringTypeSchemaNonUniqueRequired,
src/services/db/models/students.jsstudents: {
    type: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "courses"
            }
        }
    ],
    default:[],
    require: true
}

});


// exportar
export default curseModel = mongoose.model(collectionName, courseSchema)