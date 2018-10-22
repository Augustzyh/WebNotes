class Header extends React.Component{
	constructor(props){
		super(props)  //需要父子通信拿到addLabel方法 先在父组件上传值
		this.state = {
			keyDown: props.keyDown
		}
	}
	render() {
		return (
			<div>
				<header className="header">
					<h1>todos</h1>
					{/*子组件要用父组件，只能通过父组件传值,子就能通过props获取*/}
					<input onKeyDown={this.state.keyDown} className="new-todo" placeholder="What needs to be done?" autoFocus/>
				</header>
			</div>
		)
	}
}
