const express = require('express');
const cors = require('cors'); 
const app = express();
const connectDB = require('./dbconnector/db'); 
const jobRoutes = require('./routes/route');
const cronjob = require('./datascraper/cron');

cronjob.schedulecron(); 

// Enable CORS
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); 

app.use('/api', jobRoutes);

app.listen(3000, () => {
    console.log(`App listening on port 3000`);
});
