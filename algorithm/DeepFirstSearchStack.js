function dfsStack() {
    var M = 8;
    var matrix = [
        [0, 1, 0, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 1, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 1],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0]
    ];

    var visited = [];
    this.GF_DFS = function() {
        visited[1] = true;
        var s = new Stack();
        console.log("1 ");
        s.push(1);
        while (!s.isEmpty()) {
            var top = s.peek();
            for (var i = 0; i <= m; ++i) {
                if (!visited[i] && matrix[top - 1][i - 1] == 1) {
                    visited[i] = true;
                    s.push(i);
                    console.log(i);
                    break;
                }
            }
            if (i == M + 1) {
                s.pop();
            }
        }
    };
}

new dfsStack.GF_DFS();

function Stack() {
    var items = [];
    this.push = function(eles) {
        items.push(eles);
    };
    this.pop = function() {
        return items.pop();
    };
    this.peek = function() {
        return items[items.length - 1];
    }
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.size = function() {
        return items.length;
    }
    this.clear = function() {
        items = [];
    }
    this.print = function() {
        consoloe.log(items.toString());
    }
    this.toString = function() {
        return items.toString();
    }
}