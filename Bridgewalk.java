// Name Stuart Olivera   Period 5  

	 public class Bridgewalk
	 {
   	
		private static int x=0;  // Position of the bridge "sizes" array
		private static final int NUMTRIALS = 10000;
		private static int step;  // Number of steps on current Bridgewalk
		private static int total; // Total number of steps on all Bridgewalks of specific size
		private static int most,least; // Most and Least number of steps on Bridgewalk of specific size
		private static double ave; // Average number of steps
		private static int where; // Position of "person" walking on the bridge in the array
		private static char dir; // l is left, r is right
		private static char firstDir; // First direction the person fell off of
		private static int sameDir; // Total times the person walks off the same direction of 1st step
		private static char [] bridge;
  		private static int [] sizes = {5,9,11,13,17,23,31,63}; // The size of a bridge of length 7 for Part 1    
  		//private static int [] sizes = {5,9,11,13,17,23,31,63};  // each length of the bridge for Part 2
		  

       public static void main(String[] args)
       {
         for(x=0;x<sizes.length;x++)
         {
         	// Initialize each bridge of a given size {5, 9,11,13,17,23,31,63}       
            initialize();
            
         	// Do appropriate number of tests
            for(int i=0;i<NUMTRIALS;i++)
            {
            	reset();
            	//System.out.println("Trial " + (i+1));
            	//printBridge();
            	walk(i);
            	total += step;
            	
            	if (step > most || i==0)
            		most = step;
            	if (step < least || i==0)
            		least = step;
            	
            	step = 0;
            	
            }
            
            step = 0;
         
         	// Print final data
            ave = (double)total/NUMTRIALS;
            printStats();
            
         }
      
      }
   	
   	
   	// **********************************************
   	//
   	// Initialize each bridge of a given size.
   	//
   	// **********************************************
   		
    public static void initialize()
      {
			step = 0;
			total = 0;
			most = 0;
			least = 0;
			ave = 0;
			
			sameDir = 0;
			
			bridge = new char[sizes[x]];
			reset();
			
      }
       
    
    public static void reset() {
    	
    	for (int i = 0; i < bridge.length; i++)
			bridge[i] = '_';
		
		where = bridge.length/2;
		bridge[where] = '*';
		
    }
       
   	public static boolean hasLeftBridge() {
   	
   		return (where > bridge.length-1 || where < 0);
   	
   	}
   	
   	public static void step() {

   		bridge[where] = '_';
   		
   		int newDirection = 1 + (int)(Math.random() * ((1) + 1));
   		
   		switch (newDirection) {
   			case 1:
   				where--;
   				dir = 'l';
   				step++;
   			break;
   			case 2:
   				where++;
   				dir = 'r';
   				step++;
   			break;
   		}
   		
   		if (!hasLeftBridge())
   			bridge[where] = '*';
   		
   	}
   	
   	// *************************************************
   	//
   	// The "person" will walk to the end of the bridge
   	// 
   	// *************************************************
   	
       public static void walk(int i)
      {
    	   while (!hasLeftBridge()) {
    		   step();
    		   //printBridge();
    	   }
    	   
    	   if (i==0)
    		   firstDir = dir;
    	   else if (dir == firstDir)
    		   sameDir++;
      }
   	
   	
   	// *************************************************************
   	//
   	// Print the the path the "person" takes to walk off the bridge
   	//
   	// *************************************************************
   	
       public static void printBridge()
      {
         for(int i=0;i<bridge.length;i++)
         {
            System.out.print(bridge[i]);
         }
         System.out.println();
      }
   
       
       public static void printStats() {
    	   
    	   System.out.println("Bridge Size: " + bridge.length);
    	   System.out.println("The average number of steps was " + ave);
    	   System.out.println("The most steps was " + most);
    	   System.out.println("The least steps was " + least);
    	   System.out.println("He fell off the same end " + sameDir + " times out of " + NUMTRIALS);
    	   System.out.println();
    	   
       }
   
   }