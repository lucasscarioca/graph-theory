const Graph = require('../entities/graph')

const g = new Graph(7)

let verts = ['libA', 'libB', 'libC', 'libD', 'libE', 'libF', 'libG']

// Adiciona os Vértices
for (let i = 0; i < verts.length; i++) {
  g.addVertex(verts[i])
}

// Adiciona as Arestas. Define terceiro parâmetro como true pois são arestas direcionadas
g.addEdge('libA', 'libB', true)
g.addEdge('libA', 'libC', true)
g.addEdge('libB', 'libC', true)
g.addEdge('libB', 'libF', true)
g.addEdge('libC', 'libD', true)
g.addEdge('libF', 'libD', true)
g.addEdge('libF', 'libE', true)
g.addEdge('libG', 'libB', true)
g.addEdge('libG', 'libF', true)

console.log("Lista de Adjacência")
g.printGraph()
console.log("\n\n")

g.topologicalSort()