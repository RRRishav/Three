import React from 'react'
import './index.css'
import Scene from './Scene.jsx'

import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
const App = () => {




  return (
   <>
    <Canvas flat camera={{ fov: 35 }}>

      <OrbitControls />
      <ambientLight intensity={0.5} />

      <Scene />
     
    



    </Canvas>



   
   </>



  )
}

export default App
