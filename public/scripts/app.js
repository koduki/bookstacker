var MDL = require('mdl-reactjs');
var Button = MDL.Button;
var Card = MDL.Card;

let todos = [{
  id: '_1',
  name: 'Buy some milk',
  done: true
},{
  id: '_2',
  name: 'Birthday present to Alice',
  done: false
}];

class Todo extends React.Component {
  render() {
    const todo = this.props.todo;
    return (<li>{todo.name}<button>Done</button></li>);
  }
}

class TodoList extends React.Component {
  render() {
    const rows = this.props.todos
                  .filter((todo) => !todo.done)
                  .map((todo) => (<Todo key={todo.id} todo={todo}></Todo>));
    return (
      <div className="active-todos">
        <h2>Active</h2>
        <ul>{rows}</ul>
      </div>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : ''}
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.name.trim();
    alert(name);
    this.setState({
      name: ''
    });
  }

  render() {
    let disabled = this.state.name.trim().length <= 0;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input value={this.state.name} onChange={this.handleNameChange.bind(this)}></input>
        <input type="submit"></input>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
    	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    	  <header className="mdl-layout__header">
        <div className="mdl-layout__drawer-button">
  <i className="material-icons">menu</i>
</div>
    	    <div className="mdl-layout__header-row">
    	      <span className="mdl-layout-title">Book★Stacker</span>
    	      <div className="mdl-layout-spacer"></div>
    	      <nav className="mdl-navigation mdl-layout--large-screen-only">
    	        <a className="mdl-navigation__link" href="">Link</a>
    	        <a className="mdl-navigation__link" href="">Link</a>
    	        <a className="mdl-navigation__link" href="">Link</a>
    	        <a className="mdl-navigation__link" href="">Link</a>
    	      </nav>
    	    </div>
    	  </header>
    	  <div className="mdl-layout__drawer">
    	    <span className="mdl-layout-title">Book★Stacker</span>
    	    <nav className="mdl-navigation">
    	      <a className="mdl-navigation__link" href="">Link2</a>
    	      <a className="mdl-navigation__link" href="">Link2</a>
    	      <a className="mdl-navigation__link" href="">Link2</a>
    	      <a className="mdl-navigation__link" href="">Link2</a>
    	    </nav>
    	  </div>
    	  <main className="mdl-layout__content">
    	    <div className="page-content">
    				<div className="demo-grid-1 mdl-grid">
    				  <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet"><img className="item" src="http://cc.bookwalker.jp/0813571/t_x200.jpg" /></div>
    					<div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet"><img className="item" src="http://cc.bookwalker.jp/0813571/t_x200.jpg" /></div>
    					<div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet"><img className="item" src="http://cc.bookwalker.jp/0813571/t_x200.jpg" /></div>
    					<div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet"><img className="item" src="http://cc.bookwalker.jp/0813571/t_x200.jpg" /></div>
    					<div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet"><img className="item" src="http://cc.bookwalker.jp/0813571/t_x200.jpg" /></div>
    					<div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet"><img className="item" src="http://cc.bookwalker.jp/0813571/t_x200.jpg" /></div>
    					<div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet"><img className="item" src="http://cc.bookwalker.jp/0813571/t_x200.jpg" /></div>
    				</div>
    			</div>
    	  </main>
    	</div>
    );
  }
}

React.render(
  <App></App>,
  document.getElementById('content')
);
