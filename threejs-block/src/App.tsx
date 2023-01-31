import React, {useRef, useState} from 'react';
import './App.css';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import { Vector3} from "three";

const App = () => {
    return(
      <div className="scene">
          <Canvas>
              <ambientLight />
              <pointLight position={[100, 100, 10]} />
              <group>
                  <Box position={new Vector3(-20,0,0)} color={new THREE.Color("blue")}/>
                  <Box position={new Vector3(0.3, 0, 0)} color={new THREE.Color("green")}/>
                  <Box position={new Vector3(20.6, 0, 0)} color={new THREE.Color("red")}/>
                  <Box position={new Vector3(40.9, 0, 0)} color={new THREE.Color("yellow")}/>
                  {/*Etage 2*/}
                  <Box position={new Vector3(-20,10.3,0)} color={new THREE.Color("blue")}/>
                  <Box position={new Vector3(0.3, 10.3, 0)} color={new THREE.Color("green")}/>
                  <Box position={new Vector3(20.6, 10.3, 0)} color={new THREE.Color("blue")}/>
                  <Box position={new Vector3(40.9, 10.3, 0)} color={new THREE.Color("green")}/>
                  {/*Etage 3*/}
                  <Box position={new Vector3(-20,20.6,0)} color={new THREE.Color("yellow")}/>
                  <Box position={new Vector3(0.3, 20.6, 0)} color={new THREE.Color("blue")}/>
                  <Box position={new Vector3(20.6, 20.6, 0)} color={new THREE.Color("yellow")}/>
                  <Box position={new Vector3(40.9, 20.6, 0)} color={new THREE.Color("blue")}/>
              </group>
              <OrbitControls screenSpacePanning/>
              <PerspectiveCamera
                  makeDefault
                  zoom={2}
                  near={1}
                  far={2000}
                  position={[-120, 35, 70]}/>
              <Stats />
          </Canvas>
      </div>
  )
}

interface IBox {
    position:Vector3
    color: THREE.Color
}

const Box = (props:IBox) => {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <mesh
            position={props.position}
            ref={mesh}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <boxGeometry args={[20, 10, 10]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
        </mesh>
    )
}

export default App;
