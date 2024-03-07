// định dạng lại chuỗi khi được in ra màn hình 

module.exports = {
  // chuyển đổi thành array với list
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject()); 
  },
  // chuyển đổi thành array với 1 giá trị 
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
