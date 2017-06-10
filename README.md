# Kiwi JS Developer Recruitment test

Create simple search page similar to Kiwi.com homepage. It should be SPA (Single page application) built on frontend technologies. Page should consist of two parts - search form and results.

Search form should have minimally this three input fields: From, To and Date.

Results should contain basic informations about flights (from, to, date and time, price in EUR)

You can inspire yourself on Kiwi.com or any other search web (Momondo, Skyscanner, Kayak, Hipmunk, or czech Letuška, Pelikán, AZAir)

----

# Implementation:

### Libraries

I used Angular as a framework for the SPA client.
I also used a custom implementation of a store (Flux) in the application based on RxJs.

For the autocomplete and datepicker input fields I used Angular Material.

I also used Webpack as a module bundler, with a few extra loaders to be able to use scss and some plugins.

For testing I used Jasmine and Karma.

---

### Architecture

I had not used Flux arquitecture until now so I used this test as a way to experiment a few things.

So there's a single service which retrieves data from the API and updates a central store. I then use a Store to save the state of the application (the results and the search query) and Observables in the components to get the data.

The application structure is fairly simple, so I didn´t use any routing.

The components inside the ```/components``` folder are presentational components, and the ones inside ```/containers``` are smart components. The change detection strategy has been set to ```onPush``` in the presentational components to improve the performance.

File ```app.component.scss``` is the entry point to import all the global styles in the application. I did that changing the view encapsulation mode to ```none```.

### Features

There are too many things to do in an application like this, so I tried to implement a few different features to show what I can do instead on losing too much time to perfect a single one.

So I only allowed the user 3 input fields but I implemented the autocomplete and a datepicker mechanism for them.

I decided to use the main panel to display some banners or any other information before the search is executed. This could be expanded to add any other components inside.

Regarding the results, the left hand side is filled by the filters (not implemented) so that the user could filter the results returned.

I implemented a test for the 2 methods in the service.

I didn´t spend much time with the styling as I'm not really a HTML/CSS expert, so I used flex (which I like very much) to structure the components and some basic css so that it does not look too ugly.

I used the API service from skyscanner to get logos for the airlines.

[https://logos.skyscnr.com/images/airlines/favicon/EZ.png](https://logos.skyscnr.com/images/airlines/favicon/EZ.png)

### What else could be done?

- I would try to eliminate the use of ```any``` as a type in the app. So that the service could transform the results from the API to a more controlled model to use in the app. That would improve the type checking.

- More tests could be implemented for the components (although I usually don´t test my Angular components, only services and routes in my backend endpoints).

- I would add more inputs in the search, return time, passengers or class. Adding this information in the ```Search``` would be fairly simple, and also in the presentational component, where a new leg could be included for the return trip.

- I would have liked to use the location information in the results to add some visual aid, like Google Maps to mark the origin and destiny or something like this.

- Some filters could be included, and it would be fairly simple, as the filtering information could be included in the state.

- Some sorting options also would be helpful, so that the user can sort by price, duration or even airline.

- Pagination would also be helpful, at the moment 200 results are being returned.

### How to execute it?

The project comes with a yarn.lock, so it's better to install the dependencies with

```yarn```

then it can be run with webpack-dev-server using

```yarn start```

or a build can be generated to use it with any other server, with

```npm run build```

and finally, to run the tests

```npm run test```