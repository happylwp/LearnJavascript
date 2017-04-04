package DeepFirstSearch;

class Node{
	int x;
	Node next;
	public Node(int x){
		this.x=x;
		this.next=null;
	}
}

class GraphLink{
	public Node first;
	public Node last;
	
	public boolean isEmpty(){
		return first==null;
	}
	public void print(){
		Node current=first;
		while(current!=null){
			System.out.print("["+current.x+"]");
			current=current.next;
		}
		System.out.println();
		
	}
	public void insert(int x){
		Node newNode=new Node(x);
		if(this.isEmpty()){
			first=newNode;
			last=newNode;
		}
		else{
			last.next=newNode;
			last=newNode; 
		}
	}
}

public class DFS {
    public static int run[]=new int[9];   
    public static GraphLink Head[]=new GraphLink[9];
    
    public static void DFS(int current){
    	run[current]=1;
    	System.out.print("["+current+"]");
    	
    	while((Head[current].first)!=null){
    		if(run[Head[current].first.x]==0)
    			DFS(Head[current].first.x);
    		
    		Head[current].first=Head[current].first.next;
    	}
    }
	public static void main(String[] args) {
		int Data[][]={{1,2},{2,1},{1,3},{3,1},{2,4},{4,2},{2,5},{5,2},{3,6},{6,3},
				{3,7},{7,3},{4,5},{5,4},{6,7},{7,6},{5,8},{8,5},{6,8},{8,6}};
        int DataNum;
        System.out.println("图形的邻接表内容：");
        for(int i=1;i<9;i++)       
        {
        	run[i]=0;           
        	Head[i]=new GraphLink();
        	System.out.print("顶点"+i+"=>");
        	for(int j=0;j<20;j++)     
        	{
        		if(Data[j][0]==i){
        			DataNum=Data[j][1];
        			Head[i].insert(DataNum);
        		}
        	}
        	Head[i].print();   
        }
        System.out.println("深度优先遍历顶点："); 
        DFS(1);
        System.out.println();
	}

}