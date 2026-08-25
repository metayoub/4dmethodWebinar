Case of 
	: (Form event code:C388=-3)  // kanban WA loaded — wait for Qodly, then send task IDs
		Form:C1466.kanbanQodlyTries:=0
		Form:C1466.kanbanPending:=True:C214
		SET TIMER:C645(30)
		
End case 
