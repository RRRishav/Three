import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
const Scene = () => {


    let texture = useTexture("../public/im2.png")
    let cyl = useRef(null)
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta
    })
    texture.needsUpdate = true
    return (
        <group  rotation={[0, 1.4, 1.5]}>
            <mesh ref={cyl} >
                <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
                <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />

            </mesh>
        </group>
    )
}

export default Scene
