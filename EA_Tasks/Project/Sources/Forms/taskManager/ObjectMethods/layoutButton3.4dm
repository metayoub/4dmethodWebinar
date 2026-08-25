OBJECT SET VISIBLE:C603(*; "layoutButton1Rect"; False:C215)
OBJECT SET VISIBLE:C603(*; "layoutButton2Rect"; False:C215)
OBJECT SET VISIBLE:C603(*; "layoutButton3Rect"; True:C214)

OBJECT SET VISIBLE:C603(*; "tasks_SF"; False:C215)
OBJECT SET VISIBLE:C603(*; "task_SF"; False:C215)
OBJECT SET VISIBLE:C603(*; "searchRect"; False:C215)
OBJECT SET VISIBLE:C603(*; "searchText"; False:C215)
OBJECT SET VISIBLE:C603(*; "searchDropdown"; False:C215)
OBJECT SET VISIBLE:C603(*; "arrowDown"; False:C215)
OBJECT SET VISIBLE:C603(*; "Oval"; False:C215)
OBJECT SET VISIBLE:C603(*; "Line14"; False:C215)

If (Not:C34(Bool:C1537(Form:C1466.kanbanLoaded)))
	OBJECT SET SUBFORM:C1138(*; "kanban_SF"; "kanbanView")
	Form:C1466.kanbanLoaded:=True:C214
Else 
	loadKanban
End if 

OBJECT SET VISIBLE:C603(*; "kanban_SF"; True:C214)

Form:C1466.kanbanMode:=True:C214
Form:C1466.taskListDetailMode:=False:C215
