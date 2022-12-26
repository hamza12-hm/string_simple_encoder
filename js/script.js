

class Encode {
	constructor() {
		// define variables needed. 
		 this.select = document.getElementById('choice')
		 this.text_to_encrypt = document.getElementById('text');
		 this.result = document.getElementById('result');
		// get last select choice  from localstorage. 
		 this.set_select();

		// take the value of the select 
		this.select.addEventListener("change", ()=> {
			localStorage.setItem("en_de", this.select.value);
			this.show_result();
		} );

		// if the user inputs a text 
		this.text_to_encrypt.addEventListener('input', ()=>{
			this.show_result();
		});


		this.result.addEventListener('dblclick', ()=> {
			// alert("copied !!");
			// this.result.select();
			// document.execCommand("copy");
			// this.result.value = ""
			this.copy_to_clipboard(this.result)
		});

		this.text_to_encrypt.addEventListener('dblclick', ()=> {
			this.copy_to_clipboard(this.text_to_encrypt)
		});


	}

				// function that encode and decode data
		show_result(){
			if( this.select.value == 'decrypt'){
				// result.value = btoa(text_to_encrypt.value);
				this.result.value = atob(this.text_to_encrypt.value);
			}  // encrypt the text
			else {
				this.result.value = btoa(this.text_to_encrypt.value);
			}
		};

		set_select() {
			if(localStorage.getItem("en_de") !== null ) {
				this.select.value = localStorage.getItem("en_de");
			}
		}

		copy_to_clipboard(textarea) {
			alert("copied !!");
			textarea.select();
			document.execCommand("copy");
			// textarea.value = ""
		}
}


onload = new Encode();
