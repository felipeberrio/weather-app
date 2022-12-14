# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)







### APP WEATHER

Este c??digo es un componente de React que muestra una lista desplegable de ciudades y un formulario que permite a un usuario seleccionar una ciudad. Cuando el usuario env??a el formulario, se hace una solicitud a la API del clima para obtener la informaci??n del clima para la ciudad seleccionada. La informaci??n del clima se muestra en una tarjeta despu??s de que se env??a el formulario.

Algunas l??neas en particular:

La primera l??nea importa la librer??a de React, que se utiliza para crear componentes de React.

La segunda l??nea importa la clase Card de la librer??a react-bootstrap, que se utiliza para mostrar la informaci??n del clima en una tarjeta.

La tercera l??nea importa la funci??n fetch para hacer solicitudes a una API.

La quinta l??nea importa la hoja de estilos que se utiliza para dar formato a la interfaz de usuario.

La clase CityDropdown extiende la clase React.Component y define un componente de React que se puede utilizar en otro lugar en la aplicaci??n.

La clase CityDropdown tiene un estado inicial que incluye una lista de ciudades y una cadena vac??a que se utiliza para almacenar la ciudad seleccionada por el usuario. Tambi??n tiene una propiedad para almacenar la informaci??n del clima que se obtiene de la API y una propiedad para mostrar o ocultar un mensaje de bienvenida.

El m??todo handleChange se llama cuando el usuario selecciona una ciudad diferente en el men?? desplegable. Actualiza el estado del componente con la nueva ciudad seleccionada.

El m??todo handleSubmit hace una solicitud a la API del clima para obtener la informaci??n del clima para la ciudad seleccionada. Si la solicitud tiene ??xito, se actualiza el estado del componente con la informaci??n del clima y se oculta el mensaje de bienvenida. Si hay un error, se muestra una alerta con el mensaje de error.

El m??todo render es el encargado de dibujar el componente en la p??gina web. Muestra un mensaje de bienvenida y un formulario que contiene el men?? desplegable de ciudades. Si se selecciona una ciudad y se env??a el formulario con ??xito, tambi??n se muestra la informaci??n del clima en una tarjeta.

La ??ltima l??nea exporta la clase CityDropdown como un m??dulo que se puede importar en otro lugar en la aplicaci??n.