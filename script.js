const petsData = [
  {
    id: 1,
    name: '糯米',
    category: 'cat',
    breed: '英国短毛猫',
    emoji: '😺',
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=500&fit=crop',
    bgColor: '#e8d5c4',
    price: 3800,
    badge: '热门',
    traits: ['温顺', '亲人', '好养'],
    desc: '纯种英国短毛猫，圆脸大眼睛，性格温顺安静。已接种疫苗，会使用猫砂盆，适合新手家庭。',
    gender: '公',
    age: '3个月'
  },
  {
    id: 2,
    name: '布丁',
    category: 'cat',
    breed: '布偶猫',
    emoji: '😸',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=500&fit=crop',
    bgColor: '#d4c4f2',
    price: 6800,
    badge: '精选',
    traits: ['粘人', '温柔', '颜值高'],
    desc: '双色布偶猫，蓝眼睛，性格极其粘人温柔。已接种两针疫苗，社会化训练完成。',
    gender: '母',
    age: '4个月'
  },
  {
    id: 3,
    name: '团子',
    category: 'dog',
    breed: '柯基犬',
    emoji: '🐕',
    imageUrl: 'https://images.unsplash.com/photo-1612536053836-a7a16c0a6f0e?w=400&h=500&fit=crop',
    bgColor: '#f2d5c4',
    price: 5200,
    badge: null,
    traits: ['活泼', '聪明', '短腿萌'],
    desc: '彭布罗克威尔士柯基犬，三色花色。性格开朗活泼，已学会基本指令，适合有孩子的家庭。',
    gender: '公',
    age: '3个月'
  },
  {
    id: 4,
    name: '豆豆',
    category: 'dog',
    breed: '金毛寻回犬',
    emoji: '🐶',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=500&fit=crop',
    bgColor: '#c4d7f2',
    price: 4500,
    badge: '推荐',
    traits: ['忠诚', '友善', '聪明'],
    desc: '纯种金毛寻回犬，浅金色被毛。性格温顺友善，智商极高，是理想的家庭伴侣犬。',
    gender: '母',
    age: '4个月'
  },
  {
    id: 5,
    name: '奶盖',
    category: 'cat',
    breed: '异国短毛猫',
    emoji: '😻',
    imageUrl: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=500&fit=crop',
    bgColor: '#d4c4f2',
    price: 5500,
    badge: null,
    traits: ['呆萌', '安静', '懒洋洋'],
    desc: '加菲猫（异国短毛猫），扁脸大眼，表情呆萌可爱。性格安静不闹腾，适合公寓饲养。',
    gender: '公',
    age: '3个月'
  },
  {
    id: 6,
    name: '毛球',
    category: 'small',
    breed: '荷兰垂耳兔',
    emoji: '🐰',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=500&fit=crop',
    bgColor: '#f2e6d3',
    price: 880,
    badge: '入门',
    traits: ['可爱', '温顺', '好打理'],
    desc: '纯种荷兰垂耳兔，毛色雪白，耳朵自然下垂。性格温顺，已习惯被人抱抱。',
    gender: '公',
    age: '2个月'
  },
  {
    id: 7,
    name: '雪糕',
    category: 'dog',
    breed: '比熊犬',
    emoji: '🐩',
    imageUrl: 'https://images.unsplash.com/photo-1535930749574-1399328ce29f?w=400&h=500&fit=crop',
    bgColor: '#e8e0f2',
    price: 4200,
    badge: null,
    traits: ['不掉毛', '黏人', '小巧'],
    desc: '纯种比熊犬，毛发蓬松如棉花糖。性格活泼可爱，不掉毛，适合过敏体质的主人。',
    gender: '母',
    age: '4个月'
  },
  {
    id: 8,
    name: '琥珀',
    category: 'cat',
    breed: '橘猫',
    emoji: '🐱',
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=500&fit=crop',
    bgColor: '#f2d5a0',
    price: 1800,
    badge: '性价比',
    traits: ['贪吃', '亲人', '皮实'],
    desc: '中华田园橘猫，虎斑纹，圆脸大眼。性格亲人爱蹭蹭，身体棒好养活。',
    gender: '公',
    age: '3个月'
  },
  {
    id: 9,
    name: '芝麻',
    category: 'small',
    breed: '龙猫',
    emoji: '🐹',
    imageUrl: 'https://images.unsplash.com/photo-1425082612540-c398e9a4a6d5?w=400&h=500&fit=crop',
    bgColor: '#d4d4d4',
    price: 1500,
    badge: null,
    traits: ['安静', '好养', '软萌'],
    desc: '标准灰色龙猫，毛发柔软如丝绒。性格温顺，夜行性动物，适合白天上班的饲主。',
    gender: '母',
    age: '4个月'
  }
];

let cart = [];
let currentFilter = 'all';

function renderPets(filter = 'all') {
  const grid = document.getElementById('petsGrid');
  const filtered = filter === 'all' ? petsData : petsData.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((pet, idx) => `
    <div class="pet-card reveal" style="animation-delay: ${idx * 0.08}s" data-id="${pet.id}">
      <div class="pet-card__image" style="background: ${pet.bgColor}">
        <img src="${pet.imageUrl}" alt="${pet.name} - ${pet.breed}" class="pet-card__img" loading="lazy"/>
        ${pet.badge ? `<span class="pet-card__badge">${pet.badge}</span>` : ''}
      </div>
      <div class="pet-card__body">
        <h3 class="pet-card__name">${pet.name}</h3>
        <p class="pet-card__breed">${pet.breed} · ${pet.gender} · ${pet.age}</p>
        <div class="pet-card__traits">
          ${pet.traits.map(t => `<span class="pet-card__trait">${t}</span>`).join('')}
        </div>
        <div class="pet-card__footer">
          <span class="pet-card__price">¥${pet.price.toLocaleString()}</span>
          <button class="pet-card__add" data-id="${pet.id}" aria-label="加入购物车" title="加入购物车">+</button>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.pet-card__add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  document.querySelectorAll('.pet-card').forEach(card => {
    card.addEventListener('click', () => showPetModal(parseInt(card.dataset.id)));
  });

  revealOnScroll();
}

function addToCart(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  const existing = cart.find(item => item.id === petId);
  if (existing) {
    showToast(`${pet.name} 已经在购物车里了哦 🐾`);
    return;
  }

  cart.push({ ...pet, qty: 1 });
  updateCart();
  showToast(`已将 ${pet.name} 加入购物车 ✨`);
}

function removeFromCart(petId) {
  const pet = cart.find(item => item.id === petId);
  cart = cart.filter(item => item.id !== petId);
  updateCart();
  showToast(`已移除 ${pet?.name || '宠物'}`);
}

function updateCart() {
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  countEl.textContent = cart.length;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-panel__empty">购物车是空的，快去带一只毛孩子回家吧 🐱</p>';
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalEl.textContent = `¥${total.toLocaleString()}`;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="cart-item__emoji">${item.emoji}</span>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__breed">${item.breed}</div>
      </div>
      <span class="cart-item__price">¥${item.price.toLocaleString()}</span>
      <button class="cart-item__remove" data-id="${item.id}" title="移除">×</button>
    </div>
  `).join('');

  document.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function showPetModal(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  const modal = document.getElementById('petModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <button class="modal__close" id="modalClose">×</button>
    <img src="${pet.imageUrl}" alt="${pet.name} - ${pet.breed}" class="modal__img"/>
    <h2 class="modal__name">${pet.name}</h2>
    <p class="modal__breed">${pet.breed} · ${pet.gender} · ${pet.age}</p>
    <div class="modal__traits">
      ${pet.traits.map(t => `<span class="modal__trait">${t}</span>`).join('')}
    </div>
    <p class="modal__desc">${pet.desc}</p>
    <div class="modal__price-row">
      <span class="modal__price-label">售价</span>
      <span class="modal__price">¥${pet.price.toLocaleString()}</span>
    </div>
    <div style="margin-top:1.5rem;text-align:center">
      <button class="btn btn--primary" id="modalAddBtn" data-id="${pet.id}">
        加入购物车
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      </button>
    </div>
  `;

  modal.classList.add('modal--open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', closeModal);
  document.getElementById('modalAddBtn').addEventListener('click', () => {
    addToCart(pet.id);
    closeModal();
  });
}

function closeModal() {
  document.getElementById('petModal').classList.remove('modal--open');
  document.body.style.overflow = '';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.querySelector('.toast__msg').textContent = msg;
  toast.classList.add('toast--show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('toast--show'), 2200);
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowH = window.innerHeight;
    if (top < windowH - 80) {
      el.classList.add('reveal--visible');
    }
  });
}

function animateCounters() {
  const counters = document.querySelectorAll('.hero__stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target.toLocaleString();
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

document.addEventListener('DOMContentLoaded', () => {
  renderPets();
  updateCart();
  animateCounters();
  revealOnScroll();

  document.querySelectorAll('.pets__filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pets__filter').forEach(b => b.classList.remove('pets__filter--active'));
      btn.classList.add('pets__filter--active');
      currentFilter = btn.dataset.filter;
      renderPets(currentFilter);
    });
  });

  const cartBtn = document.getElementById('cartBtn');
  const cartPanel = document.getElementById('cartPanel');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');

  function openCart() {
    cartPanel.classList.add('cart-panel--open');
    cartOverlay.classList.add('cart-overlay--open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartPanel.classList.remove('cart-panel--open');
    cartOverlay.classList.remove('cart-overlay--open');
    document.body.style.overflow = '';
  }

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.querySelector('.nav__links');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('nav__menu-btn--open');
    navLinks.classList.toggle('nav__links--open');
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('nav__menu-btn--open');
      navLinks.classList.remove('nav__links--open');
    });
  });

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll('input[required]');
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#e74c3c';
        valid = false;
      } else {
        input.style.borderColor = '#eee';
      }
    });
    if (valid) {
      showToast('咨询已提交，我们会尽快与您联系！📩');
      contactForm.reset();
    } else {
      showToast('请填写必填项');
    }
  });

  document.getElementById('scrollIndicator')?.addEventListener('click', () => {
    document.getElementById('pets').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.cart-panel__checkout')?.addEventListener('click', () => {
    if (cart.length === 0) return;
    showToast('已跳转至咨询页面，我们会尽快联系您确认订单 📞');
    closeCart();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav--scrolled', window.scrollY > 50);

  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;

  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${current}`);
  });

  revealOnScroll();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    document.getElementById('cartPanel').classList.remove('cart-panel--open');
    document.getElementById('cartOverlay').classList.remove('cart-overlay--open');
    document.body.style.overflow = '';
  }
});
