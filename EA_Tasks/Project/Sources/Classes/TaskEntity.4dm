Class extends Entity

exposed Alias categoryName category.Name

exposed Function get StatusString() : Text
	
	Case of 
		: (This:C1470.Status=1)
			return "Not Started"
			
		: (This:C1470.Status=2)
			return "In Progress"
			
		: (This:C1470.Status=3)
			return "Completed"
			
		Else 
			return ""
	End case 
	
exposed Function get categoryColor() : Text
	
	Case of 
		: (This:C1470.categoryName="Work")
			return "red"
			
		: (This:C1470.categoryName="Family")
			return "blue"
			
		: (This:C1470.categoryName="Travel")
			return "green"
			
		: (This:C1470.categoryName="Friends")
			return "yellow"
			
		: (This:C1470.categoryName="Personal")
			return "aqua"
			
		Else 
			return "grey"
	End case 
	