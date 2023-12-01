import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';

function STLModel({ url }) {
  const ref = useRef();
  const [model, setModel] = useState();

  useEffect(() => {
    const loader = new STLLoader();
    loader.load(url, (geometry) => {
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      
      const scale = 0.04;
      mesh.scale.set(scale, scale, scale);
      setModel(mesh);
    });
  }, [url]);

  useFrame(() => {
    if (ref.current) {
    //   ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return model ? <primitive ref={ref} object={model} /> : null;
}

function STLViewer({ stlFile }) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <STLModel url={stlFile} />
    </Canvas>
  );
}

export default STLViewer;
