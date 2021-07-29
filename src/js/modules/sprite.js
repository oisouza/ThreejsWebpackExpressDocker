import { Mesh } from "three";

class sprite {
    mesh

    constructor(geometry, material){
        this.$mesh = new Mesh(geometry, material);
    }
}

export {sprite}