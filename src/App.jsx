import React from 'react'
import './index.css'
import Scene from './Scene.jsx'

import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
const App = () => {




  return (
   <>
    <Canvas flat camera={{ fov: 32 }}>

      <OrbitControls />
      <ambientLight intensity={0.5} />

      <Scene />
     
       {/* <Bloom>
        {/* <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

       </Bloom>

       <noToneMapping>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
       </noToneMapping>
 */}


    </Canvas>



   
   </>



  )
}

export default App
