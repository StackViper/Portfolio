import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Create a simple target shape instead of loading external model */}
      <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
      <meshStandardMaterial color="#ff6b6b" />
      
      {/* Target rings */}
      <mesh position={[0, 0.15, 0]}>
        <ringGeometry args={[0.3, 0.4, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <ringGeometry args={[0.15, 0.25, 32]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <ringGeometry args={[0.05, 0.1, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </mesh>
  );
};

export default Target;