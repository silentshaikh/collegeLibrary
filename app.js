let myhead = document.querySelector(".container");
myhead.style.fontFamily = `'Poppins', sans-serif`;
let myForm = document.getElementById("myForm");
myForm.style.backgroundColor = "#55efc4";
myForm.style.border = "none";
myForm.style.boxShadow = "15px 15px 15px  #55efc4";
myForm.style.color = "#fff";
myForm.style.marginBottom = "20px";
let myBtn = document.getElementById("addbtn");
myBtn.style.backgroundColor = "#0fbcf9";
myBtn.style.border = "none";
myBtn.style.padding = "10px 20px";
myBtn.style.borderRadius = "10px";
myBtn.style.color = "#fff";
let head = document.getElementById("head");
head.style.color = "#18dcff";
let myLibrary = document.getElementById("library");
class Books{
    constructor(name,author,subject){
        this.myName = name;
        this.myAuthor = author;
        this.mySubject = subject;
    };
};
let count = 0;
class Display{
    addBooks(books){
        let bodyTable = document.getElementById("tbody");
        let tableAppend = `<tr>
        <th scope="row">${++count}</th>
        <td>${books.myName}</td>
        <td>${books.myAuthor}</td>
        <td>${books.mySubject}</td>
      </tr>`;
      bodyTable.innerHTML += tableAppend;
    }
    clear(){
        myLibrary.reset();
    }
    myValidate(book){
        if(book.myName.length < 3 || book.myAuthor.length < 3 || book.mySubject == null){
            return false;
        }else{
            return true;
        };
    }
    myShow(){
        let alertMessage = document.getElementById("alertmessage");
        alertMessage.innerHTML = `<div class="alert alert-danger" role="alert">
        <p><strong>Sorry,</strong> You can not add this book</p>
      </div>`;
      alertMessage.style.fontFamily = `'Poppins', sans-serif`;
      setTimeout(() => {
        alertMessage.innerHTML = ``;
      }, 3000);
    }
}
const libraryFunc = (e) => {
    console.log("Submit");
    let myBook = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    let sub;
    let myPoem = document.getElementById("poem");
    let myProg = document.getElementById("prog");
    let myCook = document.getElementById("cooking"); 
    if(myPoem.checked){
        sub = myPoem.value;
    }else if(myProg.checked){
        sub = myProg.value;
    }else if(myCook.checked){
        sub = myCook.value;
    }
    let myBooks = new Books(myBook,author,sub);
    console.log(myBooks);
    let myDisplay = new Display();
    if(myDisplay.myValidate(myBooks)){
        myDisplay.addBooks(myBooks);
        myDisplay.clear();
    }else{
        myDisplay.myShow();
    }

    e.preventDefault();
};
myLibrary.addEventListener("submit",libraryFunc);