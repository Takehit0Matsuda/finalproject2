import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "user"
    }
});

// {
//     "email": "take_2@test.com",
//     "password": "password"
//     "role": "admin/user"
// }

// UserSchema.pre("save", async function(next) {
//     if (this.isModified("password") || this.isNew) {
//         const hash = await bcrypt.hash(this.password, 10)
//         this.password = hash
//         next()
//     } else {
//         return next()
//     }
// })

// UserSchema.methods.comparePassword = function(password, cb) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch)
//     })
// };

// UserSchema.methods.isAdmin = function() {
//     return this.role === "admin";
// }

let user_model = mongoose.models.users || mongoose.model("User_model", schema);
export default user_model;