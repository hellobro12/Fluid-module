import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box as BoxMesh, Sphere } from '@react-three/drei';
import { Vector3 } from 'three';


function IdealFluidBall() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      
      meshRef.current.position.y -= 0.05;
      if (meshRef.current.position.y < -2) {
        meshRef.current.position.y = 2;
      }
    }
  });
  return <Sphere ref={meshRef} args={[0.2, 32, 32]} position={[-1, 2, 0]}>
    <meshStandardMaterial color="green" />
  </Sphere>;
}


function RealFluidBall() {
  const meshRef = useRef();
  const velocity = useRef(new Vector3(0, -0.05, 0)); 
  const friction = 0.99; 

  useFrame((state, delta) => {
    if (meshRef.current) {
      
      velocity.current.multiplyScalar(friction);
      meshRef.current.position.add(velocity.current);

      if (meshRef.current.position.y < -2) {
        meshRef.current.position.y = 2;
        
        velocity.current = new Vector3(0, -0.05, 0);
      }
    }
  });

  return <Sphere ref={meshRef} args={[0.2, 32, 32]} position={[1, 2, 0]}>
    <meshStandardMaterial color="red" />
  </Sphere>;
}

function RealVsIdeal() {
  return (
    <section style={{ height: '500px', margin: '20px 0' }}>
      <h2>Real vs. Ideal Fluids</h2>
      <p>This simulation compares the theoretical behavior of an ideal fluid with the real-world behavior of real fluids.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <p>Ideal Fluid (no drag)</p>
        <p>Real Fluid (with drag)</p>
      </div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BoxMesh args={[1.5, 5, 0.1]} position={[-1, 0, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="lightblue" transparent opacity={0.3} />
        </BoxMesh>
        <BoxMesh args={[1.5, 5, 0.1]} position={[1, 0, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="orange" transparent opacity={0.3} />
        </BoxMesh>
        <IdealFluidBall />
        <RealFluidBall />
      </Canvas>
    </section>
  );
}

export default RealVsIdeal;