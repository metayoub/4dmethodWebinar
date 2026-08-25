Case of 
	: (Form event code:C388=-1)  // On Selection Change of contacts_LB
		loadContactInput("On Contact Selection Change")
		
	: (Form event code:C388=-2)  // On Double Clicked on contacts_LB
		loadContactManagerController(contactAction_t; groupAction_t)
		
	: (Form event code:C388=-3)  // WA loaded — wait for Qodly, then set current contact ID
		Form:C1466.qodlyWaiting:=True:C214
		Form:C1466.qodlyTries:=0
		Form:C1466.qodlyReadyTicks:=0
		SET TIMER:C645(30)
		
End case 
