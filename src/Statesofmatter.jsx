import React, { useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box as BoxMesh } from '@react-three/drei';
import { Vector3 } from 'three';

// different state and things
function Particles({ count, state, statePositions }) {
  const meshRef = useRef();
  
  
  useFrame(() => {
    const particles = meshRef.current;
    if (!particles) return;
    
    
    switch (state) {
      case 'solid':
        
        break; 
      case 'liquid':
        
        for (let i = 0; i < count; i++) {
          const position = statePositions[i].clone();
          position.add(new Vector3(Math.sin(Date.now() * 0.001 + i) * 0.02, Math.cos(Date.now() * 0.001 + i) * 0.02, 0));
          particles.geometry.attributes.position.array[i * 3 + 0] = position.x;
          particles.geometry.attributes.position.array[i * 3 + 1] = position.y;
          particles.geometry.attributes.position.array[i * 3 + 2] = position.z;
        }
        break;
      case 'gas':
        
        for (let i = 0; i < count; i++) {
          const position = statePositions[i].clone();
          
          position.add(new Vector3(Math.sin(Date.now() * 0.001 + i) * 0.05, Math.cos(Date.now() * 0.001 + i) * 0.05, 0));
          particles.geometry.attributes.position.array[i * 3 + 0] = position.x;
          particles.geometry.attributes.position.array[i * 3 + 1] = position.y;
          particles.geometry.attributes.position.array[i * 3 + 2] = position.z;
        }
        break;
      default:
        break;
    }
    particles.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(statePositions.flatMap(v => v.toArray()))}
          itemSize={3}
        />
      </bufferGeometry>
      
      <pointsMaterial size={0.1} color="red" sizeAttenuation={true} transparent opacity={0.8} />
    </points>
  );
}

function StatesOfMatter() {
  const [state, setState] = useState('solid');
  const [particlePositions, setParticlePositions] = useState([]);
  const count = 150;


  React.useEffect(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push(new Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ));
    }
    setParticlePositions(positions);
  }, [count]);

  return (
    <section style={{ height: '600px', border: '0px solid #ccc', margin: '20px 0' }}>
      <h2>States of Matter: Solid, Liquid, Gas</h2>
      <p>This simulation shows the behavior of particles in different states.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
        <button onClick={() => setState('solid')} disabled={state === 'solid'}>Solid</button>
        <button onClick={() => setState('liquid')} disabled={state === 'liquid'}>Liquid</button>
        <button onClick={() => setState('gas')} disabled={state === 'gas'}>Gas</button>
      </div>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <BoxMesh args={[3, 3, 3]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="lightblue" transparent opacity={0.3} />
        </BoxMesh>
        {particlePositions.length > 0 && (
          <Particles count={count} state={state} statePositions={particlePositions} />
        )}
      </Canvas>
    </section>
  );
}

export default StatesOfMatter;
