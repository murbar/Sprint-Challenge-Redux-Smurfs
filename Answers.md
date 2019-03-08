1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

> `.concat()`, `.map()`, and `.filter()` return new arrays and do not produce side effects. We can use `Object.assign()` and pass an empty object as the first param followed but additional objects to create a new object with the properties of the passed-in objects.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

> The store is a single immutable JS object containing the state of our application. Reducers contain pure functions that take in the state and return new state based on some action dispatched by an action creator function. Actions contain an action type and optionally some data associated with the action type. Action creators make it possible to write reusable functions that can dispatch actions based on UI events.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

> Components like inputs or forms may manage their own state that isn't important at the application level. They can hand off their state to the application at appropriate times with callbacks or dispatches to a Redux store. This reduces complexity by separating concerns within our application.

1.  What is middleware?

> Middleware intercepts function calls, performs some operation with the inputs (e.g logging) and usually passes the inputs on to their destination. It's a lot like HOC or decorator patterns. We use it to inject additional functionality to our applications.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

> `redux-thunk` is a Redux middleware that allows us to write action creators that return a function instead of an action. Thunk can then delay dispatch or conditionally dispatch an action based on the logic in the function. We can then run async operations like AJAX requests.

1.  Which `react-redux` method links up our `components` with our `redux store`?

> We use `connect()` to link are components and Redux store.
