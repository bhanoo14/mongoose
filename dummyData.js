const mongoose = require('mongoose');
const faker = require('faker');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define your schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

// Create a model
const Course = mongoose.model('Course', courseSchema);

// Generate dummy data
async function generateDummyData() {
  try {
    for (let i = 0; i < 20; i++) {
      const course = new Course({
        name: faker.random.words(),
        author: faker.name.findName(),
        tags: [faker.random.word(), faker.random.word(), faker.random.word()],
        isPublished: faker.random.boolean()
      });
      await course.save();
    }
    console.log('Dummy data generated successfully.');
  } catch (err) {
    console.error('Error generating dummy data:', err);
  } finally {
    mongoose.disconnect();
  }
}

// Call the function to generate dummy data
generateDummyData();
