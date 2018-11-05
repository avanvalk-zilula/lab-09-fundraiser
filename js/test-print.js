
import customerApi from './customer-api.js';
import cartApi from './cart-api.js';


const cart = cartApi.getAll();
const customer = customerApi.getAll();

const list = document.getElementById('admin-info');

const addCart = {

    display(customer) {
        for(let i = 0; i < customer.length; i++) {
            const li = document.createElement('li');
            li.textContent += customer[i].name;
            list.appendChild(li);

            for(let i = 0; i < cart.length; i++){
                const li = document.createElement('li');
                li.textContent += customer[i].name;
                list.appendChild(li);
            }
        }
        customerApi.getAll();
    }

};

addCart.display(customer);