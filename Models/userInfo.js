const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
    bio: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    interestedGenres: [{
        type: String,
        enum: ["Fiction", "Non-Fiction", "Fantasy", "Mystery", "Science Fiction", "Biography", "History", "Romance"],
    }]
});

userProfileSchema.methods.isProfileComplete = function() {
    return this.fullName && this.bio && this.phoneNumber && this.gender && this.interestedGenres && this.interestedGenres.length > 0;
};

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
