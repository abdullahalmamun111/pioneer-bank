// event handler on login button 
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display ="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

   // event handler on deposit button
   const depositBtn = document.getElementById("addDeposit");
   depositBtn.addEventListener("click",function(){

    const kotoDepositKorbo = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(kotoDepositKorbo);

    const currentAmount = document.getElementById("currentDeposit").innerText;
    const currentDepos = parseFloat(currentAmount);
    const totalDepo = depositNumber + currentDepos;
    document.getElementById("currentDeposit").innerText = totalDepo;
    

    const balance = document.getElementById("currentBalance").innerText;
    const balanceAmount = parseFloat(balance);
    const totalBalance = depositNumber + balanceAmount ;
    document.getElementById("currentBalance").innerText = totalBalance;

    
    document.getElementById("depositAmount").value = "";


   })
   
   // event handler on withdraw button
   const withdrawBtn = document.getElementById("withdraw");
   withdrawBtn.addEventListener("click",function(){
   const withdrawAmount = document.getElementById("withdrawAmount").value;
   const amount = parseFloat(withdrawAmount);
   const currentWithdraw = document.getElementById("currentWithdraw").innerText;
   const currentWithdrawAmount = parseFloat(currentWithdraw);
   const totalWithdraw = amount + currentWithdrawAmount;
   document.getElementById("currentWithdraw").innerText = totalWithdraw;

   const balance = document.getElementById("currentBalance").innerText;
   const balanceAmount = parseFloat(balance);
   const totalBalance =  balanceAmount - withdrawAmount ;
   document.getElementById("currentBalance").innerText = totalBalance;


   
   document.getElementById("withdrawAmount").value = "";
   })