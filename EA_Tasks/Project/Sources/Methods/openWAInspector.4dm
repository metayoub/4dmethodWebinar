//%attributes = {}
#DECLARE($waName : Text)

If ($waName="")
	$waName:="WA"
End if 

WA OPEN WEB INSPECTOR:C1736(*; $waName)
