import React, { Component } from 'react';
import NavButton from './NavButton';

export default class NavButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'HOME',
    };
    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection(title) {
    this.setState({
      selected: title.toUpperCase(),
    });
  }

  render() {
    return (
      <ul className="nav-buttons">
        <NavButton title={'Home'} clickHandler={this.changeSelection} selected={this.state.selected === 'HOME'} />
        <NavButton title={'Moments'} clickHandler={this.changeSelection} selected={this.state.selected === 'MOMENTS'} />
        <NavButton title={'Notifications'} clickHandler={this.changeSelection} selected={this.state.selected === 'NOTIFICATIONS'} />
        <NavButton title={'Messages'} clickHandler={this.changeSelection} selected={this.state.selected === 'MESSAGES'} />
      </ul>
    );
  }
}
