//console.log('Hello, world');
// typescript === javascript

/*interface showinfoOptions {
    displayDay?: boolean;
    displayMonth?: boolean;
    displayYear?: boolean;
} 

function showinfo(date: Date, options: showinfoOptions = {}) {
    console.log(date.toLocaleDateString())
    if (options.displayDay) {{
        console.log('Day:', date.getDate());    
            }
        }
    if(options.displayMonth) {
        console.log('Month:', date.getMonth() + 1);    
    }
    if(options.displayYear) {
        console.log('Year:', date.getFullYear());    
    }
}

showinfo(new Date(), {displayDay: true, displayMonth: true, displayYear: true})
*/

import { conta_Pessoa_Fisica } from "./conta_bancaria.js";

let pessoa1 = new conta_Pessoa_Fisica("Derek",0.0, "066.034.534-43" );
console.log(pessoa1.CPF);