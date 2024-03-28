Write a function:

```javascript
function solve(A);
```

that, given a multiline string comprises of 2 segments:

* Singly linked nodes of a graph

* Node groups

returns an array of boolean indicating if the nodes in each of these node groups are intersected. An error should be thrown when a cycle is detected.

For example,

* Given below value for A, the function should return `[false, true, true, false]`:

  * ```javacript
    A->B
    B->C
    R->S
    X->C
    Q->R
    Y->X
    W->Z
    A,Q,W
    A,C,R
    Y,Z,A,R
    A,W
    ```

* Given below value for A, the function should return `[true, false]`:

  * ```javascript
    A->B
    B->C
    G->B
    D->E
    C->D
    J->F
    H->J
    A,G,E
    H,A
    ```

* Given below value for A, the function should throw an error:

  * ```javascript
    X->Y
    B->C
    Y->X
    A->B
    X,A
    ```

* Given below value for A, the function should return `[true, false, true]`:

  * ```javascript
    ABC->BCD
    EFG->BCD
    DEF->EFG
    BCD->CDE
    123->456
    ABC,CDE
    123,DEF
    ABC,DEF
    ```
