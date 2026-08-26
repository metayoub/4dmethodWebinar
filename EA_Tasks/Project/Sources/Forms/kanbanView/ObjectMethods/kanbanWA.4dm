var $otp : Text
var $url : Text
var $context : Variant

Case of 
	: (Form event code:C388=On Load:K2:1)
		authentify
		$otp:=getOtp
		
		$url:="http://localhost/$lib/renderer/?w=kanban&$4DSID="+$otp
		
		WA OPEN URL:C1020(*; "kanbanWA"; $url)
		$context:=ds:C1482.Task
		WA SET CONTEXT:C1848(*; "kanbanWA"; $context)
		WA SET PREFERENCE:C1041(*; "kanbanWA"; WA enable Web inspector:K62:7; True)
		
	: (Form event code:C388=On End URL Loading:K2:47)
		CALL SUBFORM CONTAINER:C1086(-3)
		
End case 
