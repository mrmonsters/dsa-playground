class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function parse(description) {
  const nodesMap = new Map();
  const edges = description.map((edge) => edge.trim().split('->'));

  // get or create a node based on its value
  const getNode = (value) => {
    if (!nodesMap.has(value)) {
      nodesMap.set(value, new Node(value));
    }

    return nodesMap.get(value);
  };

  // construct linked list based on the edges
  edges.forEach(([from, to]) => {
    const fromNode = getNode(from);
    const toNode = getNode(to);

    fromNode.next = toNode;
  });

  return nodesMap;
}

function hasIntersection(node1, node2) {
  const getLength = (node) => {
    let length = 0;
    let current = node;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  };

  const length1 = getLength(node1);
  const length2 = getLength(node2);

  let ptr1 = node1;
  let ptr2 = node2;

  // advance the longer list pointer by the difference in lengths
  for (let i = 0; i < Math.abs(length1 - length2); i++) {
    if (length1 > length2) {
      ptr1 = ptr1.next;
    } else {
      ptr2 = ptr2.next;
    }
  }

  // move both pointers until they meet or one of them reaches the end
  while (ptr1 !== null && ptr2 !== null) {
    if (ptr1 === ptr2) {
      return true;
    }

    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return false;
}

function isCircular(node) {
  if (!node || !node.next) {
    return false; // if the list has 0 or 1 node, it cannot be circular
  }

  let tortoise = node;
  let hare = node.next; // start hare one step ahead

  while (hare !== null && hare.next !== null) {
    if (tortoise === hare) {
      return true; // if tortoise and hare meet, it's a circular list
    }

    tortoise = tortoise.next; // move tortoise one step
    hare = hare.next.next; // move hare two steps
  }

  return false; // if hare reaches the end of the list, it's not circular
}

export default function solve(A) {
  const entries = A.split('\n');
  const description = entries.filter((entry) => entry.indexOf('->') !== -1);
  const fixtures = entries.filter((entry) => entry.indexOf('->') === -1);
  const nodesMap = parse(description);

  console.log(nodesMap);

  return fixtures.reduce((acc, fixture) => {
    const nodes = fixture.trim().split(',');

    for (let x = 0; x < nodes.length; x++) {
      if (isCircular(nodesMap.get(nodes[x]))) {
        throw new Error('Circular list detected!');
      }
    }

    for (let i = 0; i < nodes.length - 1; i++) {
      const left = nodesMap.get(nodes[i]);

      for (let j = i + 1; j < nodes.length; j++) {
        const right = nodesMap.get(nodes[j]);

        if (hasIntersection(left, right)) {
          acc.push(true);

          return acc;
        }
      }
    }

    acc.push(false);

    return acc;
  }, []);
}
