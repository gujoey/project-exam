# Holidaze mock website
This is a [React](https://reactjs.org/) app for the mock company Holidaze which is a booking agency from Bergen, Norway. 

The application has a [user site](https://fixforsikring.no/holidaze/#/) and an [admin site](https://fixforsikring.no/holidaze/#/admin/dashboard). In order to access the [admin site](https://fixforsikring.no/holidaze/#/admin/dashboard) you will have to login with the following cridentials:

**Username:** admin  
**Password:** HelloWorld  
  
**Live site:**  
[https://fixforsikring.no/holidaze/#/admin/dashboard](https://fixforsikring.no/holidaze/#/admin/dashboard)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Getting started](#getting-started) | [Scripts](#available-scripts) | [Learn more](#learn-more) 
***

# Getting started

**Step 1**  
In order to run this project you will have to have [node.js](https://nodejs.org/en/) installed. You can download it from [here](https://nodejs.org/en/).

**Step 2**  
Clone this repository and ```cd``` into it through your terminal.

**Step 3**  
Inside the project root directory, install the project using ```npm install```

**Step 4**  
The application is using php to post forms to json files, and in order to make this funciton work you will have to have a local server like [mamp](https://www.mamp.info/en/) installed on your computer. you can download it from [here](https://www.mamp.info/en/downloads/).

After you have installed your local server move the server directory from this repository into the directory of the local server (htdocs in mamp).

**Step 5**   
After the project is installed you can run ```npm start``` to run the project in development mode.
If you want to run the project in production mode, use the command ```npm run build```

See [available scripts](#available-scripts) to see the what commands you can use in this project.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
