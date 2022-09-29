const Graph = require('../entities/graph')

let g = new Graph(32)
// representação dos vértices em printPacman.png
let vertices = [
  'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13',
  'B1', /*--------------------------*/'B7', /*-----------------------------*/'B13',
  'C1', /*--------------------------*/'C7', /*-----------------------------*/'C13',
  'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13',
]

// Adiciona os Vértices
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i])
}
// Adiciona Arestas
g.addEdge('A1', 'A2');
g.addEdge('A2', 'A3');
g.addEdge('A3', 'A4');
g.addEdge('A4', 'A5');
g.addEdge('A5', 'A6');
g.addEdge('A6', 'A7');
g.addEdge('A7', 'A8');
g.addEdge('A8', 'A9');
g.addEdge('A9', 'A10');
g.addEdge('A10', 'A11');
g.addEdge('A11', 'A12');
g.addEdge('A12', 'A13');
g.addEdge('A13', 'B13');
g.addEdge('B13', 'C13');
g.addEdge('C13', 'D13');
g.addEdge('D13', 'D12');
g.addEdge('D12', 'D11');
g.addEdge('D11', 'D10');
g.addEdge('D10', 'D9');
g.addEdge('D9', 'D8');
g.addEdge('D8', 'D7');
g.addEdge('D7', 'C7');
g.addEdge('C7', 'B7');
g.addEdge('B7', 'A7');
g.addEdge('D7', 'D6');
g.addEdge('D6', 'D5');
g.addEdge('D5', 'D4');
g.addEdge('D4', 'D3');
g.addEdge('D3', 'D2');
g.addEdge('D2', 'D1');
g.addEdge('D1', 'C1');
g.addEdge('C1', 'B1');
g.addEdge('B1', 'A1');

console.log("Lista de Adjacência")
g.printGraph();
console.log("\n\n\n")

g.bfs('A13')
console.log("Resultado Busca em Largura")
g.printColorDistanceParent()
console.log("\n\n\n")

console.log("Melhor caminho")
g.printBestPath('A13', 'D2')