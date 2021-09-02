import mongoose, { Schema } from 'mongoose';
const Schema = mongoose.Schema;

const CompanyModel = new Schema({

    category_code: {type:String, required:true},
    number_of_employees:{type: Number, required: true},
    founded_year: {type:Number, required: true},
    founded_month: { type: Number, required:true},
    founded_day: { type: Number, required:true},

})
module.exports = mongoose.model('company', CompanyModel);
const 