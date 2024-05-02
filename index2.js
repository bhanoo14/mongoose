const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/playground";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to the dataBase");
  })
  .catch((err) => {
    console.log("Something went wrong while connecting to DataBase", err);
  });

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Data Structures and Algorithms in Java",
    author: "David Wilson",
    tags: ["Java", "Data Structures", "Algorithms"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

// querying the Data from MongoDb
// async function getCourse(){
//     const result = await Course.find({
//         // price: { $gt: 10, $lte: 30}
//         // price: { $in: [30, 20, 50, 60]}
//     }).limit(10).sort({name: 1, author: 1}).select({ name: 1 })

//     console.log(result);
// }

// getCourse()

// Query Aproach First Update
// Updating tha Data from MongoDb
// async function updateCourse(id){
//     const course = await Course.findById(id)
//     if(!course) return

//     // Aproach One
//     course.author = "Bhaanoo Vishwakarma",
//     course.price = 60000

//     // Aproach Two
//     // course.set({
//     //     author: "Bhaanoo Vishwakarma",
//     //     isPublished: true
//     // })

//     const result = await course.save()
//     console.log(result);
// }

// updateCourse()

(async () => {
  Course.updateOne({}, {});
})();
