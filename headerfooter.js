class Header extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <section class="header_menu" id="header_menu"> 
          <div class="container-fluid px-0 shadow"> 
              <nav class="navbar navbar-expand-lg navbar-light bg-light py-3"> 
                  <a class="navbar-brand pl-5 pl-small-0" href="landingpage.html"> 
                      <img src="assets/Untitled design.png" class="img img-fluid" width="65px" alt="logo"> 
                  </a> 
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                      <span class="navbar-toggler-icon"></span> 
                  </button> 
                  <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
                      <ul class="navbar-nav mx-auto"> 
                          <li class="nav-item active"> 
                              <a class="nav-link" href="landingpage.html">Home <span class="sr-only">(current)</span></a> 
                          </li> 
                          <li class="nav-item"> 
                              <a class="nav-link" href="product.html">Product</a> 
                          </li> 
                          <li class="nav-item"> 
                              <a class="nav-link" href="category.html">Category</a> 
                          </li> 
                          <li class="nav-item"> 
                              <a class="nav-link" href="about.html">About Us</a> 
                          </li> 
                          <li class="nav-item"> 
                              <a class="nav-link" href="contact.html">Contact Us</a> 
                          </li> 
                      </ul> 
                      <div class="search mr-3"> 
                          <a href="search.html" class="btn btn-sm btn-outline-primary">Search</a> 
                      </div> 
                      <div class="cart"> 
                          <a href="cart.html">
                              <i class="fas fa-shopping-cart fa-2x"></i> 
                              <span class="badge badge-pill badge-primary">2</span> 
                          </a> 
                      </div> 
                  </div> 
              </nav> 
          </div> 
      </section>`;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
      this.innerHTML = ` 
      <section class="footer_section pt-5 pb-2" id="footer_section"> 
          <footer> 
              <div class="container-fluid"> 
                  <div class="row"> 
                      <div class="col-md-3 col-6 pl-5 pl-small-15"> 
                          <div class="footer_title"> 
                              <a href="landingpage.html"><img src="assets/Untitled design.png" width="150px" class="img img-fluid" alt="logo"></a> 
                          </div> 
                          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, totam est illum ipsum quas ad dignissimos magni veritatis natus voluptatem.</div> 
                      </div> 
                      <div class="col-md-3 col-6"> 
                          <div class="footer_title pt-3 mb-3"> 
                              <h3>Quick Links</h3> 
                          </div> 
                          <div class="footer_links"> 
                              <ul> 
                                  <li><a href="about.html">About</a></li> 
                                  <li><a href="javascript:;">Offers & Discounts</a></li> 
                                  <li><a href="javascript:;">Get Coupon</a></li> 
                                  <li><a href="contact.html">Contact Us</a></li> 
                              </ul> 
                          </div> 
                      </div> 
                      <div class="col-md-3 col-6"> 
                          <div class="footer_title pt-3 mb-3"> 
                              <h3>New Products</h3> 
                          </div> 
                          <div class="footer_links"> 
                              <ul> 
                                  <li><a href="javascript:;">Woman Cloth</a></li> 
                                  <li><a href="javascript:;">Fashion Accessories</a></li> 
                                  <li><a href="javascript:;">Man Accessories</a></li> 
                                  <li><a href="javascript:;">Rubber made Toys</a></li> 
                              </ul> 
                          </div> 
                      </div> 
                      <div class="col-md-3 col-6"> 
                          <div class="footer_title pt-3 mb-3"> 
                              <h3>Support</h3> 
                          </div> 
                          <div class="footer_links"> 
                              <ul> 
                                  <li><a href="javascript:;">Frequently Asked Questions</a></li> 
                                  <li><a href="javascript:;">Terms & Conditions</a></li> 
                                  <li><a href="javascript:;">Privacy Policy</a></li> 
                                  <li><a href="javascript:;">Report a Payment Issue</a></li> 
                              </ul> 
                          </div> 
                      </div> 
                  </div> 
              </div> 
              <div class="border-top"> 
                  <h6 class="text-center mt-3">Copyright ©2020 All rights reserved</h6> 
              </div> 
          </footer> 
      </section> 
      <div class="backtop"> 
          <a id="button" href="#top" class="btn btn-lg btn-outline-danger" role="button"> 
              <i class="fas fa-chevron-up text-dark"></i> 
          </a> 
      </div>`;
  }
}

customElements.define('extended-header', Header);
customElements.define('extended-footer', Footer);
