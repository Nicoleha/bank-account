function Name(first,last){
    this.first=first;
    this.last=last;
}
function Adresses(email,number,deposit){
    this.inputEmail=email;
    this.inputNumber=number;
    this.inputDeposit=deposit;
}

Name.prototype.fullName = function() {
    return this.first + " " + this.last;
  }

$(document).ready(function(){
  
    $("form#contact").submit(function(event) {
        event.preventDefault();
        var firstName=$("input#firstname").val();
        var lastName=$("input#lastname").val();
        var newName=new Name(firstName,lastName);

        var inputEmail=$("input#e-mail").val();
        var inputNumber=$("input#p-number").val();
        var inputDeposit=$("input#initial-deposit").val();
        var newAdress=new Adresses(inputEmail,inputNumber,inputDeposit);

        var withdrawAmount=$("input#withdraw-amount").val();
        var depositAmount=$("input#deposit-amount").val();
        

    //gether user info and hide form    
$("#user-info").show();
$("form#contact").hide();
$("#user-info h1").text(newName.fullName());
$("#user-info h2").text(newAdress.inputEmail);
$("#user-info h3").text(newAdress.inputNumber);
$("#user-info h4").text(newAdress.inputDeposit);
//open deposit form
$("#deposit").click(function() {
    $("button#deposit").hide();
    $("#bank-deposit").show();
    $("#withdraw").hide();
    });
    //open withdraw form
  $("#withdraw").click(function() {
 
    $("#bank-withdraw").show();
    $("#deposit").hide();
    });
   
    $("#tdeposit").click(function(){
        var newBalance= parseInt(inputDeposit+depositAmount)
       console.log(newBalance)
    })

    }); 


})