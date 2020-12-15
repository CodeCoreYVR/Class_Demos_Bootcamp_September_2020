console.log('From Main.js')
const BASE_URL = 'http://localhost:3000/api/v1'

const Products = {
    index() {
        return fetch(`${BASE_URL}/products`)
            .then(
                res => {
                    //  console.log();
                    return res.json()
                })
            .catch((error) => {
                console.error(error)
            })
    },
    show(id) {
        return fetch(`${BASE_URL}/products/${id}`)
            .then(res => res.json())
            .catch((error) => {
                console.error(error)
            })
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    update(id, params) {
        return fetch(`${BASE_URL}/products/${id}`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
                method: "DELETE",
                credentials: 'include',
            }).then(res => res.json())
            .catch(console.error)

    }
}

const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
}
Session.create({
    email: 'js@winterfell.gov',
    password: 'supersecret'
})

function loadProducts() {
    Products.index().then(products => {
        const productContainer = document.querySelector('ul.product-list');
        productContainer.innerHTML = products.map(product => {
            return `
    <li>
        <a class='product-link' data-id=${product.id} href=''>
            ${product.id} - ${product.title}
        </a>
    </li>
    `
        }).join('')
    })
}
loadProducts();

// Show Product
const productContainer = document.querySelector('ul.product-list');
// console.log(productContainer)
productContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const productElement = event.target
    if (productElement.matches('a.product-link')) {
        // console.log(productElement.dataset.id)
        renderProductShow(productElement.dataset.id)
    }
})
// Function to display Show Page of Product
function renderProductShow(id) {
    Products.show(id).then(product => {
        // console.log(`${product.id} - ${product.title}`)
        const showPage = document.querySelector('.page#product-show')
        const showPageHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <a data-target="product-edit" data-id="${ 
            product.id 
            }" href="">Edit</a>
            <br>
        <a data-target="delete-product" data-id="${product.id}" href="">Delete</a>
       
        `
        showPage.innerHTML = showPageHTML;
        navigateTo('product-show')
    })
}

// Navigation Bar

function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(node => {
        node.classList.remove('active')
    })
    document.querySelector(`.page#${pageId}`).classList.add('active');
}
// Adding Navigation
const navbar = document.querySelector('nav.navbar')
navbar.addEventListener('click', (event) => {
    event.preventDefault();
    const node = event.target;
    const page = node.dataset.id;
    if (page) {
        console.log(page);
        navigateTo(page);
        if (page === 'product-index') {
            loadProducts();
        }
    }
})
// Grabbing data from new Product Form:
const newProductForm = document.querySelector('#new-product-form');
newProductForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget
    // console.log(form);
    const fd = new FormData(form)
    const newProductParams = {
        title: fd.get('title'),
        description: fd.get('description'),
        price: fd.get('price')
    }
    console.log(newProductParams);
    Products.create(newProductParams).then(data => {
        // console.log('Before IF:',data.errors)

        if (data.errors) {
            // console.log('After IF:', data.errors)
            const newProductForm = document.querySelector('#new-product-form');
            // Once the form is resubmitted it should remove old error complains 
            newProductForm.querySelectorAll('p.error-message').forEach(node => {
                node.remove()
            });

            for (const key in data.errors) {
                const errorMessages = data.errors[key].join(', ');
                const errorMessageNode = document.createElement('p');
                // adding class 'error-message' to node created above
                errorMessageNode.classList.add('error-message');
                // Pushing the string of error messages in the node created above
                errorMessageNode.innerText = errorMessages;
                // Here 'id' in the form is the 'key' in the object received as error from rails server and we are grabbing the form node by help of it
                const input = newProductForm.querySelector(`#${key}`)
                // now inserting the new node created before the input node we grabbed above
                input.parentNode.insertBefore(errorMessageNode, input)

            }
        } else {

            renderProductShow(data.id)
        }
        // console.log(data)
        // loadProducts();
    })
})

// Edit Products
document.querySelector('#product-show').addEventListener('click', (event) => {
    event.preventDefault();
    const ProductID = event.target.dataset.id
    const actionNeededTobePerformed = event.target.dataset.target
    // console.log(actionNeededTobePerformed)
    if (ProductID) { // refining the click only to edit button itself
        if (actionNeededTobePerformed === "delete-product") {
            console.log(`Delete:${ProductID}`)
            Products.destroy(ProductID).then(product => {
                loadProducts();
                navigateTo('product-index');
            })
        } else {
            console.log(ProductID)
            populateForm(ProductID);
            navigateTo('product-edit')
        }
    }
})

function populateForm(id) {
    Products.show(id).then(
        productData => {
            document.querySelector('#edit-product-form [name=title]').value = productData.title;
            document.querySelector('#edit-product-form [name=description]').value = productData.description;
            document.querySelector('#edit-product-form [name=price]').value = productData.price;
            document.querySelector('#edit-product-form [name=id]').value = productData.id;
        }
    )
}

// Creating Update Function

const editProductForm = document.querySelector('#edit-product-form');
editProductForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const editFormData = new FormData(event.currentTarget);
    const updatedProduct = {
        title: editFormData.get('title'),
        description: editFormData.get('description'),
        price: editFormData.get('price')
    };
    // console.log(updatedProduct);
    Products.update(editFormData.get('id'), updatedProduct)
        .then((product) => {
            editProductForm.reset(); // making the form blank
            renderProductShow(product.id)
        })
})