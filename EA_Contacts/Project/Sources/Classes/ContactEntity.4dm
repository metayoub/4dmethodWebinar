Class extends Entity


Function get name() : Text
	return This:C1470.fullName
	
Function get fullName() : Text
	var $parts : Collection
	$parts:=New collection:C1472()
	If (This:C1470.Title#"")
		$parts.push(This:C1470.Title)
	End if 
	If (This:C1470.FirstName#"")
		$parts.push(This:C1470.FirstName)
	End if 
	If (This:C1470.LastName#"")
		$parts.push(This:C1470.LastName)
	End if 
	return $parts.join(" ")
	
Function get groupName() : Text
	If (This:C1470.category#Null:C1517)
		return This:C1470.category.Name
	End if 
	return ""
	
Function get phone() : Text
	If (This:C1470.HomePhone#"")
		return This:C1470.HomePhone
	End if 
	If (This:C1470.WorkPhone#"")
		return This:C1470.WorkPhone
	End if 
	If (This:C1470.MobilePhone#"")
		return This:C1470.MobilePhone
	End if 
	return ""
	
Function get address() : Text
	If (This:C1470.HomeAddress#"")
		return This:C1470.HomeAddress
	End if 
	If (This:C1470.WorkAddress#"")
		return This:C1470.WorkAddress
	End if 
	return ""
	
Function get mailtoLink() : Text
	If (This:C1470.Email#"")
		return "mailto:"+This:C1470.Email
	End if 
	return ""
	
Function get telWorkLink() : Text
	If (This:C1470.WorkPhone#"")
		return "tel:"+This:C1470.WorkPhone
	End if 
	return ""
	
Function get telHomeLink() : Text
	If (This:C1470.HomePhone#"")
		return "tel:"+This:C1470.HomePhone
	End if 
	return ""
	
Function get telMobileLink() : Text
	If (This:C1470.MobilePhone#"")
		return "tel:"+This:C1470.MobilePhone
	End if 
	return ""
	
Function get shareLink() : Text
	return "/$lib/renderer/?w=contactDetail&ID="+String:C10(This:C1470.ID)
