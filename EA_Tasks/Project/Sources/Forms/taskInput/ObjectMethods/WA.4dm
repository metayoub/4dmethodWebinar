var $otp : Text
var $url : Text
var $context : Variant

Case of 
	: (Form event code:C388=On Load:K2:1)
		authentify
		$otp:=getOtp
		
		$url:="http://localhost/$lib/renderer/?w=taskDetails&$4DSID="+$otp
		
		WA OPEN URL:C1020(WA; $url)
		$context:=ds:C1482.Task  //.new()
		WA SET CONTEXT:C1848(WA; $context)
		WA SET PREFERENCE:C1041(WA; WA enable Web inspector:K62:7; True)
		
	: (Form event code:C388=On End URL Loading:K2:47)
		// Dialog: timer on this form. Subform: parent timer (SET TIMER does not work in subforms).
		Form:C1466.qodlyTries:=0
		If (Bool:C1537(Form:C1466.isNewWindow))
			SET TIMER:C645(30)
		Else 
			CALL SUBFORM CONTAINER:C1086(-3)
		End if 
		
End case 
