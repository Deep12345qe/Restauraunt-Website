// Author = Russell


//Get required modules
const mysql = require('mysql2');
let instance = null;

const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
const obj = app.use(express.json());


//connect to database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food'
});

module.export = connection;



let sql = "SELECT * FROM food_items;";

let food = [{}];
// ///////////////////////////////////////////here is the working connection for the food items


//also connect to database
//but I wanted to pull the data at the same time
connection.execute(sql, function (err, result) {
    if (err) throw err;

    return result.forEach((res) => {
        //console.log(res);
        //JSON.stringify(res);
    });
});

// console.log(JSON.stringify(food));
// foodObj = JSON.parse(food);
// objFood = app.use(express.json(food));



//a class API  for CRUD operation
// but since I was not able to get past the menu being undefined
//I did not get the chance if the following codes below works.
class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }


    async getAllFood() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = sql;

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


    async insertNewFood(name) {
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO food_items (food_name, food_category, food_price, food_calories, food_description, food_image) VALUES (?,?,?,?,?,?);";

                connection.query(query, [name, dateAdded] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                food_id : insertId,
                food_name : food_name,
                food_category : food_category,
                food_price : food_price,
                food_calories : food_calories,
                food_description : food_description,
                food_image : food_image
            };
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFoodById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM food_items WHERE food_id = ?";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updateNameById(id, name) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE food_items SET food_name = ? WHERE food_id = ?";
    
                connection.query(query, [name, id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async searchByName(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM food_items WHERE food_name = ?;";

                connection.query(query, [name], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbService;