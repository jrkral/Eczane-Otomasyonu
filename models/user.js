const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tc:{
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  debts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Debt',
  }],
  admin:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  },
}, { versionKey: false, timestamps: true }); // versiyon tutma ama oluşturma tarihi ve update tarihlerini tut dedik.

UserSchema.pre('save', function (next) {
  // şifreyi hash ediyoruz.
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10, (err, hash) => {
    // 10 yazan yer  şifrenin zorluğunu arttırıyor.
    user.password = hash;
    next();
  });

})

const User = mongoose.model('User', UserSchema);
module.exports = User;
