const cars = [
	{ name: 'BMW M2 Coupe', price: 20000, img: 'pic/bmw-m2.jpg' },
	{ name: 'Audi TT', price: 25000, img: 'pic/audiTT.jpg' },
	{ name: 'Rolls-Royce', price: 33000, img: 'pic/rolls-royce.webp' },
	{ name: 'Mercedes', price: 28000, img: 'pic/mercedes.jpg' }
]
function createCar(car){
	return `
	    <div class="card">
	    	<div class="card-img">
	    		<img 
	    			src="${car.img}" 
	    			alt="${car.name}">
	    	</div>
	    	<h3>${car.name}</h3>
	    	<p>${car.price} $</p>
	    </div>
			`
}

const templates = cars.map(car => createCar(car))
const html = templates.join(' ')

document.querySelector('.list').innerHTML = html