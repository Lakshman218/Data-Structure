class Graph {
  constructor() {
    this.adjacentlist = {}
  }

  addvertex(vertex) {
    if(!this.adjacentlist[vertex]) {
      this.adjacentlist[vertex] = new Set()
    }
  }

  addedge(vertex1, vertex2) {
    if(!this.adjacentlist[vertex1]) {
      this.addvertex(vertex1)
    }
    if(!this.adjacentlist[vertex2]) {
      this.addvertex(vertex2)
    }
    this.adjacentlist[vertex1].add(vertex2)
    this.adjacentlist[vertex2].add(vertex1)
  }

  display() {
    for(let vertex in this.adjacentlist) {
      console.log(vertex + " : " + [...this.adjacentlist[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacentlist[vertex1].has(vertex2) && 
      this.adjacentlist[vertex2].has(vertex1)
      )
  }

  removeEdge(vertex1, vertex2) {
    this.adjacentlist[vertex1].delete(vertex2)
    this.adjacentlist[vertex2].delete(vertex1)
  }

  removeVertex(vertex) {
    if(!this.adjacentlist[vertex]) {
      return null
    }
    for(let adjacentvertex of this.adjacentlist[vertex]) {
      this.removeEdge(vertex, adjacentvertex)
    }
    delete this.adjacentlist[vertex]
  }

  bfs(startVertex) {
    const visited = {};
    const queue = [];
    const result = [];

    queue.push(startVertex);
    visited[startVertex] = true;

    while (queue.length > 0) {
      const currentVertex = queue.shift();  
      result.push(currentVertex);

      for (const adjacentVertex of this.adjacentlist[currentVertex]) {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push(adjacentVertex);
        }
      }
    }
    return result;
  } 

  dfs(startVertex) {
    const visited = {};
    const result = [];

    // Helper function for recursive DFS
    const dfsRecursive = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      // Visit all adjacent vertices
      for (const adjacentVertex of this.adjacentlist[vertex]) {
        if (!visited[adjacentVertex]) {
          dfsRecursive(adjacentVertex);
        }
      }
    };

    // Start DFS from the given vertex
    dfsRecursive(startVertex);
    return result;
  }

  
}

const graph = new Graph()
// graph.addvertex("A")
// graph.addvertex("B")
// graph.addvertex("C")

// graph.addedge("A","B")
// graph.addedge("B","C")

graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addvertex("D");
graph.addvertex("E");

graph.addedge("A", "B");
graph.addedge("B", "C");
graph.addedge("B", "D");
graph.addedge("C", "E");
graph.addedge("E", "A");

// console.log(graph.hasEdge("A","C"));

// graph.deleteEdge("B","A")
// graph.removeVertex("B")

// graph.display()
// graph.dfscycle("A")
// console.log(graph.bfsShortestPath("A", "E"));

console.log("BFS:", graph.bfs("A"));
// console.log("DFS:", graph.dfs("A"))
