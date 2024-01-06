'use client'

import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import { motion } from 'framer-motion'

type MeshT = {
  type?: 'plane' | 'sphere' | 'waterPlane'
  animate?: 'on' | 'off'
  uTime?: number
  uSpeed?: number
  uStrength?: number
  uDensity?: number
  uFrequency?: number
  uAmplitude?: number
  positionX?: number
  positionY?: number
  positionZ?: number
  rotationX?: number
  rotationY?: number
  rotationZ?: number
  color1?: string
  color2?: string
  color3?: string
  reflection?: number
  wireframe?: boolean
  shader?: string
  rotSpringOption?: any
  posSpringOption?: any
}

type GradientT = MeshT & {
  control?: 'query' | 'props'
  isFigmaPlugin?: boolean
  dampingFactor?: number

  // View (camera) props
  cAzimuthAngle?: number
  cPolarAngle?: number
  cDistance?: number
  cameraZoom?: number

  // Effect props
  lightType?: '3d' | 'env'
  brightness?: number
  envPreset?: 'city' | 'dawn' | 'lobby'
  grain?: 'on' | 'off'

  // Tool props
  zoomOut?: boolean
  toggleAxis?: boolean
  hoverState?: string
}

const animation = {
  hiddenBg: { opacity: 0 },
  visibleBg: { opacity: 1 },
};
export default function GradientBackground() {
  return (
    <motion.span
      className={'absolute w-full h-full z-[-1] t-calc(50% + 1rem)'}
      variants={animation}
      initial="hiddenBg"
      animate="visibleBg"
      transition={{ delay: 2.5, duration: 5 }}
    >
      <ShaderGradientCanvas
        style={{
          position: '',
          top: 0,
          zIndex: -1,
        }}
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0.3&positionY=-0.3&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=positionMix&toggleAxis=false&type=plane&uAmplitude=1.4&uDensity=1.8&uFrequency=5.5&uSpeed=0.1&uStrength=3.8&uTime=0&wireframe=false&zoomOut=false'
        />
      </ShaderGradientCanvas>
    </motion.span>
  );
}
