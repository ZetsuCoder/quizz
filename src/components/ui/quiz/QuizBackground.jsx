// components/3d/QuizBackground.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function QuizBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Basic Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 2. Create Simple Shapes (no text for now)
    const geometries = [
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.TorusGeometry(0.4, 0.2, 16, 32),
      new THREE.ConeGeometry(0.5, 1, 32),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.7,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.7,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        transparent: true,
        opacity: 0.7,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.7,
      }),
    ];

    const shapes = [];
    for (let i = 0; i < 10; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * -10
      );
      mesh.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        rotationSpeed: new THREE.Vector3(
          Math.random() * 0.01,
          Math.random() * 0.01,
          Math.random() * 0.01
        ),
      };
      scene.add(mesh);
      shapes.push(mesh);
    }

    // 3. Camera Position
    camera.position.z = 5;

    // 4. Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((mesh) => {
        mesh.position.add(mesh.userData.velocity);
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;

        // Boundary check
        if (Math.abs(mesh.position.x) > 8) mesh.userData.velocity.x *= -1;
        if (Math.abs(mesh.position.y) > 8) mesh.userData.velocity.y *= -1;
        if (mesh.position.z > 5 || mesh.position.z < -15)
          mesh.userData.velocity.z *= -1;
      });

      renderer.render(scene, camera);
    };
    animate();

    // 5. Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
