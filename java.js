let ActualCart=[];
let AllEmails=[];
let AddToCartAllButton=document.querySelectorAll('.feature-product-box');
for(let i=0;i<AddToCartAllButton.length;i++){
    let button=AddToCartAllButton[i].children[2];
    button.addEventListener('click',()=>{
        let ProdName=AddToCartAllButton[i].children[1].children[1].innerText;
        let imgLocation=AddToCartAllButton[i].children[0].children[0].currentSrc;
        let price=AddToCartAllButton[i].children[1].children[3].children[0].innerText;
        let ProductDetail = {
            ProductName:ProdName,
            ProductPrice:price,
            ImgLocn:imgLocation,
            quantity:1
        };
        let exist=ActualCart.find(p=>p.ImgLocn===imgLocation);
        imgLocation="../"+imgLocation;
        let existt=ActualCart.find(p=>p.ImgLocn===imgLocation)
        if(exist){
            exist.quantity++;
        }
        else if(existt){
            existt.quantity++;
        }
        else{
            ActualCart.push(ProductDetail);
            //document.getElementsByClassName("AllCartProducts").innerText+=`\t\t\n\nCartoon Astronaut T-shirts\n\n\t\n\n$119.19\n\n\t\t\n\n$119.19\n\n\n`;
        }
        localStorage.setItem("TotalCart",JSON.stringify(ActualCart));
    })
}

let text;

function initCartPage(){
    let text="";
    let items=JSON.parse(localStorage.getItem("TotalCart"));

    //console.log(JSON.parse(localStorage.getItem("TotalCart")));
    function solve(){

        if(!items){
            //console.log("No Items");
            document.querySelector(".AllCartProducts").innerHTML=`<tr>
                    <td class="NO-Cart-Items" style="padding: 100px; width: auto; " colspan="6">
                        <p>No Items In Cart &nbsp; &nbsp;<a href="../shop/shop.html" style="text-decoration: none; cursor: pointer;">Shop Now</a></p>
                    </td>
                </tr>`
            return ;
        }
        let totalPricee=0;
        for(let i=0;i<items.length;i++){
            let namee=items[i].ProductName;
            let pricee=items[i].ProductPrice;
            let quantityy=items[i].quantity;
            let imagee=items[i].ImgLocn;
            totalPricee= totalPricee+pricee*quantityy;
            text+= `
                <tr>
                    <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                    <td><img src="${imagee}" alt=""></td>
                    <td><p>${namee}</p></td>
                    <td><p>Rs ${pricee}</p></td>
                    <td><input type="number" name="quantity" id="NoOfItems" placeholder="${quantityy}"></td>
                    <td><p>Rs ${pricee*quantityy}</p></td>
                </tr>
            `
        }
        //console.log(totalPricee);
        let Shipping=0;
        let Discount=0;
        if(totalPricee>1000){
            Shipping=0;
        }
        else{
            Shipping=totalPricee/20;
        }
        ttext=`
        
            <div class="coupon">
                <h4 style="padding-bottom: 30px;">Apply Coupon</h4>
                <input type="text" placeholder="Enter Your Coupon" class="coupon-input">
                <button class="coupon-Apply">Apply</button>
            </div>
            <div class="subtotall">
                <h4>Cart Total</h4>
                <table>
                    <tr>
                        <td>Cart SubTotal</td>
                        <td>Rs ${totalPricee}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Rs ${Shipping}</td>
                    </tr>
                    <tr>
                        <td>Coupon Discount</td>
                        <td>Rs ${Discount}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>Rs ${totalPricee-Shipping-Discount}</td>
                    </tr>
                </table>
                <button>Proceed To CheckOut</button>
            </div>
        
        `
        document.querySelector(".AllCartProducts").innerHTML=text;
        document.querySelector(".After-table").innerHTML=ttext;
    }
    solve();

}



window.onload=function(){
    const PageId=document.body.id;
    if(PageId==="cart-page"){
        //console.log(ActualCart);
        initCartPage();
    }
}

let bar=document.getElementById('bar');
let close=document.getElementById('close');
if(bar){
    bar.addEventListener('click',()=>{
        document.getElementById('close').style.display='flex';
        document.getElementById('navbar').style.right="0";
    })
}
if(close){
    close.addEventListener('click',()=>{
        document.getElementById('close').style.display='none';
        document.getElementById('navbar').style.right="-300px";
    })
}




window.onload=function(){
    const PageId=document.body.id;
    if(PageId==="cart-page"){
        initCartPage();
        return;
    }
    let signupBtn=document.querySelector('.email-signup');
    signupBtn.addEventListener('click',()=>{
        let email=document.querySelector('.email-input').value;
        AllEmails=JSON.parse(localStorage.getItem("AllEmailData"));
        AllEmails.push(email);
        localStorage.setItem("AllEmailData",JSON.stringify(AllEmails));
    })
}
