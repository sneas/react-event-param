# react-event-param

[![version](https://img.shields.io/npm/v/react-event-param.svg?style=flat-square)](http://npm.im/react-event-param)
[![MIT License](https://img.shields.io/npm/l/react-event-param.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Provide custom param to DOM event handler.
And avoid memory-consuming bindings or arrow functions.

## Installation

```bash
npm install --save react-event-param
```

## Usage Example

```javascript
import React, { Component } from "react";
import { setEventParam, getEventParam } from "react-event-param";

class List extends Component {
  state = {
    selectedIndex: null
  };

  onItemClick = e => {
    const index = getEventParam(e.target);
    this.setState({
      selectedIndex: index
    });
  };

  render() {
    return (
      <ul>
        {this.props.items.map((itemText, index) => (
          <li
            key={index}
            {...setEventParam(index)}
            onClick={this.onItemClick}
          >
            {{ itemText }}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;

```
