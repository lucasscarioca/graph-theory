const Graph = require('../entities/graph')

const g = new Graph(8)

let verts = ['lib7', 'lib5', 'lib6', 'lib4', 'lib2', 'lib3', 'lib1', 'lib0']

// Adiciona os Vértices
for (let i = 0; i < verts.length; i++) {
  g.addVertex(verts[i])
}

// Adiciona as Arestas. Define terceiro parâmetro como true pois são arestas direcionadas
g.addEdge('lib7', 'lib5', true)
g.addEdge('lib7', 'lib6', true)
g.addEdge('lib5', 'lib4', true)
g.addEdge('lib5', 'lib2', true)
g.addEdge('lib6', 'lib4', true)
g.addEdge('lib6', 'lib3', true)
g.addEdge('lib2', 'lib1', true)
g.addEdge('lib3', 'lib1', true)
g.addEdge('lib1', 'lib0', true)

console.log("Lista de Adjacência")
g.printGraph()
console.log("\n\n")

g.topologicalSort()