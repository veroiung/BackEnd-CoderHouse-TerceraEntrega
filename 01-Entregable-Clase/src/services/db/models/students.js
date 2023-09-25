//TODO: Completar Modelo con Mongoose:

import mongoose from "mongoose";


const collectionName = 'students';

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
    
    name: stringTypeSchemaNonUniqueRequired,
    lastName: stringTypeSchemaNonUniqueRequired,
    age:
    courses: stringTypeSchemaNonUniqueRequired,
    students: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "students"
                }
            }
        ],
        default:[],
        require: true
    }
    
    });
    
    
    // exportar
    export default curseModel = mongoose.model(collectionName, courseSchema)