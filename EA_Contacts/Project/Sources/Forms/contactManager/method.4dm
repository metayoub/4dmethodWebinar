Case of 
	: (Form event code:C388=On Load:K2:1)
		// save last selected category if user clicks off category listbox
		var lastSelectedCategory_o : Object
		var lastSelectedCategoryPos_l : Integer
		lastSelectedCategoryPos_l:=1
		
		// save last updated contact
		var lastUpdatedContact_e : Object
		// used to remember which contact row to highlight after deletion
		var lastDeletedContactPos_l : Integer
		
		// conditions how to manipulate subforms whether user creates or edits a contact
		var contactAction_t; groupAction_t : Text
		
		// start in list mode
		Form:C1466.listMode:=True:C214
		
		// initialize searchText to empty string and searchType as "All names"
		Form:C1466.searchText:=""
		Form:C1466.searchType:=0
		Form:C1466.queryNames:="FirstName = :1 or LastName = :1"
		OBJECT SET PLACEHOLDER:C1295(*; "searchText"; "All names")
		
		// initialize categories and highlight 1st row
		loadCategories
		EXECUTE METHOD IN SUBFORM:C1085("categories_SF"; "highlightRow"; *; "categories_LB"; 1)
		
		// initilize contacts and highlight 1st row
		loadContacts("On All Groups")
		EXECUTE METHOD IN SUBFORM:C1085("contacts_SF"; "highlightRow"; *; "contacts_LB"; 1)
		
		// initialize contactInput to current contact
		loadContactInput("On Init")
		
	: (Form event code:C388=On Resize:K2:27)
		// If window is resized, also resize contact grid
		If (Form:C1466.listMode=False:C215)
			SET TIMER:C645(1)
		End if 
		
	: (Form event code:C388=On Timer:K2:25)
		If (Bool:C1537(Form:C1466.qodlyWaiting))
			var $ready : Boolean
			Form:C1466.qodlyTries:=Num:C11(Form:C1466.qodlyTries)+1
			
			EXECUTE METHOD IN SUBFORM:C1085("contactInput_SF"; "QodlyIsReady"; $ready)
			If ($ready)
				// First ready tick is often too early for ContactCard's datasource listener
				Form:C1466.qodlyReadyTicks:=Num:C11(Form:C1466.qodlyReadyTicks)+1
				If (Form:C1466.qodlyReadyTicks>=2)
					If (Form:C1466.contact.ent#Null:C1517)
						// 0 → ID forces onChange (same ID alone would be a no-op)
						EXECUTE METHOD IN SUBFORM:C1085("contactInput_SF"; "setQodlySource"; *; "ID"; 0)
						EXECUTE METHOD IN SUBFORM:C1085("contactInput_SF"; "setQodlySource"; *; "ID"; Form:C1466.contact.ent.ID)
					End if 
					Form:C1466.qodlyWaiting:=False:C215
					SET TIMER:C645(0)
				End if 
			Else 
				Form:C1466.qodlyReadyTicks:=0
				If (Form:C1466.qodlyTries>=60)  // ~30s max
					Form:C1466.qodlyWaiting:=False:C215
					SET TIMER:C645(0)
				End if 
			End if 
		Else 
			initializeContactGrid
			EXECUTE METHOD IN SUBFORM:C1085("contacts_LB"; "loadContactCells")
			SET TIMER:C645(0)
		End if 
		
End case 
