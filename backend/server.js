const express=require("express"); const mongoose=require("mongoose"); const cors=require("cors"); require("dotenv").config();
const app=express(); app.use(cors()); app.use(express.json());
app.get("/",(req,res)=>res.json({message:"Crack Edge API running"}));
app.use("/api/auth",require("./routes/auth")); app.use("/api/courses",require("./routes/courses")); app.use("/api/tests",require("./routes/tests")); app.use("/api/results",require("./routes/results")); app.use("/api/admin",require("./routes/admin"));
mongoose.connect(process.env.MONGO_URI).then(()=>app.listen(process.env.PORT||5000,()=>console.log("Server running on port "+(process.env.PORT||5000)))).catch(e=>console.error(e.message));