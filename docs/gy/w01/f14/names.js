const array = ["Kovács János", "Nagy István", "Kis Lajos", "Tóth Péter"]

console.log("elements that contain „er”")
console.log(array.filter(s => s.includes("er")))

console.log("elements that contain begin with „K”")
console.log(array.filter(s => s.startsWith("K")))
