var $otp : Text
var $url : Text
var $context : Variant

Case of 
	: (Form event code:C388=On Load:K2:1)
		ds:C1482.authentify()
		$otp:=ds:C1482.getOTP()
		$url:="http://localhost/$lib/renderer/?w=invoice&$4DSID="+$otp
		WA OPEN URL:C1020(*; "_WEB_AREA_"; $url)
		$context:=ds:C1482.INVOICES
		WA SET CONTEXT:C1848(*; "_WEB_AREA_"; $context)
		
	: (Form event code:C388=On End URL Loading:K2:47)
		// Wait for Qodly JS bridge, then push current invoice ID
		Form:C1466.qodlyTries:=0
		SET TIMER:C645(30)
		
End case 
