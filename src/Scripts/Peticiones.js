



document.addEventListener("DOMContentLoaded", async function (event) {

	await DezeerRequest();
	imprimir();

})



async function DezeerRequest(){
	
	var select = document.getElementById('DezeerSelect');
	var selectedOption = select.selectedIndex;
	const DivDezeer=document.getElementById('DezeerTabla');
	const EncabezadoDezeer=document.getElementById('Encabezado');
	DivDezeer.innerHTML=''
	var playlist='';
	var nombre='';
	var contenido='';
	var TablaRespaldo=document.createElement('tr');
	if(selectedOption==0){
		 playlist='6651515744';
		 EncabezadoDezeer.innerHTML="TOP HITS MEXICO"
		 nombre='TopHitsMexico';
	}
	if(selectedOption==1){
		playlist='10896810924';
		EncabezadoDezeer.innerHTML="TOP WORLDWIDE"
		nombre='TopHitsWorld';
	}
	if(selectedOption==2){
		playlist='1868167046';
		EncabezadoDezeer.innerHTML="TOP HITS ARGENTINA"
		nombre='TopHitsArgentina';
	}
	if(selectedOption==3){
		playlist='1313621735';
		EncabezadoDezeer.innerHTML="TOP HITS USA"
		nombre='TopHitsUsa';
	}else{
		playlist='6651515744';
		EncabezadoDezeer.innerHTML="TOP HITS MEXICO"
		nombre='TopHitsMexico';
	}
	


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f9e59b9f8cmsh9122b4d22a32b42p16b324jsn7b378baa0ce9',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
		}
	};
	
	fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/'+playlist, options)
		.then(response => response.json())
		.then(response =>{
			console.log(response.tracks.data)
			for(i=0;i<response.tracks.data.length;i++){
			
				var tr=document.createElement('tr');
				
				tr.innerHTML=`
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${i+1}</td>
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.tracks.data[i].title_short }</td>
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.tracks.data[i].artist.name }</td>
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.tracks.data[i].duration} Segundos</td>
				`
				//TablaRespaldo+=JSON.stringify(response.tracks.data[i]);
	
				DivDezeer.appendChild(tr);
			}

			
		})
		
		.catch(err => console.error(err));


		//contenido=TablaRespaldo;
		
			/*const a = document.createElement("a");
			const archivo = new Blob([contenido], { type: 'text/plain' });
			const url = URL.createObjectURL(archivo);
			a.href = url;
			a.download = nombre;
			a.click();
			URL.revokeObjectURL(url);*/
		
} 


