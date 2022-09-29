class Graph {
  constructor(nVertex) {
    this.nVertex = nVertex
    this.adjList = new Map()
    this.color = new Map()
    this.distance = new Map()
    this.parent = new Map()
    this.vertList = []
  }

  // Adiciona vértice v com lista de adjacência vazia
  addVertex(v) {
    this.adjList.set(v, [])
    this.vertList.push(v)
    this.color.set(v, "white")
    this.distance.set(v, NaN)
    this.parent.set(v, null)
  }

  // Adiciona aresta de v para w
  addEdge(v, w, directed = false) { // Por padrão cria arestas não direcionadas
    this.adjList.get(v).push(w)
    if (!directed) {
      this.adjList.get(w).push(v) // Adiciona mesma aresta em w, já que é um grafo não direcionado
    }
  }

  // Exibe Lista de Adjacência
  printGraph() {
    let getKeys = this.adjList.keys()

    for (let i of getKeys) {
      let getValues = this.adjList.get(i)
      let conc = ""

      for (let j of getValues) {
        conc += j + " "
      }
      console.log(`${i} -> ${conc}`)
    }
  }

  // Exibe resultado da BFS
  printColorDistanceParent() {
    let getKeys = this.color.keys()
    for (let i of getKeys) {
      let vertColor = this.color.get(i)
      let vertDist = this.distance.get(i)
      let vertParent = this.parent.get(i)
      console.log(`${i}: parent=${vertParent} distance=${vertDist} color=${vertColor}`)
    }
  }

  // Busca em Largura (Breadth-first Search)
  bfs(s) {
    // Define as propriedades da origem
    this.color.set(s, "gray")
    this.distance.set(s, 0)
    this.parent.set(s, null)

    // Define a fila de vértices a serem verificados e insere a origem
    let queue = []
    queue.push(s)

    /* Enquanto houver vértices a serem verificados, remove o primeiro da fila e obtém seus vizinhos.
    Para cada vizinho, caso este não seja conhecido (cor branca), define sua cor como cinza e sua distância
    como a de seu pai + 1 e define seu pai. Em seguida, adiciona o vizinho na fila. Por fim, define a cor
    do vértice em análise como preta.
    */
    while (queue.length > 0) {

      let u = queue.splice(0, 1)[0]
      let getList = this.adjList.get(u)

      for (let i in getList) {
        let neighbor = getList[i]

        if (this.color.get(neighbor) === "white") {
          this.color.set(neighbor, "gray")
          this.distance.set(neighbor, this.distance.get(u) + 1)
          this.parent.set(neighbor, u)
          queue.push(neighbor)
        }
      }
      this.color.set(u, "black")
    }
  }

  // Busca em Profundidade (Depth-first Search)
  dfs(vertex, stack, visited) {
    /* Adiciona o primeiro vértice na lista de vértices visitados. Para cada um de seus vizinhos,
    caso nunca tenha sido visitado, aplica a busca em profundidade. Por fim, adiciona na pilha
    os vértices que não possuem vizinhos ou já tiveram todos os seus vizinhos visitados.
    */
    visited.push(vertex)
    this.adjList.get(vertex).forEach(neighbor => {
      if (!visited.includes(neighbor)) {
        this.dfs(neighbor, stack, visited)
      }
    })
    stack.push(vertex)
  }

  // Ordenação Topológica
  topologicalSort() {
    let stack = []
    let visited = []
    /* Para cada vértice não visitado do grafo, executa o dfs adicionando de forma ordenada
    na pilha aqueles que não possuem vizinhos ou já tiveram todos os seus vizinhos visitados.
    */
    this.vertList.forEach(vert => {
      if (!visited.includes(vert)) {
        this.dfs(vert, stack, visited)
      }
    })

    console.log(stack.join(' - '))
  }

  // Encontra o melhor caminho entre a origem s e o destino f
  printBestPath(s, f) {
    if (f == s) {
      console.log(s)
    } else if (this.parent.get(f) == null) {
      console.log("Nenhum caminho existente")
    } else {
      this.printBestPath(s, this.parent.get(f))
      console.log(f)
    }
  }
}

module.exports = Graph;