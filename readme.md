# react-toast-library

## Installation

```
$ npm install --save react-toast-library
$ yarn add react-toast-library
```

## Example

```jsx
  import React from 'react';
  import { ToastContainer, useToast } from 'react-toast-library';
  
  function App(){
    const { toaster } = useToast(3);
    
    const handleClick = () => {
      toaster.success('New toast', {
        title: 'Success',
        autoClose: 3000,
        position: 'bottom-left',
        color: '#fff',
        backgroundColor: '#37E29A',
      });
    }
    
    return (
      <div>
        <button onClick={handleClick}>add toast</button>
        <ToastContainer
          distance={15}
          animationName='flip'
        />
      </div>
    );
  }
```

## Demo

[Link to demo](https://alex-sapon.github.io/toast-lib/)

## Documentation

###useToast

- besides the ***message***, you can set ***title***;
- ***autoClose***: you must specify the delay in milliseconds, default delay - 3000ms;
- ***position*** has 6 values: bottom-left, bottom-middle, bottom-right, top-left, top-middle, top-right. Default 
  position - bottom-left;
- and you can also set the ***color*** of the text and ***backgroundColor***.

###ToastContainer

- ***distance***: specify the distance between messages in pixels, default 15px;
- ***animation*** has 5 values: wobble, bounce, fade, flip and default - bounceUp.

## License

Licensed under ISC