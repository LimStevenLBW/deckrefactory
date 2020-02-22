## Built With
* [create-react-app](https://github.com/facebook/create-react-app) This project was bootstrapped using Facebook's CRA as the base.
* [Bootstrap-4](https://getbootstrap.com/) Bootstrap is a robust CSS framework. It is included within as a node package.
* [SASS](https://sass-lang.com/) CSS pre-processor. CRA has been preconfigured to used SASS already, no additional tools are needed to compile it.
* [Axios](https://github.com/axios/axios) Promise based HTTP client, used to communicate with APIs via HTTP.

### May be replaced in the future
* [CanvasJS](https://canvasjs.com/) Library for generating dynamic charts. This may be replaced should a better alternative appear. 
* [MTG API](https://docs.magicthegathering.io/) Powers the search feature, returns curated lists from MTG JSON. It is somewhat slow, alternatives solutions should be considered.
* [Joi](https://www.npmjs.com/package/joi) A deprecated version of Joi is used to instigate error checking and validation. A migration to hapijs/joi is considered.

## Development
Provide a .env.development file at root to define URL paths to your backend and the API used for searching cards.
CRA can read these environment variables and replace them with their usage at build-time.
You must prefix an environment variable with the following in order for it to be read this way.
`REACT_APP_` 

Run `yarn start` in order to test the application on your dev machine in development mode. 
Live reloading is enabled along with linting errors in the console for debugging.

## Deployment
Provide a .env.production file at root in a similar vein to above.
Run `yarn build` to build the app for production in the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance. 

The build is minified and the filenames include the hashes.<br />
Please note, that there are slight differences in how SASS is processed in development and in deployment.
Pay special heed as your styles may be interpreted incorrectly due to this.

## Additional Support Links

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/). <br />
https://facebook.github.io/create-react-app/docs/code-splitting <br />
https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app <br />
https://facebook.github.io/create-react-app/docs/advanced-configuration <br />
https://facebook.github.io/create-react-app/docs/deployment <br />
https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify <br />
