window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		particles = [],
		numParticles = 100;


	for (var i = 0; i < numParticles; i += 1) {
		particles.push(particle.create(width / 2, height / 3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1));
		

	}

	update();

	function update() {
		context.clearRect(0,0,width,height);

		for(var i= 0; i < 100; i += 1) {
			var p = particles[i];

			p.update();
			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), 10,0,Math.PI * 2, false);
			if (context.fillStyle == "#000000") {
				var randInt1 = Math.floor(Math.random() * 100);
				var randInt2 = Math.floor(Math.random() * 100);
				var randInt3 = Math.floor(Math.random() * 100);
				context.fillStyle = "rgba(" + randInt1.toString() + "," + randInt2.toString() + "," + randInt3.toString() + "," + randInt3.toString() + ")";
			}
			context.fill();
			
		}

		requestAnimationFrame(update);
	}

};