
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

	addLabel(e){
		const {target,keyCode} = e
		//console.log(target, keyCode);  回车13
		if(keyCode !== 13) return
		const txt = target.value.trim()
		if(!txt.length) return
		this.state.dataList.push({
			name:txt
		})
		this.setState(this.state)
		target.value = ''
	}

	render () {
		return (
			<div>
				<section className="todoapp">
					{/*把父属性传给子节点,名字随便起*/}
					<Header keyDown={this.addLabel}/>
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
				<FootInfo />
			</div>
		)
	}
}
