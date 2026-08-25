//%attributes = {"invisible":true}
// Push the current invoice ID to the Qodly page when on Web View (page 3).

If (FORM Get current page:C276=3)
	If (QodlyIsReady)
		If (Form:C1466.editEntity#Null:C1517)
			setQodlySource(String:C10(Form:C1466.editEntity.ID))
		End if 
	Else 
		Form:C1466.qodlyTries:=0
		SET TIMER:C645(30)
	End if 
End if 
