let analyser
let request
export const visualizer = (audioElement, canvas, play) => {
    if(!analyser) {
        const AudioCotext = window.AudioContext
        const audioCtx = new AudioCotext()
        // copy audio source data to manipulate later
        let source = audioCtx.createMediaElementSource(audioElement)
        analyser = audioCtx.createAnalyser()
        source.connect(analyser)
        source.connect(audioCtx.destination)
    }

    // set audio analyser
    analyser.fftSize = 64
    let bufferLength = analyser.frequencyBinCount //analyser.fftSize/2
    let dataArray = new Uint8Array(bufferLength)
    console.log(dataArray)
    // Draw visualizer
    const ctx = canvas.getContext("2d")
    const WIDTH = canvas.width = canvas.clientWidth
    const HEIGHT = canvas.height = canvas.clientHeight

    function draw() {
        request = requestAnimationFrame(draw)
        analyser.getByteTimeDomainData(dataArray)
        ctx.beginPath()
        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        for (let i = 0; i < bufferLength; i++) {
            let v = dataArray[i] / 10
            ctx.arc(WIDTH/2, HEIGHT/2, Math.abs(100 + v), 0, 2*Math.PI)
            ctx.shadowColor = '#b2277A'
            ctx.shadowBlur = 3
            ctx.strokeStyle = 'white'
            ctx.stroke()
        }
    }
    if(play) {
        cancelAnimationFrame(request)
    } else {
        draw()
    }
}