const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/myCourse";

mongoose
  .connect(url)
  .then(() => console.log("connected to mongoDB"))
  .catch(() => console.log("could not connect to mongoDB"));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  price: number,
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function saveData() {
  const course = Course({
    name: "Express Js",
    author: "Bhaanoo Vishwakarma",
    tags: ["backend", "API"],
    isPublished: true,
  });

  const result = await course.save();
}

saveData();
