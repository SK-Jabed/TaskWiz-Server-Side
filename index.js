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
    // const db = client.db("primeScopeNewsDB");
    // const userCollection = db.collection("users");

    // // Save All Users Data on Database
    // app.post("/users", async (req, res) => {
    //   const user = req.body;

    //   const query = { email: user.email };

    //   // Check if User is already exist in DB
    //   const isExist = await userCollection.findOne(query);

    //   if (isExist) {
    //     return res.status(200).send({
    //       success: true,
    //       exists: true,
    //       message: "User already exists",
    //     });
    //   }

    //   const result = await userCollection.insertOne(user);
    //   res.status(201).send({
    //     success: true,
    //     exists: false,
    //     insertedId: result.insertedId,
    //   });
    // });

    // // Get All Users Data from Database
    // app.get("/users", async (req, res) => {
    //   const result = await userCollection.find().toArray();
    //   res.send(result);
    // });

    // // Get a Particular User's Data by Email
    // app.get("/users/:email", async (req, res) => {
    //   const email = req.params.email;

    //   if (!email) {
    //     return res
    //       .status(400)
    //       .send({ success: false, message: "Email is required" });
    //   }

    //   try {
    //     const query = { email: email };
    //     const user = await userCollection.findOne(query);

    //     if (!user) {
    //       return res
    //         .status(404)
    //         .send({ success: false, message: "User not found" });
    //     }

    //     res.send({ success: true, user });
    //   } catch (error) {
    //     console.error("Error fetching user by email:", error);
    //     res
    //       .status(500)
    //       .send({ success: false, message: "Internal Server Error" });
    //   }
    // });

    // // Get All Articles Data from Database
    // app.get("/allArticles", async (req, res) => {
    //   const articles = await articleCollection.find().toArray();
    //   res.send(articles);
    // });

    // // Delete an Article by Its Id
    // app.delete("/articles/:id", async (req, res) => {
    //   const { id } = req.params;

    //   if (!ObjectId.isValid(id)) {
    //     return res.status(400).json({ message: "Invalid article ID." });
    //   }

    //   try {
    //     const result = await articleCollection.deleteOne({
    //       _id: new ObjectId(id),
    //     });

    //     if (result.deletedCount === 0) {
    //       return res.status(404).json({ message: "Article not found." });
    //     }

    //     res.status(200).json({ message: "Article deleted successfully." });
    //   } catch (error) {
    //     console.error("Error deleting article:", error);
    //     res.status(500).json({ message: "Failed to delete the article." });
    //   }
    // });

    // // Update an Article Data by Its Id
    // app.patch("/articles/:id", async (req, res) => {
    //   const { id } = req.params;
    //   const updatedArticle = req.body;

    //   try {
    //     if (!ObjectId.isValid(id)) {
    //       return res.status(400).json({ message: "Invalid Article ID" });
    //     }

    //     delete updatedArticle._id;

    //     const result = await articleCollection.updateOne(
    //       { _id: new ObjectId(id) },
    //       { $set: updatedArticle }
    //     );

    //     res.status(200).json({
    //       message: "Update operation completed",
    //       matchedCount: result.matchedCount,
    //       modifiedCount: result.modifiedCount,
    //     });
    //   } catch (error) {
    //     console.error("Error updating article:", error);
    //     res.status(500).json({ message: "Internal server error" });
    //   }
    // });

    // app.get("/articles/:id", async (req, res) => {
    //   const { id } = req.params;

    //   try {
    //     if (!ObjectId.isValid(id)) {
    //       return res.status(400).json({ message: "Invalid Article ID" });
    //     }

    //     const article = await articleCollection.findOne({
    //       _id: new ObjectId(id),
    //     });

    //     if (!article) {
    //       return res.status(404).json({ message: "Article not found" });
    //     }

    //     res.status(200).json(article);
    //   } catch (error) {
    //     console.error("Error fetching article:", error);
    //     res.status(500).json({ message: "Internal server error" });
    //   }
    // });

    // // Approve an Article
    // app.patch("/articles/approve/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const result = await articleCollection.updateOne(
    //     { _id: new ObjectId(id) },
    //     { $set: { status: "approved" } }
    //   );
    //   res.send(result);
    // });

    // // Delete an Article from Database
    // app.delete("/articles/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const result = await articleCollection.deleteOne({
    //     _id: new ObjectId(id),
    //   });
    //   res.send(result);
    // });

    //  // Save an Added Item to Database (POST Operation)
    // app.post("/addItems", async (req, res) => {
    //   const itemData = req.body;
    //   const addedItem = await itemCollection.insertOne(itemData);
    //   res.send(addedItem);
    // });

    // // Get ALL Items Data from Database (GET Operation)
    // app.get("/allItems", async (req, res) => {
    //   const cursor = itemCollection.find();
    //   const allItems = await cursor.toArray();
    //   res.send(allItems);
    // });

    // // Get the latest 6 items sorted by most recent date
    // app.get("/latestItems", async (req, res) => {
    //   const cursor = itemCollection
    //     .find()
    //     .sort({ postedAt: -1 }) // Sort by createdAt in descending order
    //     .limit(6); // Limit to 6 items
    //   const latestItems = await cursor.toArray();
    //   res.send(latestItems);
    // });

    // // Get a Single Item Data by Id from DB
    // app.get("/item/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const singleItem = await itemCollection.findOne(query);
    //   res.send(singleItem);
    // });

    // // Update a Job Data in DB (PUT Operation)
    // app.put("/updateItem/:id", async (req, res) => {
    //   const itemData = req.body;
    //   const id = req.params.id;
    //   const updatedDoc = {
    //     $set: itemData,
    //   };
    //   const query = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedItem = await itemCollection.updateOne(
    //     query,
    //     updatedDoc,
    //     options
    //   );
    //   res.send(updatedItem);
    // });

    // // Delete a Item from DB (DELETE Operation)
    // app.delete("/item/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const deletedItem = await itemCollection.deleteOne(query);
    //   res.send(deletedItem);
    // });

    // // Add or Insert Data of Recovered Items to Database
    // app.post("/recoverItem", async (req, res) => {
    //   const recoveryData = req.body;

    //   const result = await recoveryCollection.insertOne(recoveryData);
    //   res.send(result);
    // });

    // // Get ALL Items Data from Database (GET Operation)
    // app.get("/recoveries", async (req, res) => {
    //   const cursor = recoveryCollection.find();
    //   const allRecoveredItems = await cursor.toArray();
    //   res.send(allRecoveredItems);
    // });

    // // Get All Items Posted by a Specific User
    // app.get("/recoveries/:email", verifyToken, async (req, res) => {
    //   const email = req.params.email;
    //   const decodedEmail = req.user?.email;

    //   if (decodedEmail !== email) {
    //     return res.status(403).send({ message: "Forbidden Access" });
    //   }
    //   const query = { "recoveredBy.email": email };
    //   const recoveredItems = await recoveryCollection.find(query).toArray();
    //   res.send(recoveredItems);
    // });

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
