import CompSimple from './metodo_de_comparacion_simple';

fetch(process.env.TASKS_URI)
.then((resp) => resp.json())
.then(function(data) {
	data.choisee.forEach(choi => {
		CompSimple.validacion(choi);
	})
})

const metodosArray = [CompSimple]


function metodos(state){
	let x = 0;
	let metodoPrincipal = null;
	for(let i = 0; i < metodosArray.lenth; i++) {
		x = metodos[i].porcDeAcierto;
		if(x > metodos[i-1].porcDeAcierto || metodos[i-1].porcDeAcierto === undefined) {
			metodoPrimcipal = metodosArray[i];
		}
	}

	metodoPrincipal.
}

metodos();