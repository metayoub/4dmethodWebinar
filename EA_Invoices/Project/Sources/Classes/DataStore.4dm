Class extends DataStoreImplementation

exposed Function authentify() : Boolean
	Session:C1714.clearPrivileges()
	return Session:C1714.setPrivileges("Admin")
	
exposed Function getOTP() : Text
	return Session:C1714.createOTP(60)
