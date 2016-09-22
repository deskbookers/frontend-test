# Front-end Test

Solution for the [front-end developer test](https://github.com/deskbookers/frontend-test). Application created using *Webpack*, *React+JSX* and *Redux*.

Transpiling and compilation done with *Babel* and *LESS*.

Testing done with *Karma* and *Jasmine*.

---

### Approach

Application is composed of several smart container components (`src/containers`) and various functional subcomponents (`src/components`). Whole state is distributed top-down via the container components.

Application theme can be controlled via `styles/variables.less` definitions. 

Layout is prepared to work on mobile, tablets and desktops.

### Launching

To start the application use:

```bash
npm install && npm start
```

Application listens on port `8080`. 

To run unit testing use `npm test`.
