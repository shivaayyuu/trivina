// Nav Bar =================================================================>>>>>>>

window.addEventListener('scroll', function () {

    var header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Feature Items ===============================================================>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".fe-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = [...boxes].indexOf(entry.target);
                if (index % 2 === 0) {
                    entry.target.classList.add("slide-in-left");
                } else {
                    entry.target.classList.add("slide-in-right");
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

// Hamburger Menu ===================================================>>>>>>>>>

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('activeBAR');
        bar.style.display = 'none';
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('activeBAR');
        bar.style.display = 'flex';
    });
}

// Shop Page Script ===================================================>>>>>>>>>

const text = "Save more with coupons and up to 45% off..!";
let index = 0;
const speed = 100;
const colors = ["#ff0000", "#ff8000", "#ffbf00", "#80ff00", "#00ff40", "#00ffff", "#0080ff", "#8000ff", "#ff00ff"];

document.addEventListener("DOMContentLoaded", function () {
    const text = "Save more with coupons and up to 45% off..!";
    let index = 0;
    const speed = 100;
    const colors = ["#ff0000", "#ff8000", "#ffbf00", "#80ff00", "#00ff40", "#00ffff", "#0080ff", "#8000ff", "#ff00ff"];

    function typeWriter() {
        if (index < text.length) {
            const span = document.createElement('span');
            span.textContent = text.charAt(index);
            span.style.color = colors[index % colors.length];
            document.getElementById("animated-Shoptext").appendChild(span);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); // Call the function immediately after defining it
});


// Change Image with Click ===================================================>>>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
    var smallImages = document.querySelectorAll(".small__img");

    smallImages.forEach(function (img) {
        img.addEventListener("click", function () {
            var newSrc = this.getAttribute("src");
            document.getElementById("main__image").setAttribute("src", newSrc);
        });
    });
});

// Blog Page Script ===================================================>>>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
    const promoText = "Read all case studies blog about our products";
    let charIndex = 0;
    const typingSpeed = 100;
    const colorPalette = ["#000FFF", "#00FF88", "#FFFF00", "#FFA500", " #A52A2A"];

    function typeWriterEffect() {
        if (charIndex < promoText.length) {
            const charSpan = document.createElement('span');
            charSpan.textContent = promoText.charAt(charIndex);
            charSpan.style.color = colorPalette[charIndex % colorPalette.length];
            document.getElementById("animated-ShoptextBLOG").appendChild(charSpan);
            charIndex++;
            setTimeout(typeWriterEffect, typingSpeed);
        }
    }

    typeWriterEffect(); // Call the function immediately after defining it
});

// About Page Script ===================================================>>>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
    const promoTextONE = "Check If Issued About Cara & Resolve";
    let charIndexONE = 0;
    const typingSpeedONE = 100;
    const colorPaletteONE = ["#000FFF", "#00FF88", "#FFFF00", "#FFA500",];

    function typeWriterEffectONE() {
        if (charIndexONE < promoTextONE.length) {
            const charSpan = document.createElement('span');
            charSpan.textContent = promoTextONE.charAt(charIndexONE);
            charSpan.style.color = colorPaletteONE[charIndexONE % colorPaletteONE.length];
            document.getElementById("animated-ShoptextABOUT").appendChild(charSpan);
            charIndexONE++;
            setTimeout(typeWriterEffectONE, typingSpeedONE);
        }
    }

    typeWriterEffectONE(); // Call the function immediately after defining it
});

// Contact Page Script ===================================================>>>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
    const promoTextTWO = "Ask Your Any Query Contact Cara";
    let charIndexTWO = 0;
    const typingSpeedTWO = 100;
    const colorPaletteTWO = ["#00FFFF", "#00FF00", "#FF69B4", "#7FFFD4"];

    function typeWriterEffectTWO() {
        if (charIndexTWO < promoTextTWO.length) {
            const charSpan = document.createElement('span');
            charSpan.textContent = promoTextTWO.charAt(charIndexTWO);
            charSpan.style.color = colorPaletteTWO[charIndexTWO % colorPaletteTWO.length];
            document.getElementById("animated-ShoptextContact").appendChild(charSpan);
            charIndexTWO++;
            setTimeout(typeWriterEffectTWO, typingSpeedTWO);
        }
    }

    typeWriterEffectTWO(); // Call the function immediately after defining it
});

document.addEventListener("DOMContentLoaded", function () {
    const promoTextTHREE = "Buy Products From Trivina Cart";
    let charIndexTHREE = 0;
    const typingSpeedTHREE = 100;
    const colorPaletteTHREE = ["#000000"];

    function typeWriterEffectTHREE() {
        if (charIndexTHREE < promoTextTHREE.length) {
            const charSpan = document.createElement('span');
            charSpan.textContent = promoTextTHREE.charAt(charIndexTHREE);
            charSpan.style.color = colorPaletteTHREE[charIndexTHREE % colorPaletteTHREE.length];
            document.getElementById("animated-ShoptextCart").appendChild(charSpan);
            charIndexTHREE++;
            setTimeout(typeWriterEffectTHREE, typingSpeedTHREE);
        }
    }

    typeWriterEffectTHREE();

    loadCartItems();

});

function addToCart(element, event) {
    event.stopPropagation();

    const product = element.closest('.pro');
    const brand = product.getAttribute('data-brand');
    const name = product.getAttribute('data-name');
    const price = product.getAttribute('data-price');
    const image = product.getAttribute('data-image');

    const cartItem = {
        brand,
        name,
        price,
        image,
        quantity: 1
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const existingItemIndex = cartItems.findIndex(item => item.name === name);
    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += 1;
    } else {
        cartItems.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    showPopup();

    loadCartItems();
}

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
        cartItems.forEach(item => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td><a onclick="removeItem(this)"><i class="far fa-times-circle"></i></a></td>
                <td><img src="${item.image}" alt=""></td>
                <td>${item.name}</td>
                <td>₹ ${item.price}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateItemQuantity(this, '${item.name}')"></td>
                <td>₹ ${item.price * item.quantity}</td>
            `;

            cartItemsContainer.appendChild(row);
        });
    }

    updateCartTotal();
}

function updateItemQuantity(input, productName) {
    let quantity = parseInt(input.value);
    if (quantity < 1) {
        quantity = 1;
        input.value = 1;
    }

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems = cartItems.map(item => {
        if (item.name === productName) {
            item.quantity = quantity;
        }
        return item;
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function updateCartTotal() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let subtotal = 0;

    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    document.getElementById('cart-subtotal').innerText = '₹ ' + subtotal;
    document.getElementById('cart-total').innerText = '₹ ' + subtotal;
}

function removeItem(element) {
    const row = element.closest('tr');
    const productName = row.children[2].innerText;

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.name !== productName);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}


// S_product add image price name from product sections change Here script ==================================>>>>>>>>

function redirectToProductDetail(element) {
    const product = element.closest('.pro');
    const brand = product.getAttribute('data-brand');
    const name = product.getAttribute('data-name');
    const price = product.getAttribute('data-price');
    const image = product.getAttribute('data-image');

    const queryParams = new URLSearchParams({
        brand,
        name,
        price,
        image
    });

    window.location.href = `sproduct.html?${queryParams.toString()}`;
}


document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    const name = urlParams.get('name');
    const price = urlParams.get('price');
    const image = urlParams.get('image');

    document.getElementById('breadcrumb').textContent = `Home / ${brand}`;
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = `₹ ${price}`;
    document.getElementById('main__image').src = image;
});

function addToCartFromDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    const name = urlParams.get('name');
    const price = urlParams.get('price');
    const image = urlParams.get('image');
    const quantity = document.getElementById('product-quantity').value;

    const cartItem = {
        brand,
        name,
        price,
        image,
        quantity: parseInt(quantity)
    };

    // Get cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if item already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === name);
    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += parseInt(quantity);
    } else {
        cartItems.push(cartItem);
    }

    // Save back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to cart page
    window.location.href = './cart.html';
}

// S_product Random picc change Here script ==================================>>>>>>>>

const fImages = ['./Image/Product/f1.jpg', './Image/Product/f2.jpg', './Image/Product/f3.jpg', './Image/Product/f4.jpg', './Image/Product/f5.jpg', './Image/Product/f6.jpg', './Image/Product/f7.jpg', './Image/Product/f8.jpg'];
const nImages = ['./Image/Product/n1.jpg', './Image/Product/n2.jpg', './Image/Product/n3.jpg', './Image/Product/n4.jpg', './Image/Product/n5.jpg', './Image/Product/n6.jpg', './Image/Product/n7.jpg', './Image/Product/n8.jpg'];

function getRandomImage(images) {
    return images[Math.floor(Math.random() * images.length)];
}

function setRandomImages() {
    document.getElementById('img1').src = getRandomImage(fImages);
    document.getElementById('img2').src = getRandomImage(fImages);
    document.getElementById('img3').src = getRandomImage(nImages);
    document.getElementById('img4').src = getRandomImage(nImages);
}

window.onload = setRandomImages;