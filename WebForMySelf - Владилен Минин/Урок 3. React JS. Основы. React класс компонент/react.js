function Car(props){
	return(
		<div className="card">
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


//const app = (
//	<div className="app">
//		<div className="list">
//			<Car car={{ name: 'BMW M2 Coupe', price: 20000, img: 'pic/bmw-m2.jpg' }} />
//			<Car car={{ name: 'Audi TT', price: 25000, img: 'pic/audiTT.jpg' }} />
//			<Car car={{ name: 'Rolls-Royce', price: 33000, img: 'pic/rolls-royce.webp' }} />
//			<Car car={{ name: 'Mercedes', price: 28000, img: 'pic/mercedes.jpg' }} />
//
//		</div>
//	</div>
//)
class App extends React.Component {

	state = {
		cars: [
			{ name: 'BMW M2 Coupe', price: 20000, img: 'pic/bmw-m2.jpg' },
			{ name: 'Audi TT', price: 25000, img: 'pic/audiTT.jpg' },
			{ name: 'Rolls-Royce', price: 33000, img: 'pic/rolls-royce.webp' },
			{ name: 'Mercedes', price: 28000, img: 'pic/mercedes.jpg' }
		]
	}

	renderCars() {
		return this.state.cars.map(car =>{
			return(
				<Car car={car} key = {car.name + Math.random()} />
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