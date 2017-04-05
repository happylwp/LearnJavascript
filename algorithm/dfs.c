#include <stdio.h>

#define N 10
#define M 10

int a[N][M] = {
                {1, 2, 1, 0, 0, 0, 0, 0, 2, 3},
                {3, 0, 2, 0, 1, 2, 1, 0, 1, 2},
                {4, 0, 1, 0, 1, 2, 3, 2, 0, 1},
                {3, 2, 0, 0, 0, 1, 2, 4, 0, 0},
                {0, 0, 0, 0, 0, 0, 1, 5, 3, 0},
                {0, 1, 2, 1, 0, 1, 5, 4, 3, 0},
                {0, 1, 2, 3, 1, 3, 6, 2, 1, 0},
                {0, 0, 3, 4, 8, 9, 7, 5, 0, 0},
                {0, 0, 0, 3, 7, 8, 6, 0, 1, 2},
                {0, 0, 0, 0, 0, 0, 0, 0, 1, 0},
               };

int b[N][M] = {0};
int sum = 0;

struct node 
{
    int x;
    int y;
};

void print_a() {
    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < M; ++j)
        {
            printf("%d ", a[i][j]);
        }
        printf("\n");
    }
    printf("\n");
}

void print_b() {
    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < M; ++j)
        {
            printf("%d ", b[i][j]);
        }
        printf("\n");
    }
    printf("\n");
}

void dfs(struct node p) {

    if (a[p.x][p.y+1] != 0 && b[p.x][p. y+1] == 0 && p.y+1 < M) {
        b[p.x][p.y+1] = 1;
        sum++;
        struct node temp = {p.x, p.y+1};
        dfs(temp);
    }

    if (a[p.x+1][p.y] != 0  && b[p.x+1][p.y] == 0 && p.x+1 < N) {
        b[p.x+1][p.y] = 1;
        sum++;
        struct node temp = {p.x+1, p.y};
        dfs(temp);
    }

    if (a[p.x][p.y-1] != 0 && b[p.x][p.y-1] == 0 && p.y-1 >= 0) {
        b[p.x][p.y-1] = 1;
        sum++;
        struct node temp = {p.x, p.y-1};
        dfs(temp);
    }

    if (a[p.x-1][p.y] != 0 && b[p.x-1][p.y] == 0 && p.x-1 >= 0) {
        b[p.x-1][p.y] = 1;
        sum++;
        struct node temp = {p.x-1, p.y};
        dfs(temp);
    }
}

int main() {

    struct node p = {5, 7};
    dfs(p);

    print_a();
    print_b();
    printf("sum: %d\n", sum);
    return 0;
}