
class cameraScript {
    threeCamera
    load
    animate

    constructor(
        threeCamera,
        load = () => {}, 
        animate = () => {}){
        this.threeCamera = threeCamera
        this.load = load
        this.animate = animate
    }
}

export {cameraScript}