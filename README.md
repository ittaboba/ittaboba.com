# ittaboba.com

This is the source code of my personal [website](https://ittaboba.com)

Feel free to use it to build your own website. Please just keep in mind that some assets, like the logo, are protected by copyright. You may find some descriptions and pictures related to myself too. Feel free to use them as placeholders during your development but remember to remove every asset or information related to me and my work before going in production. 

This software does not include the APIs and the Backoffice to edit contents. In case you are interested, please [contact me](mailto:ittaboba@gmail.com).
If you prefer to build your own backend and backoffice, I have used this [library](https://github.com/michelson/dante2) for the Editor.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


###Configurations
In order to make the project work, add the following fields in a `.env` file.

```
REACT_APP_API_URL = "<YOUR_API>"
REACT_APP_GOOGLE_ANALYTICS_ID = "UA-*********-*"
REACT_APP_TERMS_OF_USE_URL = "https://www.iubenda.com/terms-and-conditions/********"
REACT_APP_COOKIE_POLICY_URL ="https://www.iubenda.com/privacy-policy/********/cookie-policy"
REACT_APP_PRIVACY_POLICY_URL = "https://www.iubenda.com/privacy-policy/********"
```

For the legal fields I have used the services provided by [iubenda.com](https://www.iubenda.com/en/).
You can use this [link](https://bit.ly/2xMRAXI) to get a **10% discount**.


## License
The **ittaboba.com** open source license is [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html). The GPLv3 has many terms, but the most important is how [it is sticky when you distribute your work publicly](https://www.gnu.org/licenses/gpl-3.0.html#section5). From the [GPL FAQ](https://www.gnu.org/licenses/gpl-faq.html#GPLRequireSourcePostedPublic):

*If you release the modified version to the public in some way, the GPL requires you to make the modified source code available to the program's users, under the GPL.*

Releasing your project under the GPLv3, in turn, requires your project to be licensed under the GPLv3. 
