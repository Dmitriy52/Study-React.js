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
		]
	}

	hendleMarked() {  //метод получает имя машины --------> для hendleMarked создан(ниже) метод onMark!!!!!!!!!!!!!
		const cars = this.state.cars.concat() // копия массива cars(выше) которая взта из state --> cars. Реализована методом concat, который предназначен для клонирования
		
		const car = cars.find(c => c.name === name)  //find - от анг. нщупать, найти, розыскать
		car.marked = !car.marked

		this.setState({cars: cars})  //1-й cars - это ключ. 2-й - это значение. (можно сократить и написать просто cars один раз) 

	}

	renderCars() {
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

	render(){
		return(
		<div className="app">
			<div className="list">
				{ this.renderCars() }
			</div>
		</div>
		)
	}
}



ReactDOM.render(<App />, document.getElementById('root'))