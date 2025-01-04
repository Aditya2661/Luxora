const express = require('express');
const pg = require('pg')
const app = express();
const port = 5000;

app.use(express.json())

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"luxora",
    password:"Ansh@2004",
    port:5432,
});
db.connect();

app.get('/',(req,res) =>{
    res.send("this is my Server");
})

app.post('/Signup', async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);
    try {
        // Inserting the data
        await db.query(
            "INSERT INTO authentication (email, password) VALUES ($1, $2)",
            [email, password]
        );

        // Sending success
        res.status(200).json({ message: "User signed up successfully!" });
    } catch (err) {
        console.error("Error signing up:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/Login', async (req,res) =>{
    const {email ,  password} = req.body;
    try 
    {
        const passResult = await db.query('SELECT password FROM authentication WHERE email = $1', [email]);
        const pass = passResult.rows[0]?.password;
        
        if (pass && pass === password) {
            // Success login
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ errorMessage: "Invalid email or password" });
        }
        
    }
    catch(err)
    {
        console.log("Error in loggin",err);
        res.status(500).json({errorMessage:"Internal server error"});
    }
});

app.listen(port , () =>{
    console.log(`Server is running on port ${port}`);
})