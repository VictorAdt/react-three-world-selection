import React, { useState, useEffect, useRef, Suspense } from "react"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './../components/styles.css'
import { Canvas, useLoader, useFrame, extend, useThree } from 'react-three-fiber'
import { useSpring, animated } from 'react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { SpotLight } from "three"
import Text from './../components/Text'


extend({ OrbitControls })


const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
    useFrame(() => {
        orbitRef.current.update()
    })
    return (
        <orbitControls
            /* maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3} */
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    )
}

const Plane = () => (
    <mesh
        rotation={[- Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
    >
        <planeBufferGeometry
            attach="geometry"
            args={[100, 100]}
        />
        <meshStandardMaterial
            attach="material"
            color="red"
        />
    </mesh>
)

const Boxa = () => {
    const gltf = useLoader(GLTFLoader, '/static/planet-split.glb')

    const boxRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const { color, scale, ...props } = useSpring({
        color: active ? 'hotpink' : 'blue',
        scale: hovered ? [1, 1.1, 1.1] : [1, 1, 1],
    })

    return (
        <animated.mesh
            ref={boxRef}
            onPointerOver={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}
            onClick={e => setActive(!active)}
            {...props}
            scale={scale}>
            <primitive object={gltf.nodes.plane}>
            </primitive>
        </animated.mesh>
    )
}

const Mountain = () => {
    const gltf = useLoader(GLTFLoader, '/static/planet-split.glb')
    const boxRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const { color, scale, ...props } = useSpring({
        color: active ? 'hotpink' : 'blue',
        scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    })
    return (
        <animated.mesh
            ref={boxRef}
            onPointerOver={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}
            onClick={e => setActive(!active)}
            {...props}
            scale={scale}>
            <primitive object={gltf.nodes.mountain}>
            </primitive>
        </animated.mesh>
    )
}

const NorthPole = () => {
    const gltf = useLoader(GLTFLoader, '/static/planet-split.glb')

    const boxRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const { color, scale, ...props } = useSpring({
        color: active ? 'hotpink' : 'blue',
        scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    })
    console.log(gltf);

    return (
        <animated.mesh
            ref={boxRef}
            onPointerOver={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}
            onClick={e => setActive(!active)}
            {...props}
            scale={scale}>
            <primitive object={gltf.nodes.northpole} position={[0, 0, 0]}>
            </primitive>
        </animated.mesh>
    )
}

const SouthPole = () => {
    const gltf = useLoader(GLTFLoader, '/static/planet-split.glb')

    const boxRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const { color, scale, ...props } = useSpring({
        color: active ? 'hotpink' : 'blue',
        scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    })
    console.log(gltf);


    return (
        <animated.mesh
            ref={boxRef}
            onPointerOver={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}
            onClick={e => setActive(!active)}
            {...props}
            scale={scale}>
            <primitive object={gltf.nodes.southpole} position={[0, 0, 0]}>
            </primitive>
        </animated.mesh>
    )
}

const Desert = () => {
    const gltf = useLoader(GLTFLoader, '/static/planet-split.glb')

    const boxRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const { color, scale, ...props } = useSpring({
        color: active ? 'hotpink' : 'blue',
        scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    })
    console.log(gltf);


    return (
        <animated.mesh
            ref={boxRef}
            onPointerOver={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}
            onClick={e => setActive(!active)}
            {...props}
            scale={scale}>
            <primitive object={gltf.nodes.desert} position={[0, 0, 0]}>
            </primitive>
        </animated.mesh>
    )
}

const Boxb = () => {
    const gltf = useLoader(GLTFLoader, '/static/planet-split.glb')

    const boxRef = useRef()


    return (
        <mesh
            ref={boxRef}>
            <primitive object={gltf.nodes.water}>
            </primitive>
            <ambientLight />
        </mesh>
    )
}

// useFrame(() => (boxRef.current.rotation.y += 0.00000000000000000000000000001))

const IndexPage = () => (
    <Canvas>
        <fog attach="fog" args={["white", 10, 20]} />
        <Controls />
        <Suspense fallback={null}>
            <pointLight position={[-10, -10, -10]} penumbra={1} />
            <pointLight position={[10, 10, 10]} penumbra={1} />
 
            <Text fontSize={1} lineHeight={1} letterSpacing={-0.05}>
                <meshBasicMaterial color="#cccccc" />
                Victor Audétat
            </Text>
        </Suspense>
    </Canvas>
)

export default IndexPage
