const originalPage = document.querySelector('.innerpage');
const originalHTML = originalPage.innerHTML;
function solve() {
    let ProdCard = document.querySelectorAll('.feature-product-box');
    console.log(ProdCard[2]); // optional debug log
    for (let i = 0; i < ProdCard.length; i++) {
        ProdCard[i].addEventListener('click', () => {
            let btn = document.querySelector('.goback');
            btn.style.display="inline-block";
            let imgLocation = ProdCard[i].children[0].children[0].currentSrc;
            let Price = ProdCard[i].children[1].children[3].children[0].innerText;
            let Name = ProdCard[i].children[1].children[1].innerText;
            originalPage.innerHTML = `
                <div class="Detail-box">
                    <div class="prod-img">
                        <img src="${imgLocation}" alt="">
                    </div>
                    <div class="prod-details">
                        <div style="font-size: 20px;" class="detail1">
                            <h3>${Name}</h3>
                        </div>
                        <div style="font-size: 30px;" class="detail2">
                            <h5>Rs. ${Price}/-</h5>
                        </div>
                        <div class="detail3">
                            <input style="height: 35px; width: 35px; border-radius: 5px; padding-left: 10px;" type="number" placeholder="1">
                            <button class="AddToCartButton">Add To Cart</button>
                        </div>
                        <div class="detail4">
                            <h4>Product Details</h4>
                            <br>
                            <p style="line-height: 25px;">
                                The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq.yd fabric constructed from 100% cotton. This classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, seamless double-needle collar, and available in a range of colors — it offers it all in the ultimate head-turning package.
                            </p>
                        </div>
                    </div>
                </div>
            `;

            // Add listener to the dynamically created Go Back button
            document.querySelector('.goback').addEventListener('click', () => {
                originalPage.innerHTML = originalHTML;
                solve(); // re-attach event listeners after restoring original view
            });
        });
    }
}

solve();

let btn = document.querySelector('.goback');

btn.onclick = () => {
    document.querySelector('.innerpage').innerHTML = originalHTML;
    btn.style.display = "none";
    solve(); // re-bind events to product boxes
};






/*function solve(){
    let ProdCard=document.querySelectorAll('.feature-product-box');
    console.log(ProdCard[2]);
    for(let i=0;i<ProdCard.length;i++){
        ProdCard[i].addEventListener('click',()=>{
            let imgLocation=ProdCard[i].children[0].children[0].currentSrc;
            let Price=ProdCard[i].children[1].children[3].children[0].innerText;
            let Name=ProdCard[i].children[1].children[1].innerHTML;
            let data=document.querySelector('.innerpage').innerHTML;
            document.querySelector('.innerpage').innerHTML=`

            <div class="Detail-box">
                <div class="prod-img">
                    <img src="${imgLocation}" alt="">
                </div>
                <div class="prod-details">
                    <div style="font-size: 20px;" class="detail1">
                        <h3>${Name}</h3>
                    </div>
                    <div style="font-size: 30px;" class="detail2">
                        <h5>Rs. ${799}/-</h5>
                    </div>
                    <div class="detail3">
                        <input style="height: 35px; width: 35px; border-radius: 5px; padding-left: 10px;" type="number" name="" id="" placeholder="1">
                        <button class="AddToCartButton">Add To Cart</button>
                    </div>
                    <div class="detail4">
                        <h4>Product Details</h4>
                        <br>
                        <p style="line-height: 25px;">The Gildan Ultra Cotton T-Shirts is Made from a substantial 6.0 oz. 
                            per sq.yd fabric constructed from 100% Cotton, this classic fit preshrunk 
                            jersey knit provides unmatched comfort with each wear , featuring a taped
                             neck and shoulder , and a seamless double-needle collar , and available in 
                             a range of colors , it offers it all in the ultimate head turning package</p>
                    </div>
                </div>
            </div>

            `;
            let btn=document.querySelector('.goback');
            btn.addEventListener('click',()=>{
                btn.style.display="none";
                document.querySelector('.innerpage').innerHTML=data;
            })
            btn.style.display="inline-block";


        })
    }
}*/

/*<div class="Detail-box">
            <div class="prod-img">
                <img src="../images/products/f1.jpg" alt="">
            </div>
            <div class="prod-details">
                <div style="font-size: 20px;" class="detail1">
                    <h3>Cartoon Astronaut T-Shirt</h3>
                </div>
                <div style="font-size: 30px;" class="detail2">
                    <h5>Rs. 799/-</h5>
                </div>
                <div class="detail3">
                    <input style="height: 35px; width: 35px; border-radius: 5px; padding-left: 10px;" type="number" name="" id="" placeholder="1">
                    <button class="AddToCartButton">Add To Cart</button>
                </div>
                <div class="detail4">
                    <h4>Product Details</h4>
                    <br>
                    <p style="line-height: 25px;">The Gildan Ultra Cotton T-Shirts is Made from a substantial 6.0 oz. 
                        per sq.yd fabric constructed from 100% Cotton, this classic fit preshrunk 
                        jersey knit provides unmatched comfort with each wear , featuring a taped
                         neck and shoulder , and a seamless double-needle collar , and available in 
                         a range of colors , it offers it all in the ultimate head turning package</p>
                </div>
            </div>
        </div>*/