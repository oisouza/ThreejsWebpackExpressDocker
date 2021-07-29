
class motorGame {
    $spriteScripts
    $scene
    $cameraScript
    $renderer
    domElement

    constructor(spriteScripts, scene, cameraScript, renderer){
        this.$setup(spriteScripts, scene, cameraScript, renderer)
    }

    $setup(spriteScripts, scene, cameraScript, renderer)
    {        
        this.$spriteScripts = spriteScripts
        this.$scene = scene
        this.$cameraScript = cameraScript
        this.$renderer = renderer
        this.domElement = renderer.domElement
    }

    load() {
        this.$cameraScript.load()
        this.$spriteScripts.forEach(
            spriteScript => 
            {
                this.$scene.add(spriteScript.threeMesh);
                spriteScript.load()
            })
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.$spriteScripts.forEach(spriteScript => {
            spriteScript.animate()
            this.$cameraScript.animate()
            this.$render()
        });
    }
    
    $render() {
        this.$renderer.render(this.$scene, this.$cameraScript.threeCamera);
    } 
}

export {motorGame}