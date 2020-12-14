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
            .catch(console.error)
    },
    show(id) {
        return fetch(`${BASE_URL}/products/${id}`)
            .then(res => res.json())
            .catch(console.error)
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
Session.create({email:'js@winterfell.gov', password:'supersecret'})

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
        navigateTo(page)
    }
})
// Grabbing data from new Question Form:
const newProductForm=document.querySelector('#new-product-form');
newProductForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const form=event.currentTarget
    console.log(form);
    const fd=new FormData(form)
    const newProductParams={
        title:fd.get('title'),
        body:fd.get('description'),
        // price:fd.get('price')
    }
    console.log(newProductParams);
    Products.create(newProductParams).then(data=>{
        console.log(data)
        loadProducts();
    }).catch(err=>console.log(err))
})