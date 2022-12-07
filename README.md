# Restauraunt-Website
Software Engineering Class - California State University, Stanislaus

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
