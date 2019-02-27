# react-event-param

Set event params while rendering and get them back in callback function.
No bind and arrow functions required.

## Usage Example

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";
import { setEventParam, getEventParam } from "react-event-param";

class ItemList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
  };

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
