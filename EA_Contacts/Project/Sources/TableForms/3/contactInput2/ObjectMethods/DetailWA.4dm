var $otp : Text
var $url : Text
var $context : Variant

Case of 
	: (Form event code:C388=On Load:K2:1)
		authentify
		$otp:=getOtp
		
		$url:="http://localhost/$lib/renderer/?w=contactDetail&$4DSID="+$otp
		WA OPEN URL:C1020(DetailWA; $url)
		$context:=ds:C1482.Contact
		WA SET CONTEXT:C1848(DetailWA; $context)
		
	: (Form event code:C388=On End URL Loading:K2:47)
		// Dialog form — timer runs here (SET TIMER does not work in subforms)
		Form:C1466.qodlyTries:=0
		SET TIMER:C645(30)
		
End case 
