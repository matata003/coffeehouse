const Footer = () => {
    return ( 
    <div className="">
        <section class="row bg-dark   p-3">
            <div class="col-md-4 text-white">
                <h2>About Us</h2>
                <p> We specialize in the sale of coffee, coffee machines and accessories.
                     We uphold quality as our strong suit, so you are guaranteed of top-notch product when you shop from us.
                </p>
            </div>
        
            <div class="col-md-4 ">
                <p class="text-white">Contact Us</p>
                <form>
                    <input type="text" placeholder="enter email" class="form-control" />
                    <br/> 
                    <textarea cols="40" rows="5" placeholder="leave a comment" class="form-control"></textarea>
                    <br/>
                    <button class="btn btn-danger btn-sm text-white">send message</button>
                    
                </form>
            </div>

            <div class="col-md-4 text-white">
                <h2 class="text-white ">Beyond The brew</h2>

                <i class="bi bi-facebook text-white" ></i>

                <i class="bi bi-instagram"></i>

                <i class="bi bi-twitter-x"></i>

                <br/>
                <p>We offer more than just coffee machines. We’re your one-stop shop for
                     all things coffee! Explore our curated selection of coffee beans, 
                    syrups, pods, grinders, mugs, and other accessories to complete your coffee experience. </p>

            </div>
        
        </section>
            <p class="bg-dark text-white text-center p-2">Developed by Tresy <span><i class="bi bi-twitter-x"></i></span>

                .copyright All rights observed</p>
    </div>
     );
}
 
export default Footer;