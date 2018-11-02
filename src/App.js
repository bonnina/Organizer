import React, { Component } from 'react';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        tasksArr: [],
        theme: 'cocoa'
      };
      this.handleChange = this.handleChange.bind(this);
      this.parseInput = this.parseInput.bind(this);
      this.clear = this.clear.bind(this);
      this.pickTheme = this.pickTheme.bind(this);
      this.handleColors = this.handleColors.bind(this);
    }
   
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    
    parseInput() {
      const arr = this.state.input.split(',');
      this.setState({
        tasksArr: arr
      });
    }
    
    clear() {
      this.setState({
        input: '',
        tasksArr: []
      });
    }
    
    pickTheme(event) {
      this.setState({theme: event.target.value});
    }
    
    handleColors() {
      function applyTheme (m, l, b, h, sh, a='#ffffff', s='#734d26') {
          document.querySelector('.Menu').style.backgroundColor = m;
          document.querySelector('.List').style.backgroundColor = l;
          document.body.style.backgroundColor = b;
          document.querySelector('h1').style.color = h;
          document.querySelector('#clearButton').style.backgroundColor = l;
          document.querySelector('#clearButton').style.color = h;
          document.querySelector('option').style.color = s;
          document.querySelector('h3').style.color = sh;
          document.querySelector('#submitButton').style.backgroundColor = sh;
          document.querySelector('#submitButton').style.color = b;
          document.querySelector('#submitTheme').style.backgroundColor = sh;
          document.querySelector('#submitTheme').style.color = b;
          document.querySelector('h2').style.color = b;
          document.querySelector('h4').style.color = b;
          document.querySelector('#listBackgr').style.backgroundColor = a;
      }
      switch(this.state.theme) {
        case 'batman':
          applyTheme('#0d0d0d', '#000000', '#404040', '#e6b800', '#ffffff');
          break;
        
        case 'blankets':
          applyTheme('#bf80ff', '#ffffff',  '#ccccff', '#a64dff', '#6666ff', '#ffe6cc');
          break;
          
        case 'onions':
          applyTheme('#009933', '#c4ff4d', '#9fdf9f', '#ffffff', '#336600');
          break;
        
        case 'wolf':
          applyTheme('#8c8c8c', '#595959', '#e0e0d1', '#d9b38c', '#4d4d4d', '#e0e0d1');
          break;
          
        case 'cocoa':
          applyTheme('#d2a679', '#79d2a6', '#ffffff', '#339966', '#ac7339');
          break;

        default: 
        applyTheme('#d2a679', '#79d2a6', '#ffffff', '#339966', '#ac7339');
      }
    }
    render() {
      return(
        <div className='ToDoApp'>
          <Menu input={this.state.input} parse={this.parseInput} change={this.handleChange} clearAll={this.clear} value={this.state.theme} pickTheme={this.pickTheme} handleColors={this.handleColors}/>
          <List t={this.state.tasksArr} />
        </div>
      );
    }
  }
  
  class Menu extends Component {
    render() {
      return (
        <div className='Menu'>
          <h2> {new Date().toDateString()} </h2>
          <h3>add tasks</h3>
            <input type='text' value={this.props.input} onChange={this.props.change} placeholder='separate with commas' id='inp' />
            <button onClick={this.props.parse} id="submitButton">submit tasks</button>
            <button onClick={this.props.clearAll} id='clearButton'>clear list</button>
          <Theme val={this.props.value} pickTheme={this.props.pickTheme} handleColors={this.props.handleColors }/>
        </div>
      );
    }
  }
  
  class List extends Component {
    render() {
      const td = this.props.t.map(el =>                     
      <li key={el.toString()}>
        <input type='checkbox' id='ch' aria-label='check done' /> 
        <label for='ch' className='task' >{el}</label>
      </li>
      );
      return (
        <div className='List'>
          <h1>to do</h1>
          <div id="listBackgr">
            <ul> {td} </ul>
          </div>
        </div>
      );
    }
  }
  
  class Theme extends Component {
    render() {
      return (
        <div className='themes'>
          <h4>change color theme</h4>
            <select value={this.props.val} onChange={this.props.pickTheme}>
              <option value='cocoa'>mint cocoa</option>
              <option value='batman'>batman</option>
              <option value='mary'>bloody mary</option>
              <option value='blankets'>blankets</option>
              <option value='onions'>onions</option>
              <option value='wolf'>wolf</option>
            </select>
          <button onClick={this.props.handleColors} id='submitTheme' aria-label='submit color theme'>done</button>
        </div>
      );
    }
  }
  

export default App;
