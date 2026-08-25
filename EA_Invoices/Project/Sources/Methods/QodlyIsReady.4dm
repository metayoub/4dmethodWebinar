//%attributes = {}
#DECLARE() : Boolean

var $ready : Text

$ready:=WA Evaluate JavaScript:C1029(*; "_WEB_AREA_"; \
	"(typeof Qodly!=='undefined'&&typeof Qodly.setSource==='function')?'ready':'no'")

return Position:C15("ready"; $ready)>0
