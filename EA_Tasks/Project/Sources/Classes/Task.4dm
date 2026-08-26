Class extends DataClass

exposed Function getById($id : Integer) : cs:C1710.TaskEntity
	return This:C1470.get($id)
	
exposed Function getByIds($ids : Collection) : cs:C1710.TaskSelection
	If ($ids=Null:C1517) || ($ids.length=0)
		return This:C1470.newSelection()
	End if 
	return This:C1470.query("ID in :1"; $ids).orderBy("DueDate desc")
	
exposed Function moveCard()
	
	var $data : Object:=Web Event:C1734.data
	// {"taskID":"11","newStatus":"Completed"}
	var $task : cs:C1710.TaskEntity
	$task:=This:C1470.get($data.taskID)
	$task.Status:=This:C1470._mapStatus($data.newStatus)
	$info:=$task.save()
	
exposed Function updateDescription($description : Text)
	
	Form:C1466.ent.Description:=$description
	
exposed Function updatePercent($Percent : Integer)
	Form:C1466.ent.Percent:=$Percent
	
Function _mapStatus($newStatus) : Integer
	Case of 
		: ($newStatus="Not Started")
			return 1
			
		: ($newStatus="In Progress")
			return 2
			
		: ($newStatus="Completed")
			return 3
			
		Else 
			return 0
	End case 