var startTime;

function startButton() {
    startTime = Date.now();
}

function stopButton() {
    if (startTime) {
        var endTime = Date.now();
        var difference = endTime - startTime;
         alert('Reaction time: ' + difference + ' ms');
		startTime = null;
		
    } else {
        alert('Click the Start button first');
		
    }
	
	
}