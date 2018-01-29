# AdThriveApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

The goal is to create a video library application using Angular 5 and Material 5 that provides an interface that:
 * Lists the first 10 videos returned by the API ordered by date
 * Provides pagination
 * Works on modern web browsers

Each video listing will include:
 * Default Thumbnail
 * Title
 * Description (max length 150 characters)
 * Published At

The video library will use the YouTube API to get videos from the Angular channel. Here is an example request:
https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbn1OgGei-DV7aSRo_HaAiw&key=AIzaSyA8OHCyYSR7aFsJXsna7TumltQ0v56rUWU

You can find more about how to use the API here: https://developers.google.com/youtube/v3/docs/search/list

API requests should:
 * Use the HttpClient
 * Only request the rows immediately required
 * Gracefully handle errors

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
