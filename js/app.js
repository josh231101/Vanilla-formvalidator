class FormValidator {
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
                console.log(input.value);
                this.validateFields(input);
            })
        });

    }
    validateOnEntry(){
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`)
            input.addEventListener("input",e=>{
                console.log(e.target.value);
            })
        });
    }
    validateFields(){}
}

const form = document.querySelector(".form");
const fields = ["username","email","password","password_confirmation"];

const validator = new FormValidator(form,fields);
validator.initialize();