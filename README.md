# Restauraunt-Website
Software Engineering Class - California State University, Stanislaus

<-- Second Demo instance of the project-->

Software used- XAMPP Apache, XAMPP phpmyadmin

How to use Apache and phpmyadmin:

After installing XAMPP, find the XAMPP folder and delete all files initially found in the htdocs folder.
Next, copy and paste all the files used for the project into the (htdocs) folder. Now you can start up
the XAMPP control panel aplication and start the Apache webserver and the mysql server. Click on
the admin button of the mysql server, and go to the sql tab. Copy anb paste the queries found
in the database file found in the "Database code - Backend" folder. This should establish a mysql 
database. Now click on the admin button of the apache server on XAMPP control panel, you can now use
the website for the project.

Standard user authentication:

Email: Hhank@gmail.com
Password: Hangry
or 
register as new user.

File Descriptions 

-Index.html: The initial login page 
-dbconnect.php: Used by index, establishs a connection to the database and retrieves and checks login 
credentials
-main.html: Contains the main menu that allows the user to pick and choose food items they wish
-reg.html: Contains the registration page form
-dbnewuser.php: Established a connection to the database and queries to add new users, used by reg.html





<-- Third Demo instance of the project (with menu not hard coded)-->

Software required on the local machine:
    XAMPP = Apache and MySQL
    Node.js = for control of the backend, require the following modules.
        mysql2
        express
        cors
        sequelize
        nodemon       //optional, automatically reload node.js console for any changes made (for debugging)
To install node.js modules:
    -Install node.js from https://nodejs.org/en/, then open cmd, cd to project folder root ({/Restaurant-Website/public}  in this case) and run the following command.

        npm install express mysql2 cors sequelize
        npm install --save-dev nodemon

To run the system:

1. Run XAMPP software.
2. Start Apache and MySQL in XAMPP control panel
3. Open any browser and type "localhost/public".

Note: Third demo instance of the project was created to work on the menu database without breaking the existing system. This part only deals with the main page and not the login page.

Core files:
/public/index.html     //Main page
/public/main.js        //Has the codes for control of the interface
/public/style.css      //Handles styling of the website
/public/img/*.jpg      //all images require to render the menus
/database.js           //has the codes to connect to database and the classes for Crud operation
/server.js             //has code to make database to listen to port, also Handles CRUD operation (experimental)

/dbServices.js        //this was created to try to make system work with sequelize module
/Models/menu.js        //model for menu data table
/Models/user           //model for user data table intender for workers


Testing was done using command 'console.log()' on dev tools of the browser for the interface, on git bash terminal for the server.