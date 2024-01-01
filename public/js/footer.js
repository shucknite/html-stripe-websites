const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casauls</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casauls</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Harum reprehenderit dolorum ad molestiae earum fugit? Excepturi
        illo ducimus amet, ex sequi rerum unde praesentium suscipit cumque 
        beatae aperiam harum vero?</p>
        <p class="info">support emails - clovisjill@gmail.com,
        tumentaiya@yahoo.com
        </p>
        <p class="info">telephone - 702-972-7789</p>
        <div class="footer-social-container">
            <div>
                <a href="" class="social-links">terms & service</a>
                <a href="" class="social-links">privacy page</a>
            </div>
            <div>
                <a href="" class="social-links">instagram</a>
                <a href="" class="social-links">facebook</a>
                <a href="" class="social-links">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing Best apparels online stores</p>
    `;
}

createFooter();