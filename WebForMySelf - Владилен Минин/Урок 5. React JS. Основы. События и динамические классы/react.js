function Car(props){

	const classes = ['card'] //класс дива


	if (props.car.marked){ //если метод marked(написан ниже) = true  тогда добавляем класс marked  
		classes.push('marked')
	}

	return(  // join - служит для соединения елиментов join(' ') - соединить при помощи пробела
		<div className={classes.join(' ')} onClick={props.onMark}> 
	    	<div className="card-img">
	    		<img 
	    			src={props.car.img} 
	    			alt={props.car.name} />
	    	</div>
	    	<h3>{props.car.name}</h3>
	    	<p>{props.car.price} $</p>
	    </div>
  )
}

class App extends React.Component {

	state = {
		cars: [
			{ marked: false, name: 'BMW M2 Coupe', price: 20000, img: 'pic/bmw-m2.jpg' },
			{ marked: false, name: 'Audi TT', price: 25000, img: 'pic/audiTT.jpg' },
			{ marked: false, name: 'Rolls-Royce', price: 33000, img: 'pic/rolls-royce.webp' },
			{ marked: false, name: 'Mercedes', price: 28000, img: 'pic/mercedes.jpg' }
		],
		visible: true,
		appTitle: 'Cars aplication'
	}

	hendleMarked() {  //метод получает имя машины --------> для hendleMarked создан(ниже) метод onMark!!!!!!!!!!!!!
		const cars = this.state.cars.concat() // копия массива cars(выше) которая взта из state --> cars. Реализована методом concat, который предназначен для клонирования
		
		const car = cars.find(c => c.name === name)  //find - от анг. нщупать, найти, розыскать
		car.marked = !car.marked

		this.setState({cars: cars})  //1-й cars - это ключ. 2-й - это значение. (можно сократить и написать просто cars один раз) 

	}

toggleHandler(){
	this.setState({visible: !this.state.visible})	
	console.log("Working!!!=)")
}

	renderCars() {

		if (!this.state.visible){
			return null
		}

		return this.state.cars.map(car =>{
			return(
				<Car
				  car = {car}
				  key = {car.name + Math.random()} 
				  onMark = {this.hendleMarked.bind(this, car.name)} //bind - что бы не потерять ключевое слово this
				/>
			)
		})
	}

titleChancheHandler(title){
	if (title.trim() === '') {
		return
	}
	this.setState({
		appTitle: title
	})
}


	render(){
		const style = {
			marginRight: 20
		}
		return(
		<div className="app">
			<h1>{this.state.appTitle}</h1>
				
			<button onClick={() => this.toggleHandler()}
			style={style}
			>Toggle</button>
			
			<input
				type="text"
				placeholder="Change title"
				onChange={ (event) => this.titleChancheHandler(event.target.value)}
				value={this.state.appTitle}
			/>

			<hr/>
 
			<div className="list">
				{ this.renderCars() }
			</div>
		</div>
		)
	}
}



ReactDOM.render(<App />, document.getElementById('root'))