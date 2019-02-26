# Sample Videojs and ReactJS with End screen

This project is a sample implementation for Videojs with React with the end screen suggestions view.<br>
inspired by Open [https://www.npmjs.com/package/videojs-suggestedvideoendcap](videojs-suggestedVideoEndcap)<br>

First, having a flag when the video is ended<br>
`this.player.on("ended", () => { this.setState({ isEnd: true }); });`
<br>
This project was created using create react app.

## Available Scripts

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
