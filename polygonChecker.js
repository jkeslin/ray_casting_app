// Function to determine if a point is inside a polygon using the ray casting algorithm
const isPointInPolygon = (point, vertices) => {
    const [x, y] = point;
    let inside = false;

    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
        const [xi, yi] = vertices[i];
        const [xj, yj] = vertices[j];

        // Assume horizontal ray
        // Check if the edge straddles the horizontal line
        const isStraddle = (yi > y) !== (yj > y);

        // Calculate the x-coordinate of the intersection
        const intersectionX = (xj - xi) * (y - yi) / (yj - yi) + xi;

        // Determine if the ray intersects the edge
        const intersect = isStraddle && (x < intersectionX);
        
        // if odd value of intersections return true
        // false if even
        if (intersect) inside = !inside;
    }

    return inside;
};

// Example polygon vertices
const vertices = [
    [0, 0],
    [10, 1],
    [13, 9],
    [4, 11],
    [-1, 5],
];

// Given Point
const point = [1, 2];

const inside = isPointInPolygon(point, vertices);

// Output the result
console.log(`The point (${point[0]}, ${point[1]}) is ${inside ? "inside" : "outside"} the polygon.`);
