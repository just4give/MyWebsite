	var counter = 1;
	var c1arr = ["Spring", "Node.JS","Spring Social"];
	var c2arr = ["Hibernate", "Angular","OAuth2"];
	var c3arr = ["JPA", "Express.JS","JSON"];
	var c4arr = ["REST", "MongoDB","HTML5"];
	var startAnimation = function(){

	setInterval(function(){
		console.log('Fade In');
		circle1 = document.getElementById('circle-1');
		circle2 = document.getElementById('circle-2');
		circle3 = document.getElementById('circle-3');
		circle4 = document.getElementById('circle-4');
		txt1 = $('#txt-1');
		txt2 = $('#txt-2');
		txt3 = $('#txt-3');
		txt4 = $('#txt-4');
		circle1.className = 'circle-lg color-1  fade-out one';
		circle2.className = 'circle-lg color-2  fade-out two';
		circle3.className = 'circle-lg color-3  fade-out three';
		circle4.className = 'circle-lg color-4  fade-out four';
		setTimeout(function(){
			circle1.className = 'circle-lg color-1  fade-in one';
			circle2.className = 'circle-lg color-2  fade-in two';
			circle3.className = 'circle-lg color-3  fade-in three';
			circle4.className = 'circle-lg color-4  fade-in four';
			txt1.text(c1arr[counter%3]);
			txt2.text(c2arr[counter%3]);
			txt3.text(c3arr[counter%3]);
			txt4.text(c4arr[counter%3]);
			counter++;
			},2000)
		
		},5000);
	};
	
	