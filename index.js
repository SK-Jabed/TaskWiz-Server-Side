require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.baizo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    // await client.connect();

    // All Collections of Database
    const db = client.db("taskWizDB");
    const userCollection = db.collection("users");
    const taskCollection = db.collection("tasks");

    // Save All Users Data on Database
    app.post("/users", async (req, res) => {
      const user = req.body;

      const query = { email: user.email };

      // Check if User is already exist in DB
      const isExist = await userCollection.findOne(query);

      if (isExist) {
        return res.status(200).send({
          success: true,
          exists: true,
          message: "User already exists",
        });
      }

      const result = await userCollection.insertOne(user);
      res.status(201).send({
        success: true,
        exists: false,
        insertedId: result.insertedId,
      });
    });

    // Get All Users Data from Database
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    // ✅ **1. Create a Task (POST)**
    app.post("/tasks", async (req, res) => {
      const { title, description, category, priority, dueDate, userId } =
        req.body;

      if (!title || title.length > 50) {
        return res
          .status(400)
          .json({ message: "Title is required and max 50 characters." });
      }

      // const newTask = {
      //   title,
      //   description: description?.substring(0, 200),
      //   category: category || "To-Do", // Default to To-Do
      //   priority: priority || "Medium",
      //   dueDate: dueDate || null,
      //   timestamp: new Date(),
      //   userId,
      // };
      const newTask = {
        title,
        description: description?.substring(0, 200),
        category: category || "To-Do",
        priority: priority || "Medium",
        dueDate: dueDate || null,
        timestamp: new Date(),
        userId,
        position: tasks.length, // Default position
      };

      const result = await taskCollection.insertOne(newTask);
      res.status(201).json({ success: true, insertedId: result.insertedId });
    });

    // ✅ **2. Get All Tasks (GET)**
    app.get("/tasks", async (req, res) => {
      const tasks = await taskCollection.find().toArray();
      res.send(tasks);
    });

    app.put("/tasks/updatePositions", async (req, res) => {
      const { tasks } = req.body;
      const bulkOps = tasks.map((task) => ({
        updateOne: {
          filter: { _id: new ObjectId(task._id) },
          update: { $set: { position: task.position } },
        },
      }));
      await taskCollection.bulkWrite(bulkOps);
      res.json({ success: true });
    });

    //    app.get("/tasks", async (req, res) => {
    //   const { userId } = req.query;
    //   if (!userId) {
    //     return res.status(400).json({ message: "User ID is required" });
    //   }

    //   const tasks = await taskCollection.find({ userId }).toArray();
    //   res.send(tasks);
    // });

    // ✅ **3. Update a Task (PUT)**
    app.put("/tasks/:id", async (req, res) => {
      const { id } = req.params;
      const { title, description, category, priority, dueDate } = req.body;

      const updateFields = {
        ...(title && { title }),
        ...(description && { description: description.substring(0, 200) }),
        ...(category && { category }),
        ...(priority && { priority }),
        ...(dueDate && { dueDate }),
      };

      const result = await taskCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateFields }
      );

      res.json({ success: result.modifiedCount > 0 });
    });

    // ✅ **4. Delete a Task (DELETE)**
    app.delete("/tasks/:id", async (req, res) => {
      const { id } = req.params;
      const result = await taskCollection.deleteOne({ _id: new ObjectId(id) });

      res.json({ success: result.deletedCount > 0 });
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from Job Task Server...");
});

app.listen(port, () => {
  console.log(`Job Task's Server is running on port ${port}`);
});
