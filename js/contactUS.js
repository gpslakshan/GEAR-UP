let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let subject = document.getElementById('contact-subject');
let message = document.getElementById('query-details');
let queryBtn = document.getElementById('view-query-button');
let queryForm = document.getElementById('query-form');
let contactForm = document.getElementById('contactForm');


queryBtn.addEventListener('click', function(e){
    if(firstName.value !== '' &&  lastName.value != '' &&  email.value !== '' && subject.value !== 'Subject' && message.value !== '' && isEmail(email.value)){
        viewQuery();
    }
    else{
        checkInputs();
    }
    e.preventDefault();
})

function checkInputs(){
    if(firstName.value === '' || firstName.value == null){
        alert('First Name is required');
    }
    if(lastName.value === '' || lastName.value == null){
        alert('Last Name is required');
    }
    if (email.value === '' || email.value == null){
        alert('Email is required');
    }
    if (!isEmail(email.value)){
        alert('Email is not valid');
    }
    if (subject.value === 'Subject'){
        alert('Subject is required');
    }
    if (message.value === '' || message.value == null){
        alert('Message is required');
    }
}

function isEmail(emailValue){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}

function viewQuery(){
    if(firstName.value !== '' && lastName.value !== '' && email.value !== '' && subject.value !== 'Subject' && message.value !== '' && isEmail(email.value)){
        queryForm.innerHTML = `
        <h2 style="margin-bottom: 30px; width:100%">Query Summary</h2>
        <ul style="margin-left: 60px;">
            <li style="margin-bottom: 5px"><strong>Name:</strong>${firstName.value} </li>
            <li style="margin-bottom: 5px"><strong>Email: </strong>${email.value}</li>
            <li style="margin-bottom: 5px"><strong>Subject:</strong>${subject.value}</li>
            <li style="margin-bottom: 5px"> <strong>Details: </strong> ${message.value}</li>
            <button style="font-size:0.8rem; margin: 5px; cursor: pointer; border: none; padding: 12px; background: #28a745; color:#fff; border-radius: 20px" onclick="viewPrevious()">Edit</button>
            <button style="font-size:0.8rem; margin: 5px; cursor: pointer; border: none; padding: 12px; background: #28a745; color:#fff; border-radius: 20px" onclick="submitForm()">Send</button>
        </ul>
        `
    }
    else{
        checkInputs();
        viewPrevious();
    }
}

function viewPrevious(){
    queryForm.innerHTML = `
    <div class="inputBox w50">
        <input
        type="text"
        name="FirstName"
        id="firstName"
        value=${firstName.value}
        placeholder="First Name"
        />
    </div>
    <div class="inputBox w50">
        <input
        type="text"
        name="LastName"
        value=${lastName.value}
        placeholder="Last Name"
        id="lastName"
        />
    </div>
    <div class="inputBox w50">
        <input
        type="text"
        name="Email Address"
        value=${email.value}
        id="email"
        placeholder="Email Adress"
        />
    </div>
    <div class="selectBox w50">
        <select name="Contact-subject" id="contact-subject">
        <option value="${subject.value}">${subject.value}</option>
        <option value="Delivery">Delivery</option>
        <option value="Purchase">Purchase</option>
        <option value="Return">Return</option>
        </select>
    </div>
    <div class="inputBox w100">
        <textarea
        name="Query-details"
        id="query-details"
        placeholder="Write Your Message here.."
        >${message.value}</textarea>
    </div>
    <div class="inputBox w100">
        <button type="submit" id="view-query-button" onclick="viewQuery()">View Query</button>
    </div>
    `
     firstName = document.getElementById('firstName');
     lastName = document.getElementById('lastName');
     email = document.getElementById('email');
     subject = document.getElementById('contact-subject');
     message = document.getElementById('query-details');
}

function submitForm(){

    queryForm.setAttribute("action", "https://formspree.io/f/mdoydbyz");
    queryForm.setAttribute("method", "POST");
    queryForm.innerHTML = `
    <div class="inputBox w50">
        <input
        type="text"
        name="First Name"
        id="firstName"
        value=${firstName.value}
        placeholder="First Name"
        />
    </div>
    <div class="inputBox w50">
        <input
        type="text"
        name="Last Name"
        value=${lastName.value}
        placeholder="Last Name"
        id="lastName"
        />
    </div>
    <div class="inputBox w50">
        <input
        type="text"
        name="Email Adress"
        value=${email.value}
        id="email"
        placeholder="Email Adress"
        />
    </div>
    <div class="selectBox w50">
        <select name="Contact-subject" id="contact-subject">
        <option value="${subject.value}">${subject.value}</option>
        <option value="Delivery">Delivery</option>
        <option value="Purchase">Purchase</option>
        <option value="Return">Return</option>
        </select>
    </div>
    <div class="inputBox w100">
        <textarea
        name="Query-details"
        id="query-details"
        placeholder="Write Your Message here.."
        >${message.value}</textarea>
    </div>
    <div class="inputBox w100">
        <button type="submit" id="view-query-button" onclick="viewQuery()">View Query</button>
    </div>
    `
    queryForm.submit();
}
