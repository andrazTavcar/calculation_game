# CalculationGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
or `npm start test-headless`

## Running end-to-end tests

ng run Calculation_Game:cypress-run
or `npm start cypress-test`

Interactive test
ng run Calculation_Game:cypress-open 

## Docker
Open cmd in app root folder

Execute the command bellow to build docker image with name angular-app
`docker build -t angular-app .`  

Then execute the command bellow to run the app in detach mode and expose port 80.
`docker run -d -p 80:80 angular-app`





