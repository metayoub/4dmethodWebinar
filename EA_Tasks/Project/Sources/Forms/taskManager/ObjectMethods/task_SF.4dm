Case of 
	: (Form event code:C388=-1)  // On Save Button Clicked
		loadTaskManagerController("On Saving Task")
		
	: (Form event code:C388=-2)  // On Delete Button Clicked
		loadTaskManagerController("On Deleting Task")
		
	: (Form event code:C388=-3)  // WA loaded — wait for Qodly, then set current task ID
		Form:C1466.qodlyTries:=0
		SET TIMER:C645(30)
		
End case 
