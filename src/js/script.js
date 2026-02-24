const eat = document.getElementById("eat");
let cartList = document.getElementById("cartList");
let cartCount = document.getElementById("cartCount");
let cartCountMobile = document.getElementById("cartCountMobile");
let basket = [];

function openModal() {
  let modal = document.getElementById("modal");
  modal.style.display === "none"
    ? (modal.style.display = "block")
    : (modal.style.display = "none");
}

class Food {
  constructor(id, img, title, desc, price) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.desc = desc;
    this.price = price;
  }
  showFood() {
    return `<div data-aos="fade-up" class="rounded-2xl overflow-hidden bg-[#222831]">
              <div
                class="p-[25px] rounded-bl-3xl bg-[#f1f2f3] flex items-center justify-center hov"
              >
                <img
                  src="${this.img}"
                  alt="" 
                  class="w-[180px] h-[180px] object-contain transition duration-300 hover:scale-105"
                />
              </div>
              <div class="p-[25px]  text-white">
                <h5 class="mb-[8px] text-[20px] font-bold">${this.title}</h5>
                <p class="mb-[16px] text-[15px]">
                  ${this.desc}
                </p>
                <div class="flex items-center justify-between">
                  <h6>$${this.price}</h6>
                  <a
                  onclick="event.preventDefault(); addBasket(${this.id})"
                    href=""
                    class="w-[40px] h-[40px] bg-[#ffbe33] flex items-center justify-center rounded-full"
                    ><i class="fa-solid fa-cart-shopping" ></i
                  ></a>
                </div>
              </div>
            </div>`;
  }
}

let allFood = [
  new Food(
    1,
    "https://themewagon.github.io/feane/images/f1.png",
    "Classic Burger",
    "Grilled premium beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomatoes, crispy onions and our special house sauce served inside a toasted.",
    12,
  ),
  new Food(
    2,
    "https://themewagon.github.io/feane/images/f2.png",
    "Pepperoni Pizza",
    "Stone-baked pizza prepared with rich tomato sauce, stretchy mozzarella cheese and spicy pepperoni slices finished with fresh oregano and olive oil drizzle.",
    15,
  ),
  new Food(
    3,
    "https://themewagon.github.io/feane/images/f3.png",
    "Chicken Wings",
    "Crispy golden chicken wings marinated in a signature spicy glaze, served with creamy ranch dip and fresh celery sticks for extra flavor balance.",
    10,
  ),
  new Food(
    4,
    "https://themewagon.github.io/feane/images/f4.png",
    "Creamy Pasta",
    "Freshly cooked Italian pasta blended with smooth Alfredo cream sauce, parmesan cheese and grilled chicken pieces topped with parsley.",
    13,
  ),
  new Food(
    5,
    "https://themewagon.github.io/feane/images/f5.png",
    "BBQ Steak",
    "Tender grilled beef steak cooked to perfection, brushed with smoky barbecue sauce and served with roasted vegetables and herb butter.",
    22,
  ),
  new Food(
    6,
    "https://themewagon.github.io/feane/images/f6.png",
    "Fish & Chips",
    "Crispy battered cod fillet deep fried until golden brown served with seasoned french fries, tartar sauce and fresh lemon wedges lemon wedges.",
    14,
  ),
  new Food(
    7,
    "https://themewagon.github.io/feane/images/f7.png",
    "Fresh Salad",
    "A healthy mix of fresh organic greens, cherry tomatoes, cucumber, olives and feta cheese tossed with light olive oil dressing oil dressing.",
    9,
  ),
  new Food(
    8,
    "https://themewagon.github.io/feane/images/f8.png",
    "Chocolate Cake",
    "Moist and rich chocolate cake layered with smooth chocolate ganache and topped with dark chocolate shavings for dessert lovers dessert lovers.",
    8,
  ),
  new Food(
    9,
    "https://themewagon.github.io/feane/images/f9.png",
    "Ice Cream",
    "Creamy vanilla ice cream scoop made with natural ingredients served with caramel syrup and crunchy nuts topping nuts topping.",
    6,
  ),
];

for (let i = 0; i < allFood.length; i++) {
  eat.innerHTML += `${allFood[i].showFood()}`;
}

function addBasket(id) {
  basket.push(id);
  showsebet();
  let say = basket.length == 0 ? "0" : basket.length;
  cartCount.innerHTML = say;
  cartCountMobile.innerHTML = say;

  Toastify({
    text: `Product added to basket!`,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {},
  }).showToast();
}

function showsebet() {
  cartList.innerHTML = "";
  cartList.innerHTML = basket
    .map((id, item) => {
      const product = allFood.find((p) => p.id === id);

      return `
     <div class="grid md:grid-cols-4 items-center md:gap-4 gap-6 py-4">
                  <div class="col-span-2 flex items-center gap-6">
                    <div class="w-20 h-20 shrink-0">
                      <img src='${product.img}'
                        class="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 class="text-[15px] font-semibold text-slate-900">${product.title}</h3>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <h4 class="text-[15px] font-semibold text-slate-900">${product.price} $</h4>
                    <svg onclick="removeBasket(${item})" xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-red-500 ml-auto"
                      viewBox="0 0 320.591 320.591">
                      <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"></path>
                      <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
    `;
    })
    .join("");
}

function removeBasket(item) {
  let modal = document.getElementById("modal");
  basket.splice(item, 1);
  basket.length == 0
    ? (modal.style.display = "none")
    : (modal.style.display = "block");
  showsebet();
  let say = basket.length == 0 ? "0" : basket.length;
  cartCount.innerHTML = say;
}
