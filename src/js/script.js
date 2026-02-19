const eat = document.getElementById("eat");

class Food {
  constructor(img, title, desc, price) {
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
                    href=""
                    class="w-[40px] h-[40px] bg-[#ffbe33] flex items-center justify-center rounded-full"
                    ><i class="fa-solid fa-cart-shopping"></i
                  ></a>
                </div>
              </div>
            </div>`;
  }
}

let allFood = [
  new Food(
    "https://themewagon.github.io/feane/images/f1.png",
    "Classic Burger",
    "Grilled premium beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomatoes, crispy onions and our special house sauce served inside a toasted brioche bun.",
    12,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f2.png",
    "Pepperoni Pizza",
    "Stone-baked pizza prepared with rich tomato sauce, stretchy mozzarella cheese and spicy pepperoni slices finished with fresh oregano and olive oil drizzle.",
    15,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f3.png",
    "Chicken Wings",
    "Crispy golden chicken wings marinated in a signature spicy glaze, served with creamy ranch dip and fresh celery sticks for extra flavor balance.",
    10,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f4.png",
    "Creamy Pasta",
    "Freshly cooked Italian pasta blended with smooth Alfredo cream sauce, parmesan cheese and grilled chicken pieces topped with parsley.",
    13,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f5.png",
    "BBQ Steak",
    "Tender grilled beef steak cooked to perfection, brushed with smoky barbecue sauce and served with roasted vegetables and herb butter.",
    22,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f6.png",
    "Fish & Chips",
    "Crispy battered cod fillet deep fried until golden brown served with seasoned french fries, tartar sauce and fresh lemon wedges.",
    14,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f7.png",
    "Fresh Salad",
    "A healthy mix of fresh organic greens, cherry tomatoes, cucumber, olives and feta cheese tossed with light olive oil dressing.",
    9,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f8.png",
    "Chocolate Cake",
    "Moist and rich chocolate cake layered with smooth chocolate ganache and topped with dark chocolate shavings for dessert lovers.",
    8,
  ),
  new Food(
    "https://themewagon.github.io/feane/images/f9.png",
    "Ice Cream",
    "Creamy vanilla ice cream scoop made with natural ingredients served with caramel syrup and crunchy nuts topping.",
    6,
  ),
];

for (let i = 0; i < allFood.length; i++) {
  eat.innerHTML += `${allFood[i].showFood()}`;
}
