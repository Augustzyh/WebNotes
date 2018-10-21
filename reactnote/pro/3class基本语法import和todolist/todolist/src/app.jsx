
/*
* 改错步骤：
* 1 单标签闭合
* 2 autoFocus
* 3 for -> htmlFor
* 4 注释
* 5 defaultChecked
* 6 defaultValue
* */
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			dataList: [
				{name: 'hang'},
				{name: 'august'},
				{name: 'octopus'}
			]
		}
		this.outputList = this.outputList.bind(this)
		this.addLabel = this.addLabel.bind(this)
	}

	outputList () {
		return this.state.dataList.map((val, idx) => {
			return (
				<li key={idx} className="completed">
					<div className="view">
						<input className="toggle" type="checkbox" defaultChecked />
						<label>{val.name}</label>
						<button className="destroy"></button>
					</div>
					<input className="edit" defaultValue="Create a TodoMVC template"/>
				</li>
			)
		})
	}

	addLabel(){
		console.log(123);
	}

	render () {
		return (
			<div>
				<section className="todoapp">
					<header className="header">
						<h1>todos</h1>
						<input onKeyDown={this.addLabel} className="new-todo" placeholder="What needs to be done?" autoFocus/>
					</header>
					{/*!-- This section should be hidden by default and shown when there are todos --*/}
					<section className="main">
						<input id="toggle-all" className="toggle-all" type="checkbox"/>
							<label htmlFor="toggle-all">Mark all as complete</label>
							<ul className="todo-list">
								{/*!-- These are here just to show the structure of the list items --*/}
								{/*!-- List items should get the class `editing` when editing and `completed` when marked as completed --*/}
								<li className="completed">
									<div className="view">
										<input className="toggle" type="checkbox" defaultChecked />
											<label>Taste JavaScript</label>
											<button className="destroy"></button>
									</div>
									<input className="edit" defaultValue="Create a TodoMVC template"/>
								</li>
								{/*<li>
									<div className="view">
										<input className="toggle" type="checkbox"/>
											<label>Buy a unicorn</label>
											<button className="destroy"></button>
									</div>
									<input className="edit" defaultValue="Rule the web"/>
								</li>*/}
								{this.outputList()}
								{this.state.dataList.map((val, idx) => {
									return (
										<li key={idx}>
											<div className="view">
												<input className="toggle" type="checkbox"/>
												<label>{val.name}</label>
												<button className="destroy"></button>
											</div>
											<input className="edit" defaultValue="Rule the web"/>
										</li>
									)
								})}
							</ul>
					</section>
					{/*!-- This footer should hidden by default and shown when there are todos --*/}
					<footer className="footer">
						{/*!-- This should be `0 items left` by default --*/}
						<span className="todo-count"><strong>0</strong> item left</span>
						{/*!-- Remove this if you don't implement routing --*/}
						<ul className="filters">
							<li>
								<a className="selected" href="#/">All</a>
							</li>
							<li>
								<a href="#/active">Active</a>
							</li>
							<li>
								<a href="#/completed">Completed</a>
							</li>
						</ul>
						{/*!-- Hidden if no completed items are left �� --*/}
						<button className="clear-completed">Clear completed</button>
					</footer>
				</section>
				<footer className="info">
					<p>Double-click to edit a todo</p>
					{/*!-- Remove the below line �� --*/}
					<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
					{/*!-- Change this out with your name and url �� --*/}
					<p>Created by <a href="http://todomvc.com">you</a></p>
					<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
				</footer>
			</div>
		)
	}
}
