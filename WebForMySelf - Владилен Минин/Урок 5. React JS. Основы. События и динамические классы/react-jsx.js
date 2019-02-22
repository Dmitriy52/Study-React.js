const e = React.createElement


function Car(props){
//	return(
//		<div className="card">
//	    	<div className="card-img">
//	    		<img 
//	    			src={props.car.img} 
//	    			alt={props.car.name} />
//	    	</div>
//	    	<h3>{props.car.name}</h3>
//	    	<p>{props.car.price} $</p>
//	    </div>
//  )

   return e('div', {className: 'card'}, [
       e('div', {className: 'card-img', key: 'div'}, e('img', {src: props.car.img, alt: props.car.name})),
       e('h3', {key: 'h3'}, props.car.name),
       e('p', {key: 'ppp'}, props.car.price)/*можно писать любые названия key главное что бы они были уникальны */
   ])
}

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
		//	return(
		//		<Car car={car} key = {car.name + Math.random()} />
		//	)
            return e(Car, {car: car, key: car.name + Math.random()})
        })
	}

	render(){
//		return(
//		<div className="app">
//			<div className="list">
//				{ this.renderCars() }
//			</div>
//		</div>
//		)
        return e('div', {className: 'app '}, e('div', {className: 'list'}, this.renderCars()))
	}
}



ReactDOM.render(e(App), document.getElementById('root'))