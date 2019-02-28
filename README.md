# react-event-param

Provide custom param for DOM event handler.
And avoid memory-consuming bindings or arrow functions.

## Usage Example

```javascript
import React, { Component } from "react";
import { setEventParam, getEventParam } from "react-event-param";

class ItemList extends Component {
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

export default ItemList;

```
