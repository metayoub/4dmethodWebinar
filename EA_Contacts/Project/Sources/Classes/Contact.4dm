Class extends DataClass

// Loads the contact matching the id passed by the host 4D form (Qodly.setSource("ID"; ...))
exposed Function getById($id : Integer) : cs:C1710.ContactEntity
	If ($id#0)
		return This:C1470.get($id)
	End if 
	return Null:C1517

// Returns a shareable deep link to the current business card
exposed Function getShareURL($id : Text) : Text
	If (Length:C16($id)>0)
		return "/$lib/renderer/?w=contactDetail&ID="+$id
	End if 
	return ""
