class Graph {
  constructor(nVertex) {
    this.nVertex = nVertex
    this.adjList = new Map()
    this.color = new Map()
    this.distance = new Map()
    this.parent = new Map()
  }

  // Adiciona vértice v com lista de adjacência vazia
  addVertex(v) {
    this.adjList.set(v, [])
    this.color.set(v, "white")
    this.distance.set(v, NaN)
    this.parent.set(v, null)
  }

  // Adiciona aresta de v para w
  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v) // Adiciona mesma aresta em w, já que é um grafo sem direção
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

  // Busca em Largura
  bfs(s) {

    this.color.set(s, "gray")
    this.distance.set(s, 0)
    this.parent.set(s, null)

    let queue = []
    queue.push(s)

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