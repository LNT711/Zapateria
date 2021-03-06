import {Schema} from "mongoose";

export const UserSchema = new Schema ({

    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    state: {
        type: String, 
        required: true,
        default: 'Active',
        enum : ['Active', 'inactive']
    },
    role: {
        type: String,
        required: true,
        default: 'Customer',
        enum: ['Customer', 'Manager']
    }

});


