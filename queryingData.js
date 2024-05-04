const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/myCourse";

mongoose
  .connect(url)
  .then(() => console.log("connected to mongoDB"))
  .catch(() => console.log("could not connect to mongoDB"));

const Course = mongoose.model("Course", courseSchema);

async function getCourse() {
  //   const data = await Course.find({name: id})
  const data = await Course.find()
    .limit(5) // it will limit the find object by 5
    .sort({ name: 1 }) // it will sort by name
    .select({ _id: -1 }); //this will ignore that field
  console.log(data);
}

getCourse();
