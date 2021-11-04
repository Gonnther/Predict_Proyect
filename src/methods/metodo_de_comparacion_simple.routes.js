//Method Comparacion Simple
//Clases 
// 1 = 0 0 0 y 0
// 9 = 0 0 0 y 1

// 2 =  0 0 1 y 0
// 10 = 0 0 1 y 1

// 3 =  0 1 0 y 0
// 11 = 0 1 0 y 1

// 4 =  1 0 0 y 0
// 12 = 1 0 0 y 1

// 5 =  0 1 1 y 0
// 13 = 0 1 1 y 1

// 6 =  1 1 0 y 0
// 14 = 1 1 0 y 1

// 7 =  1 1 1 y 0
// 15 = 1 1 1 y 1

// 8 =  1 0 1 y 0
// 16 = 1 0 1 y 1

// let CompSimple = {
// 	cero: [
// 	{1: [0, 0]},
// 	{2: [0, 0]},
// 	{3: [0, 0]},
// 	{4: [0, 0]},
// 	{5: [0, 0]},
// 	{6: [0, 0]},
// 	{7: [0, 0]},
// 	{8: [0, 0]}
// 	],
// 	uno: [
// 	{1: [0, 0]},
// 	{2: [0, 0]},
// 	{3: [0, 0]},
// 	{4: [0, 0]},
// 	{5: [0, 0]},
// 	{6: [0, 0]},
// 	{7: [0, 0]},
// 	{8: [0, 0]},
// 	],
	
// 	sumar: function() {
// 		for(let i = 0; i < this.cero.length; i++) {
// 			if(this.cero[i][i+1][0] != 0 && this.uno[i][i+1][0] != 0) {
// 				let undos = this.cero[i][i+1][0] + this.uno[i][i+1][0];
// 				undos = undos / 100;
// 				this.cero[i][i+1][1] = this.cero[i][i+1][0] / undos;
// 				this.uno[i][i+1][1] = this.uno[i][i+1][0] / undos;
// 			}
// 		}
// 	},


// 	validacion: function(dato) {
// 			dato = String(dato);
// 			if(dato === '0000') this.cero[0][1][0] += 1;

// 			if(dato === '0001') this.uno[0][1][0] += 1;
		
// 			if(dato === '0010') this.cero[1][2][0] += 1;
		
// 			if(dato === '0011') this.uno[1][2][0] += 1;
		
// 			if(dato === '0100') this.cero[2][3][0] += 1;
		
// 			if(dato === '0101') this.uno[2][3][0] += 1;
		
// 			if(dato === '1000') this.cero[3][4][0] += 1;
		
// 			if(dato === '1001') this.uno[3][4][0] += 1;
		
// 			if(dato === '0110') this.cero[4][5][0] += 1;
		
// 			if(dato === '0111') this.uno[4][5][0] += 1;
		
// 			if(dato === '1100') this.cero[5][6][0] += 1;
		
// 			if(dato === '1101') this.uno[5][6][0] += 1;
		
// 			if(dato === '1110') this.cero[6][7][0] += 1;
		
// 			if(dato === '1111') this.uno[6][7][0] += 1;
		
// 			if(dato === '1010') this.cero[7][8][0] += 1;
		
// 			if(dato === '1011') this.uno[7][8][0] += 1;
// 	},
// 	Task: fetch('/api/tasks')
// 	.then((resp) => resp.json())
// 	.then(function(data) {
// 	data.choisee.forEach(choi => {
// 		this.validacion(choi);
// 		})
// 	})

// 	comparacion: function(comparar) {
// 		if(comparar === devolver) {
// 			this.porcDeAcierto += 1;
// 		};
// 		else {
// 			this.porcDeFallo += 1;
// 		}
// 	},
// 	revisados: function() {
// 		revisados = task.id
// 	},
// 	devolver: null,
// 	porcDeAcierto: 0,
// 	porcDeFallo: 0,

// }
// module.exports = metodoClases;



