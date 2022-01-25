let Slider = () => {
    return(
        <>
                
        {/* <div id="demo" class="carousel slide mb-5" data-bs-ride="carousel">
            
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-26.jpg" alt="Los Angeles" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                <img src="https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-23.jpg" alt="Chicago" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                <img src="https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-22.jpg" alt="New York" class="d-block w-100" />
                </div>
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            </button>
        </div>
            </> */}
               <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="carousel" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner border border-2 border-primary">
          <div class="carousel-item active ">
            <img src="D:\10000 coders\Classroom_sourcecode\10000Coders_22-11-2021\Bootstrap-5\assets\images\web-dev\b-1.png" class="d-block w-100 p-1 "  alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../Boostrap-5/a/b-2.png" class="d-block w-100 p-1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../Boostrap-5/assets/images/web-development/b-3.png" class="d-block w-100 p-1" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true" ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
    );
};

export default Slider;