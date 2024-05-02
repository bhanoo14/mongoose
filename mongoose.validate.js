const mongoose = require("mongoose");
const { type } = require("os");

const uri = "mongodb://localhost:27017/playground";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to DataBase", err);
  });

const courseSchema = new mongoose.Schema({
  name: { type: String, require: true },
  author: String,
  price: Number,
  tags: ["backend", "nodejs"],
  isPublished: true,
});

const Course = mongoose.model("Course", courseSchema);

async function saveData() {
  const course = Course({
    name: "react",
    author: "Mosh",
    price: 50000,
    tags: ["frontend", "javascript"],
    isPublished: true,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
