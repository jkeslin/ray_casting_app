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
const polygon = [
    [0, 0],
    [10, 1],
    [13, 9],
    [4, 11],
    [-1, 5],
];

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pointForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const x = parseFloat(document.getElementById('x').value);
        const y = parseFloat(document.getElementById('y').value);

        const isInside = isPointInPolygon([x, y], polygon);
        resultDiv.textContent = `The point (${x}, ${y}) is ${isInside ? "inside" : "outside"} the polygon.`
    });
});
