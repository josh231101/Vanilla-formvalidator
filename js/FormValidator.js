export default class FormValidator {
    constructor(form, fields){
        this.form = form
        this.fields = fields
    }

    initialize(){
        this.validateOnSumbit();
        this.validateOnEntry();
        
    }
    validateOnSumbit(){
        this.form.addEventListener("submit", e =>{
            e.preventDefault();//Avoid the refresh
            this.fields.forEach(field =>{//Get each input on the form
                const input = document.querySelector(`#${field}`);
                this.validateFields(input);
            });
        });

    }
    validateOnEntry(){
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`);
            input.addEventListener("input",event=>{
                this.validateFields(input)
            });
        });
    }
    validateFields(field){
        //First step- check that the field not empty
        if (field.value.trim() === ""){
            this.setStatus(field,`${field.previousElementSibling.innerText} cannot be blank`,"error")
        }else{
            // Now the field has a value
            this.setStatus(field,null,"success")
        }
        // Time to check that the entry is the correct input type
        if(field.type == "email"){
            const re = /\S+@\S+.\S+/
            re.test(field.value) ? this.setStatus(field,null,'success') : this.setStatus(field,"Enter a valid email address","error");
        }
        if(field.id === 'password_confirmation'){
            const passwordField = document.querySelector("#password");
            if(field.value.trim() === '' ){ 
                this.setStatus(field,"Password confirmation required",'error');
            }   else if(field.value != passwordField.value){
                this.setStatus(field,"Password does not match",'error');
            }else{
                this.setStatus(field,null,'success');

            }
        }
    }
    setStatus(field, message, status){
        const successIcon = field.parentElement.querySelector('.icon-success');
        const errorIcon = field.parentElement.querySelector('.icon-error');
        const errorMessage = field.parentElement.querySelector('.error-message');
    
        if(status === "success"){
            if(errorIcon){errorIcon.classList.add('hidden')}
            if(errorMessage) {errorMessage.innerText=""}
            successIcon.classList.remove('hidden');
            field.classList.remove('input-error');
        }
        if(status === "error"){
            if(successIcon){successIcon.classList.add('hidden')}
            errorMessage.innerText = message;
            errorIcon.classList.remove('hidden');
            field.classList.add('input-error');
        }
    
    }
} 