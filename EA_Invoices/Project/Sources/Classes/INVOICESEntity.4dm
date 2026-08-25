Class extends Entity

exposed Function saveLine()
	var $payload : Object:=Web Event:C1734.data
	TRACE:C157
	var $data : Object
	var $line : cs:C1710.INVOICE_LINESEntity
	$data:=$payload.line
	If ($data=Null:C1517)
		return 
	End if 
	$line:=ds:C1482.INVOICE_LINES.get(Num:C11($data.ID))
	If ($line=Null:C1517)
		return   // still a temporary client id from Add line
	End if 
	$line.Quantity:=Num:C11($data.Quantity)
	$line.Unit_Price:=Num:C11($data.Unit_Price)
	$line.Discount_Rate:=Num:C11($data.Discount_Rate)
	$line.Tax_Rate:=Num:C11($data.Tax_Rate)
	$line.Total:=Num:C11($data.Total)
	$line.Total_Tax:=Num:C11($data.Total_Tax)
	If (Num:C11($data.Product_ID)#0)
		$line.Product_ID:=Num:C11($data.Product_ID)
		$line._ProductName:=String:C10($data._ProductName)
		$line._ProductReference:=String:C10($data._ProductReference)
	End if 
	$line.save()
	
exposed Function resetLineDraft() : Object
	var $draft : Object
	$draft:=New object:C1471("Quantity"; 1; "Unit_Price"; 0; "Discount_Rate"; 0; "Tax_Rate"; 0)
	If (This:C1470.Client#Null:C1517)
		$draft.Discount_Rate:=This:C1470.Client.Discount_Rate
	End if 
	return $draft
	
exposed Function draftFromProduct($product : cs:C1710.PRODUCTSEntity) : Object
	var $draft : Object
	$draft:=This:C1470.resetLineDraft()
	If ($product#Null:C1517)
		$draft.Unit_Price:=$product.Sale_Price
		$draft.Tax_Rate:=$product.Tax_Rate
	End if 
	return $draft
	
exposed Function addLine($product : cs:C1710.PRODUCTSEntity; $draft : Object) : cs:C1710.INVOICESEntity
	var $line : cs:C1710.INVOICE_LINESEntity
	var $max : Variant
	var $qty; $unit; $disc; $tax; $total : Real
	
	If ($product=Null:C1517)
		return This:C1470
	End if 
	If ($draft=Null:C1517)
		$draft:=This:C1470.draftFromProduct($product)
	End if 
	
	$qty:=Num:C11($draft.Quantity)
	If ($qty<=0)
		return This:C1470
	End if 
	
	$unit:=Num:C11($draft.Unit_Price)
	$disc:=Num:C11($draft.Discount_Rate)
	$tax:=Num:C11($draft.Tax_Rate)
	$total:=$qty*$unit*(100-$disc)/100
	
	$line:=ds:C1482.INVOICE_LINES.new()
	$line.Invoice_ID:=This:C1470.ID
	$max:=This:C1470.Lines_Fm_Invoices.max("Line_Number")
	$line.Line_Number:=Choose:C955($max=Null:C1517; 1; Num:C11($max)+1)
	$line.Product_ID:=$product.ID
	$line._ProductName:=$product.Name
	$line._ProductReference:=$product.Reference
	$line.Quantity:=$qty
	$line.Unit_Price:=$unit
	$line.Discount_Rate:=$disc
	$line.Tax_Rate:=$tax
	$line.Total:=$total
	$line.Total_Tax:=Round:C94($total*$tax/100; 2)
	$line.save()
	
	This:C1470.reload()
	return This:C1470
	
exposed Function removeLine()
	TRACE:C157
	var $payload : Object:=Web Event:C1734.data
	var $line : cs:C1710.INVOICE_LINESEntity
	var $sel : cs:C1710.INVOICE_LINESSelection
	var $n : Integer
	$line:=ds:C1482.INVOICE_LINES.get(Num:C11($payload.ID))
	If ($line=Null:C1517)
		return 
	End if 
	$line.drop()
	$sel:=This:C1470.Lines_Fm_Invoices.orderBy("Line_Number")
	$n:=1
	For each ($line; $sel)
		$line.Line_Number:=$n
		$line.save()
		$n:=$n+1
	End for each 
	
exposed Function reorderLines()
	TRACE:C157
	var $payload : Object:=Web Event:C1734.data
	var $ids : Collection
	var $i : Integer
	var $line : cs:C1710.INVOICE_LINESEntity
	$ids:=$payload.orderedIds
	If ($ids=Null:C1517)
		return 
	End if 
	For ($i; 0; $ids.length-1)
		$line:=ds:C1482.INVOICE_LINES.get(Num:C11($ids[$i]))
		If ($line#Null:C1517)
			$line.Line_Number:=$i+1
			$line.save()
		End if 
	End for 
	
exposed Function applyTotals()
	TRACE:C157
	var $payload : Object:=Web Event:C1734.data
	This:C1470.Subtotal_BT:=Num:C11($payload.Subtotal_BT)
	This:C1470.Tax:=Num:C11($payload.Tax)
	This:C1470.Total:=Num:C11($payload.Total)
	This:C1470.save()
