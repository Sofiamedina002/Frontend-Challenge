let products = document.querySelector(".all-products");
let user_information = document.querySelector("header")
let user_points = document.querySelector(".user-information")
let products_category = document.getElementById("product-category")

const options = {
	method: 'GET',
	headers: {
		'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyMjllN2FmYjMxNDAwMjE2ZmRlOWIiLCJpYXQiOjE2ODQxNTQ4NTV9.oR2sV0Tgw5HLDIH3d0wrHFgeDmLskcs2IFUcXrl_LfE'
	}
};

let user_data = fetch('https://coding-challenge-api.aerolab.co/user/me', options)
                    .then(response => response.json())
                    .then(json => {
                        user_information.innerHTML += `
                        <a href="" class="user-information"><img src="assets/icons/aeropay-1.svg" alt="">
                        ${json.points}<img src="assets/icons/chevron-active.svg" alt=""></a>`

                        let points = document.querySelector(".user_information").value
                        console.log(points)
                    });

let product_data = fetch('https://coding-challenge-api.aerolab.co/products', options)
                    .then(response => response.json())
                    .then(json => {
                        json.forEach((product) => {
                            products.innerHTML += `
                                <div class="product">
                                    <img src=${product.img.url} alt=${product.img.hdUrl}>
                                    <p id="product-name">${product.name}</p>
                                    <p id="product-category">${product.category}</p>
                                    <button class="product-points">Redeem for ${product.cost}</button>
                                </div>`
                        })
                        json.forEach((product) => {
                            products_category.innerHTML += 
                            `<option value=${product.category}>${product.category}</option>`
                        })
                    });



// user_points.addEventListener("click", function(){
//     user_information.innerHTML += `
//     <article class="points">
//         <h6>Add Balance</h6>
//         <div class="card">
//             <p class="card">Aerocard</p>
//             <p>John Kite</p>
//             <p>07/23</p>
//         </div>
//         <div class="add_points">
//             <a>1000</a>
//             <a>5000</a>
//             <a>7500</a>
//         </div>
//         <button class="charging">Add Points</button>
//     </article>`
// });
