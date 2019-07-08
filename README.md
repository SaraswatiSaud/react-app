# Lifecycle Methods

## 1. Mounting
```
  These methods are called in the following order when component inserted into DOM
  a. constructor()
  b. static getDerivedStateFromProps()  //rarely use case
  c. render()
  d. componentDidMount()
```

## 2. Updating
```
  These methods are called in the following order when a component is being re-rendered.
  a. static getDrivedStateFromProps() //rarely use case
  b. shouldComponentUpdate()  //rarely use case
  c. render()
  d. getSnapshotBeforeUpdate()  //rarely use case
  e. componentDidUpdate()
```

## 3. Unmounting
```
  a. componentWillUnmount()
```