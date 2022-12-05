const express = require('express');
const mysql = require('mysql2');
const app = express();
const portF = 8383;
//const db = 3000;


app.use(express.static('public'));

// app.use(express.json(food));

// app.get('/:dynamic', (req, res) => {
//     const { dynamic } = req.params;
//     const { itemsOrdered} = req.query;
//     console.log(dynamic);
//     res.status(200).send();
// })

// app.post('/', (reg, res) => {
//     const { parcel } = req.body;
//     console.log(parcel)
//     if (!parcel) {
//         return res.status(400).send({ status: 'failed'})
//     };
//     res.status(200).send({ status: 'received '})
// })

app.post('/', (reg, res) => {
    console.log("Post API is working");
})


// route to connect to the database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food'
}).promise();


//get the whole table from database
const food =  async function getItems(){
    const [result] = await pool.query("SELECT * FROM food_items")
    //console.log(result);
    return result;

}
// console.log(result);
// console.log(result.type);
//const food = JSON.stringify(getItems());

//const foodJson = app.use(express.json(food));
console.log(food.toString);

// app.get('/', (req, res) => {
//     res.status(200).send('')
// })
//const front = app.listen(portF, () => console.log(`Server started on port: ${portF}`));
//const back = app.listen(portB, () => console.log(`Server started on port: ${portB}`));

// app.get("/",(req,res) => {
    //     pool.getConnection((err, connection) => {
        //         if(err) throw err;
        //         console.log('connected as id ' + connection.threadId);
        //         connection.query('SELECT * from ', (err, rows) => {
            //             connection.release(); // return the connection to pool
            //             if(err) throw err;
            //             console.log('The data from users table are: \n', rows);
            //         });
            //     });
            // });




// pool.query('SELECT * FROM authors', (err,rows) => {
//     if(err) throw err;
    
//     console.log('Data received from Db:');
//     console.log(rows);
//     });

// app.listen(db, () => {
//     console.log(`Server is running at port: ${db}`);
// });

app.listen(portF, () => console.log(`Server started on port: ${portF}`));