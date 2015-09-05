var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
    return {inputValue: ''};
  },

  handleChange: function(){
    this.props.onAdd(this.state.inputValue);
    this.setState({inputValue: ''})
  },

  handleInput: function(){
    this.setState({inputValue: event.target.value});
  },

  render: function(){
    return (
      <form>
        <div className="large-9 medium-9 columns">
          <input type="text" id="todoInput" placeholder="Add a todo item" ref="itemText" value={this.state.inputValue} onChange={this.handleInput} />
        </div>
        <div className="large-3 medium-3 columns">
          <input type="button" className="submit button tiny" id="addButton" value="ADD" onClick={this.handleChange}/>
        </div>
      </form>
    )
  }
});
