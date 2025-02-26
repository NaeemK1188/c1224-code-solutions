export type Node<T> = {
  data: T;
  priority: number;
};

// T is template = unknown or any type
export class PriorityQueue<T = unknown> {
  // creating an instance of the Node object with an empty array
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */

  enqueue(item: T, priority: number): void {
    // Not implemented
    // item, priority are passed from the user
    // when i use { data: 'a', priority:'10'} we making them fixed,
    // so to make it dynamic, we assign the value is item and priority

    const node: Node<T> = {
      data: item,
      priority,
    };

    // if (this.nodes.length === 0)
    // {
    //   this.nodes.push(node);
    // }

    // else if (this.nodes.length > 0)
    // {
    //   for (let i = 0; i < this.nodes.length; i++) {
    //     if (this.nodes[i].priority < node.priority)
    //     {

    //       const newNode = this.nodes[i];
    //       this.nodes.splice(i, 1, node)
    //       this.nodes.push(this.nodes[i]);
    //     }
    //   }
    // }
    // PriorityQueue.nodes.push(node)

    // console.log(this.nodes); output the array of nodes
    // is single node
    // we will scan through the nodes and find a single n(node) in the nodes to switch it
    const index = this.nodes.findIndex((n) => priority > n.priority);
    // if no spot is found or its empty
    // if index < 0 means its empty, so push
    if (index < 0) {
      this.nodes.push(node);
    }

    // else if(index > 0)
    else {
      // 0 number of deleted item, so we are only replacing
      this.nodes.splice(index, 0, node);
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */

  dequeue(): T | undefined {
    // ? to return undefined when its empty or add if/else
    return this.nodes.shift()?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    // ? to return undefined when its empty or add if/else
    return this.nodes[0]?.data;
  }
}

//  testing
// const queue = new PriorityQueue<string>();
//  queue.enqueue({c:2});
