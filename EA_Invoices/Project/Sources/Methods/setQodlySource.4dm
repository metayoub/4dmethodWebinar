//%attributes = {"invisible":true}
#DECLARE($id_t : Text)

var $result : Text
WA EXECUTE JAVASCRIPT FUNCTION:C1043(*; "_WEB_AREA_"; "Qodly.setSource"; $result; "ID"; $id_t)
