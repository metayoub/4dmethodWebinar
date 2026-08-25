Class extends DataClass

// Loads the invoice matching the id passed by the host 4D form (Qodly.setSource("ID"; ...))
exposed Function getById($id : Text) : cs:C1710.INVOICESEntity
	If (Length:C16($id)>0)
		return This:C1470.get(Num:C11($id))
	End if 
	return Null:C1517
	
exposed Function setPaid()
	Form:C1466.editEntity.Paid:=Not:C34(Form:C1466.editEntity.Paid)
	
exposed Function reloadInvoice()
	TRACE:C157
	Form:C1466.clickedEntity.reload()