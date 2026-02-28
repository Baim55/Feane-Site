let productDetail = document.getElementById("productDetail");

class Food {
  constructor(id, img, title, desc, price) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.desc = desc;
    this.price = price;
  }
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

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

const selectedProduct = allFood.find((item) => item.id == productId);
if (selectedProduct) {
  productDetail.innerHTML = `
<div class="max-w-6xl mx-auto mt-16 px-4">
  <div class="relative bg-[#222831] rounded-[30px] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
    <button 
      onclick="event.preventDefault(); addWishlist(${selectedProduct.id})"
      class="absolute top-6 right-6 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:scale-125"
    >
      <i id="heart-${selectedProduct.id}" class="fa-regular fa-heart text-red-500 text-lg"></i>
    </button>
    <div class="bg-[#f1f2f3] rounded-3xl p-8 flex items-center justify-center w-full md:w-1/2 transition duration-500 group">
      <img 
        src="${selectedProduct.img}" 
        class="w-64 h-64 object-contain transition duration-500 hover:scale-110 "
      />
    </div>
    <div class="text-white w-full md:w-1/2 flex flex-col justify-center">
      <h2 class="text-3xl font-bold mb-4 tracking-wide">
        ${selectedProduct.title}
      </h2>

      <p class="text-gray-300 leading-7 mb-8 text-base">
        ${selectedProduct.desc}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-[#ffbe33]">
          $${selectedProduct.price}
        </span>
        <button
          onclick="event.preventDefault(); addBasket(${selectedProduct.id})"
          class="w-14 h-14 bg-[#ffbe33] text-black rounded-full flex items-center justify-center text-xl transition duration-300 hover:bg-white hover:scale-125 shadow-lg"
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>

  </div>
</div>
`;
}
