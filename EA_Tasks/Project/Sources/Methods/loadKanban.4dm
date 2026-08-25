//%attributes = {}
#DECLARE()

var $ids : Collection
var $ready : Boolean

If (Not:C34(Bool:C1537(Form:C1466.kanbanLoaded)))
	return
End if 

If (Form:C1466.tasks.data=Null:C1517)
	$ids:=New collection:C1472
Else 
	$ids:=Form:C1466.tasks.data.toCollection().extract("ID")
End if 

EXECUTE METHOD IN SUBFORM:C1085("kanban_SF"; "QodlyIsReady"; $ready; "kanbanWA")
If ($ready)
	EXECUTE METHOD IN SUBFORM:C1085("kanban_SF"; "QodlySetSource"; *; "taskIDs"; $ids; "kanbanWA")
	Form:C1466.kanbanPending:=False:C215
Else 
	Form:C1466.kanbanQodlyTries:=0
	Form:C1466.kanbanPending:=True:C214
	SET TIMER:C645(30)
End if 
