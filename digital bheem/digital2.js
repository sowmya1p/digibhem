function roomcost(){
    var totaldays=parseInt(document.getElementById("TotalNoofDays").value);
    var roomtype=parseInt(document.getElementById("RoomType").value);
    document.getElementById("TotalRoomCost").value=totaldays*roomtype;
    console.log(totaldays);
}
function amenitiescost(){
    var totaldays=parseInt(document.getElementById("TotalNoofDays").value);
    var amen=parseInt(document.getElementById("Amenities").value);
    document.getElementById("TotalAmenitiesCost").value=totaldays*amen;
}
function additionalcost(){
    if(parseInt(document.getElementById("TotalNoofPersons").value)<=2){
        document.getElementById("AdditionalCharges").value=0;
    }
    else{
        var np=parseInt(document.getElementById("TotalNoofPersons").value);
        var op=parseInt(document.getElementById("TotalNoofDays").value);
        document.getElementById("AdditionalCharges").value=(np-2)*op*1000;
    }
}
function totalcost(){
    var tar=parseInt(document.getElementById("TotalRoomCost").value);
    var tcr=parseInt(document.getElementById("TotalAmenitiesCost").value);
    var tor=parseInt(document.getElementById("AdditionalCharges").value);
    document.getElementById("TotalCost").value=tar+tcr+tor;
}
function balanceamount(){
    var total=parseInt(document.getElementById("TotalCost").value);
    var add=parseInt(document.getElementById("AdvanceAmount").value);
    document.getElementById("BalanceAmount").value=total-add;
}
function main(){
    roomcost();
    amenitiescost();
    additionalcost();
    totalcost();
    balanceamount();
    //event.preventDefault();
}