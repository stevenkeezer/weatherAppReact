#  **Weather 🌦️⛅☀️**

## Introduction 🌟

Demo: https://serene-mayer-ab963a.netlify.com/

Let's build a weather app 📱 using [React Native](https://facebook.github.io/react-native/) & [Expo](https://expo.io/). Our app will help users determine their wardrobe 🕶🌂🧥 in their city 🏙 and other cities around the world 🌎!

### Features 🎯🥇🏆

- [x] User is prompted to give permission for our app to use their location if they haven't already given us permission.
- [x] User can see a locations fahrenheit, description, & windspeed.
- [x] User can see an appropriate icon depending on the weather conditions.
- [x] User can see a background appropriate for the type of weather in their current location.
- [x] User can see an icon appropriate for the type of their weather in a location.
- [ ] User can see buttons which allow them to see weather of different cities.
- [ ] User can see a randomly generated image of that city.
- [ ] User can see their current locations weather again with a "Current Location" button.

### Learning Objectives ✍️📚📝

1. Learn how to [fetch()](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) data from an API.

   - Recognize data fetching **takes time**.
   - `fetch()` - Used to make requests to API.
     - The **1st** argument is the [api endpoint](https://stackoverflow.com/questions/2122604/what-is-an-endpoint) we're fetching data from.
   - `json()` - Used to **parse to JS** object.

2. Learn what `async` & `await` are used for. [Read more detailed async & await](https://alligator.io/js/async-functions/).

   - Recognize they're used to make asynchronous.
     - `async` - Tells JS that a function is **asynchronous**.
     - `await` - Tells JS that this line will **take a few moments**.

3. Learn what `try` & `catch` are used for.

   - Recognize they're when we need to be careful because our code may fail.
     An example is an api request. There are other [use cases](https://www.w3schools.com/java/java_try_catch.asp).


#### Whats going on here?

We pass it two default arguments `latitude` & `longitude`. There is a `3rd` optional argument `imgUrl` we'll use shortly.

There's a lot going on here so let's take it one line at a time.

1. We set our apps state to loading.
2. We then define an `API_KEY` to request data.
3. We use the key and the arguments `latitude` & `longitude` to define a request url.
4. We wrap the following lines of code in a `try` & `catch`. If the code inside of the `try` fails, the code within the `catch`'s body will execute.
5. We `await` and `fetch` the data.
6. We Parse the response to `json`.
7. We then [spread](https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831) the response object's data into a new object that includes `imgUrl`. This object is set as a `location` piece of state.
8. Lastly, we `setLoading` to `false`.


## Review 💻🤓🤔

- Defining a large component to a few smaller components to handle some of the logic in our app makes our code easier to read and understand.
- Hardcoding data doesn't make us bad developers.

### Accomplishments 🥇🏆💯

- [x] User is prompted to give permission for our app to use their location if they haven't already given us permission.
- [x] User can see a locations fahrenheit, description, & windspeed.
- [x] User can see an appropriate icon depending on the weather conditions.
- [x] User can see a background appropriate for the type of weather in their current location.
- [x] User can see an icon appropriate for the type of their weather in a location.
- [ ] User can see buttons which allow them to see weather of different cities.
- [ ] User can see a randomly generated image of that city.
- [ ] User can see their current locations weather again with a "Current Location" button.

### Rockets 🚀

- [ ] User will see app theme colors based on temperature of the location(blue for code, orange for warm, red for hot)

