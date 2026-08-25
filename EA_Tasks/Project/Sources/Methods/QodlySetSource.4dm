//%attributes = {}
#DECLARE($variable : Text; $value : Variant; $waName : Text)

If ($waName="")
	$waName:="WA"
End if 

WA EXECUTE JAVASCRIPT FUNCTION:C1043(*; $waName; "Qodly.setSource"; *; $variable; $value)
