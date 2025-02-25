import './style.css';

import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 6,
        navigation: {
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
        },
});

// Products in tabs

document.addEventListener("DOMContentLoaded", () => {
        const tabButtons = document.querySelectorAll(".tab-btn");
        const tabPanels = document.querySelectorAll(".tab-panel");

        const products = [
                {
                        id: 1,
                        name: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
                        price: 900,
                        currency: '$',
                        image: "src/assets/products/product1.png",
                        link: "#",
                        category: 'bestseller',
                },
                {
                        id: 2,
                        name: 'Blackmagic Pocket Cinema Camera 6k',
                        price: 2535,
                        currency: '$',
                        image: "src/assets/products/product2.png",
                        link: "#",
                        category: 'featured',
                },
                {
                        id: 3,
                        name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
                        price: 399,
                        currency: '$',
                        image: "src/assets/products/product3.png",
                        link: "#",
                        category: 'bestseller',
                },
                {
                        id: 4,
                        name: 'AirPods Max Silver',
                        price: 549,
                        currency: '$',
                        image: "src/assets/products/product4.png",
                        link: "#",
                        category: 'featured',
                },
                {
                        id: 5,
                        name: 'Samsung Galaxy Watch6 Classic 47mm Black',
                        price: 369,
                        currency: '$',
                        image: "src/assets/products/product5.png",
                        link: "#",
                        category: 'bestseller',
                },
                {
                        id: 6,
                        name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
                        price: 1799,
                        currency: '$',
                        image: "src/assets/products/product6.png",
                        link: "#",
                        category: 'featured',
                },
                {
                        id: 7,
                        name: 'Galaxy Buds FE Graphite',
                        price: 99.99,
                        currency: '$',
                        image: "src/assets/products/product7.png",
                        link: "#",
                        category: 'featured',
                },
                {
                        id: 8,
                        name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
                        price: 398,
                        currency: '$',
                        image: "src/assets/products/product8.png",
                        link: "#",
                        category: 'bestseller',
                },

        ]

        // Функція рендеру товарів у відповідну табу
        function renderProducts(category) {
                console.log("🚀 Виклик renderProducts() з категорією:", category);
                const panel = document.querySelector(".tab-panel.active .tab-panel-grid");
                if (!panel) return;

                // Фільтруємо товари за категорією
                const filteredProducts = products.filter(product => product.category === category);

                // Додаємо товари у табу
                panel.innerHTML = filteredProducts.map(product => `                
                        <div class="tab-panel-card">
                        <a href="${product.link}" class="user-favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                        height="24" fill="currentColor">
                                        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z">
                                        </path>
                                </svg>
                        </a>
                        <a href="${product.link}">
                                <img src="${product.image}" alt="${product.name}">
                        </a>
                        <p class="tab-panel-text">${product.name}</p>
                        <span>${product.currency}${product.price}</span>
                        <a href="${product.link}" class="btn-fill">Buy Now</a>
                        </div>                
            `).join("");
        }

        // Обробник кліку по табах
        tabButtons.forEach((button) => {
                button.addEventListener("click", () => {
                        const tabId = button.dataset.tab;

                        tabButtons.forEach((btn) => btn.classList.remove("active"));
                        tabPanels.forEach((panel) => panel.classList.remove("active"));

                        button.classList.add("active");
                        const activePanel = document.getElementById(`tab-${tabId}`);
                        activePanel.classList.add("active");

                        // Викликаємо рендер товарів для вибраної таби
                        renderProducts(tabId);
                });
        });

        // Рендеримо товари для першої активної таби при завантаженні сторінки
        const defaultTab = document.querySelector(".tab-btn.active");
        if (defaultTab) {
                renderProducts(defaultTab.dataset.tab);
        }

});