var newBalance;
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
        var inputDeposit=parseInt($("input#initial-deposit").val());
        var newAdress=new Adresses(inputEmail,inputNumber,inputDeposit);
    
        

    //gether user info and hide form    
$("#user-info").show();
$("form#contact").hide();
$("#user-info h1").text(newName.fullName());
$("#user-info h2").text(newAdress.inputEmail);
$("#user-info h3").text(newAdress.inputNumber);
$("#user-info h4").text(newAdress.inputDeposit);
//open deposit form
$("#deposit").click(function() {
    // $("button#deposit").hide();
    $("#bank-deposit").toggle();
    $("#withdraw").hide();
    });
    //open withdraw form
  $("#withdraw").click(function() {
 $("#bank-withdraw").toggle();
    $("#deposit").hide();
    });
   
    $("#tdeposit").click(function(){
        var depositAmount=parseInt($("input#deposit-amount").val());
        var newBalance= inputDeposit + depositAmount;
       console.log(newBalance)
       
       $("#ac-balance").show();
       $("#bank-deposit").hide();
      $("#user-info").hide();
       $("#demo").text(newBalance)
    })
    $("#twithdraw").click(function(){
        var withdrawAmount=parseInt($("input#withdraw-amount").val());
        var newBalance= inputDeposit - withdrawAmount;
       console.log(newBalance)
       
       $("#ac-balance").show();
       $("#bank-withdraw").hide();
       $("#user-info").hide();
       $("#demo").text(newBalance)
    })


    }); 


})