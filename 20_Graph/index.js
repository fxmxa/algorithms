class Graph {
  constructor() {
      this.data = {};
  }

  // Добавляет вершину.
  // Если вершина уже существует, ничего не делает.
  addVertex(vertex) {
      if(this.data[vertex]) {
        return
      }

      this.data[vertex] = []
  }

  // Удаляет вершину.
  removeVertex(vertex) {
    if(!this.data[vertex]) {
      return
    }

    delete this.data[vertex]
    Object.keys(this.data).forEach( key => {
      this.data[key] = this.data[key].filter( el => el !== vertex)
    })
  }

  // Добавляет грань между двумя вершинами.
  addEdge(vertex1, vertex2) {
    if(!this.data[vertex1] || !this.data[vertex2]) {
      return
    }

    if (vertex1 === vertex2) {
        return;
    }
    if(this.data[vertex1].find(el => el === vertex2) === undefined) {
      this.data[vertex1].push(vertex2)
    }

    if(this.data[vertex2].find(el => el === vertex1) === undefined) {
      this.data[vertex2].push(vertex1)
    }

  }

  // Удаляет грань между двумя вершинами.
  removeEdge(vertex1, vertex2) {
    if(!this.data[vertex1] || !this.data[vertex2]) {
      return
    }

    this.data[vertex1] = this.data[vertex1].filter( el => el !== vertex2)
    this.data[vertex2] = this.data[vertex2].filter( el => el !== vertex1)
  }
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');



console.log(graph.data);
/*
{
A: ['B', 'C'],
B: ['A'],
C: ['A'],
D: []
}
*/
