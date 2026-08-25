var $otp : Text
var $url : Text
var $context : Variant

Case of 
	: (Form event code:C388=On Load:K2:1)
		// Auth + OTP in 4D before opening the renderer (same pattern as EA_Tasks)
		authentify
		$otp:=getOtp
		
		$url:="http://localhost/$lib/renderer/?w=contactCard&$4DSID="+$otp
		WA OPEN URL:C1020(WA; $url)
		$context:=ds:C1482.Contact
		WA SET CONTEXT:C1848(WA; $context)
		
	: (Form event code:C388=On End URL Loading:K2:47)
		// Side panel — ask contactManager to push the contact ID once Qodly is ready
		CALL SUBFORM CONTAINER:C1086(-3)
		
End case 
