# NotesApp

This is a project that uses React and CSS.
Libraries used on this project are Antd, Antd Icons and Classnames.

<h1>Installation</h1>

<h3>To install the necessary node modules, run the following command in the terminal:</h3> 
<b><i>npm i</i></b> <br>
This will install all the dependencies listed in the package.json file.

<h3>To install and use the Antd library run the following command:</h3> 
- <i>npm install antd</i>

then import the icons from 'antd'

<h2>Usage</h2>
To start the project, run the following command in the terminal:
<i>npm start</i>

This will start the server and launch the web application on your local machine. You can access the application by navigating to http://localhost:3000 in your web browser.

<h4>Summary:</h4>
You can: <br>
- Create new notes <br>
- Show all notes <br>
- Search notes <br> <br>
This is gonna be the empty product: <br>

![image](https://github.com/diellas8/Notes-app/assets/58296399/edc37378-1d44-452c-9527-c9b6112f2718)

Click on the "Create" button to initiate the product creation process.
Fill in the necessary details such as name, category, and the status.
Once the details are entered, confirm to create the product note.

![image](https://github.com/diellas8/Notes-app/assets/58296399/ed476405-b531-40b7-999d-16eb08617860)

Once a product note is created, it will be listed on the main dashboard.

![image](https://github.com/diellas8/Notes-app/assets/58296399/fc198c47-71fa-4608-8d85-e8f924f6b464)

You can type keywords related to the product you are looking for.

![image](https://github.com/diellas8/Notes-app/assets/58296399/b765ac82-c0d7-4ce5-adca-251a7b28a591)

You can view the details of each product by clicking on its respective entry.

![image](https://github.com/diellas8/Notes-app/assets/58296399/5bc69fe1-5785-4668-960b-008a2866c0ec)

<h2>How might you make this app more secure</h2>
<h4>Password Hashing:</h4> <br>
Store user passwords securely by using strong encryption algorithms and hashing techniques.
<h4>Frequent Updates:</h4> <br>
Keep all dependencies and libraries up to date to address more security.
<h4>Error Handling:</h4> <br>
Implement appropriate error handling mechanisms to prevent revealing sensitive information to potential attackers.

<h2>How would you make this solution scale to millions of records?</h2>
<h4>Database Optimization:</h4> <br>
Query optimization techniques to ensure fast data manipulation.
<h4>Caching:</h4> <br>
Implement caching mechanisms to store frequently accessed data in memory, reducing the need for repeated database queries.
<h4>Use CDN:</h4> <br>
Utilize a CDN to serve static assets like images, stylesheets, and scripts, reducing the load on your server.
