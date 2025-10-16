import React, { useState, useEffect, useMemo, useRef } from 'react';

const PolygonalSphere = ({
                             size = 200,
                             lineColor = '#00bcd4',
                             lineWidth = 1,
                             animationDuration = 20, // Duración en segundos para una rotación completa
                             rotationX = true,
                             rotationY = true,
                             rotationZ = false,
                             polygonCount = 30,
                             perspective = 500,
                             initialRotation = 0,
                         }) => {
    const [rotation, setRotation] = useState(Number(initialRotation));
    const animationFrameId = useRef(null);

    const radius = 40; // Radio base

    // useMemo para optimizar: solo recalcula si polygonCount cambia
    const vertices = useMemo(() => {
        const numVertices = polygonCount * 2;
        const verts = [];
        for (let i = 0; i < numVertices; i++) {
            const lat = Math.acos(-1 + (2 * i) / numVertices);
            const lon = Math.sqrt(numVertices * Math.PI) * lat;
            const x = radius * Math.sin(lat) * Math.cos(lon);
            const y = radius * Math.sin(lat) * Math.sin(lon);
            const z = radius * Math.cos(lat);
            verts.push({ x, y, z });
        }
        return verts;
    }, [polygonCount]);

    // useMemo para optimizar: solo recalcula si los vértices cambian
    const edges = useMemo(() => {
        const generatedEdges = new Set();
        const edgesArray = [];
        const threshold = radius * 0.7; // Umbral de distancia para conectar

        for (let i = 0; i < vertices.length; i++) {
            for (let j = i + 1; j < vertices.length; j++) {
                const dist = Math.sqrt(
                    Math.pow(vertices[i].x - vertices[j].x, 2) +
                    Math.pow(vertices[i].y - vertices[j].y, 2) +
                    Math.pow(vertices[i].z - vertices[j].z, 2)
                );
                if (dist < threshold) {
                    const edgeKey = `${Math.min(i, j)}-${Math.max(i, j)}`;
                    if (!generatedEdges.has(edgeKey)) {
                        edgesArray.push([i, j]);
                        generatedEdges.add(edgeKey);
                    }
                }
            }
        }
        return edgesArray;
    }, [vertices]);

    // useEffect para manejar la animación
    useEffect(() => {
        const animate = () => {
            // La velocidad se ajusta según la duración deseada de la animación
            const rotationSpeed = 360 / (animationDuration * 60); // 60 FPS asumidos
            setRotation((prevRotation) => (prevRotation + rotationSpeed) % 360);
            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        // Función de limpieza para detener la animación cuando el componente se desmonta
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [animationDuration]); // Vuelve a ejecutar si cambia la duración

    // Proyecta los puntos 3D a 2D para el SVG
    const projectPoint = (index, currentRotation) => {
        const vert = vertices[index];
        let { x, y, z } = vert;

        const rad = (currentRotation * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        if (rotationX) {
            const tempY = y * cos - z * sin;
            const tempZ = y * sin + z * cos;
            y = tempY;
            z = tempZ;
        }
        if (rotationY) {
            const tempX = x * cos + z * sin;
            const tempZ = -x * sin + z * cos;
            x = tempX;
            z = tempZ;
        }
        if (rotationZ) {
            const tempX = x * cos - y * sin;
            const tempY = x * sin + y * cos;
            x = tempX;
            y = tempY;
        }

        const scale = perspective / (perspective + z);
        return {
            x: 50 + x * scale,
            y: 50 + y * scale,
            z: z, // Mantener 'z' para calcular la opacidad
        };
    };

    const containerStyle = {
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        perspective: `${perspective}px`,
    };

    const projectedEdges = edges.map(edge => {
        const p1 = projectPoint(edge[0], rotation);
        const p2 = projectPoint(edge[1], rotation);
        const avgZ = (p1.z + p2.z) / 2;
        const opacity = Math.max(0.2, 1 - (avgZ + radius) / (2 * radius));
        return { p1, p2, opacity };
    });

    return (
        <div style={containerStyle}>
            <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                <g>
                    {projectedEdges.map(({ p1, p2, opacity }, index) => (
                        <line
                            key={index}
                            x1={p1.x}
                            y1={p1.y}
                            x2={p2.x}
                            y2={p2.y}
                            stroke={lineColor}
                            strokeWidth={lineWidth}
                            style={{ opacity, transition: 'opacity 0.1s ease-out' }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default PolygonalSphere;