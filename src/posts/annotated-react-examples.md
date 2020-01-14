---
path: "/blog/annotated-react-examples"
title: "Annotated React"
date: 2017-06-02
tags: ['react']
---

<mark>UPDATE</mark>

This is a rather old post, and React has changed a lot since I wrote this post in 2017. Please head over to the awesome [React documentation](https://reactjs.org/docs/getting-started.html) for information on the latest react info and best practices.

---


I have commented a handful of examples taken from React's documentation. These examples cover the very basics of React: JSX, props, component level state and lifecycle.

## Set Up

I've embedded a JSFiddle below for you to try out the examples and see them for yourself, without any of the set-up. It's already hooked up with React, ReactDOM and a container div to render your apps! Open it on a new window and start writing your Javascript on the Babel+JSX tab.

<iframe width="100%" height="300" src="//jsfiddle.net/murielg/bsjfyap3/5/embedded/js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## A Simple Component

```javascript
/*
  HelloWorld is a simple (stateless) component
*/

/* This is how we define component classes in React.
   Every time you want to display a Hello World component
   like so <HelloWorld />, react will create an instance
   of this class. */
class HelloWorld extends Component {

/* The render method is required in any class based component.
    It will not modify the component's state, but rather return
    a single React element - the component's output or Virtual DOM. */
  render() {
    return <div>Hello {this.props.name}</div>;

  }
}
/* ReactDOM.render(element, container, callback) will render
   the componentin the browser. If our <HelloWorld/> element
   had already been created, this function re-renders or
   update the component. You can pass `props`
   to your component and render them via this.props */
ReactDOM.render(
    <HelloWorld name="Muriel" />,
    document.querySelector('.container')
    );
```

---

## A Stateful Component
```javascript
/*
  Simple timer that counts the time elapse since the app starts running.
*/

class Timer extends Component {
  /* The constructor(props) method is called before the component
   is created and inserted in the DOM. The props arg holds
   attributes passed onto the component. */
  constructor(props) {

    /* super(props)) must be called in order to make Timer a proper React
      Component. It allows you to access/inherit the constructor method
      of the parent class */
    super(props);

    /* this.state sets the initial state of the <Timer /> component.
      The component's state is an object, currently with only one property
      `secondsElapsed`. */
    this.state = {secondsElapsed: 0};

  }

  /* The function tick() is a component's method. You may create methods
    inside components like tick() and eventually pass them as a callback when
    rendering the component, for example. */
  tick() {

  /* setState() is a request that:
     1) enqueues changes to the component state and
     2) informs react that the component and its children need to be re-rendered

     prevState , a reference to the previous state, should not be manipulated directly
     but rather should be merged by creating a new object
     and passing it to setState. */
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));

  }

  /* The componentDidMount() method is invoked immediately after a component is mounted.
     This is a good place to instantiate network requests from an API endpoint.
     Note that this will trigger a re-render of the component. */
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  /* The componentWillUnmount() method is invoked before a component is unmounted
     or destroyed. This is a good place to clean up, invalidate timers, cancel
     requests or clean up the DOM if needed. */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

ReactDOM.render( <Timer/>, document.querySelector('.container'));
```



---

## An Application

```javascript
class TodoApp extends React.Component {
  constructor(props) {
    // Access parent class constructor method
    super(props);

  /* The bind method is used to take the context to which you want to
    bind your function as a first argument.
    There is no autobinding in React, so we have to manually bind the functions
    like in line 11-12 */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Initializing the components state
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    /* Prevent default form submission so React can handle it instead. */
    e.preventDefault();

    /* Create a new Todo Item that will be merged with
      the previous state and eventually passed on to the
      component's state. */
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };

    /* prevState , a reference to the previous state, should not be manipulated directly
       but rather should be merged by creating a new object
       and passing it to setState. */
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));

  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, mountNode);
```

---

Feel free to check out some of my React projects here:

  - ~~[React Starter Template](https://github.com/murielg/reactstarter)~~ (ARCHIVED, USE CREATE-REACT-APP)

  - [React + Redux examples](https://github.com/murielg/react-redux) (NOT ARCHIVED, BUT OLD)

  - ~~[React Native + Redux examples](https://github.com/murielg/react-native-redux)~~ (ARCHIVED)



## Want to build your own React apps?

If you want to dig deeper, check out the following resources on react development:

- 🔗 [React Docs](https://reactjs.org/docs/getting-started.html)
- 🔗 [Redux](https://github.com/reactjs/redux)
- 🔗 [React Router](https://github.com/ReactTraining/react-router)
