import mongoose from "mongoose";


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
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

UserSchema.methods.isAdmin = function() {
    return this.role === "admin";
}

let UserModel;

try {
    UserModel = mongoose.model("User_model");
} catch (error) {
    UserModel = mongoose.models.User || mongoose.model("User_model", UserSchema);
}

export default UserModel