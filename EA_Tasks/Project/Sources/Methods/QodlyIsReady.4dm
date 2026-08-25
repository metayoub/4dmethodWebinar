//%attributes = {}
#DECLARE($waName : Text) : Boolean

var $ready : Text

If ($waName="")
	$waName:="WA"
End if 

$ready:=WA Evaluate JavaScript:C1029(*; $waName; \
"(typeof Qodly!=='undefined'&&typeof Qodly.setSource==='function')?'ready':'no'")

return Position:C15("ready"; $ready)>0
