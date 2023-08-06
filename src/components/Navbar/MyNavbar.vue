<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="logo">Shop</div>
        <nav class="nav">
          <a href="#" class="nav__link nav__link--active">Suits</a>
          <a href="#" class="nav__link">Shirts</a>
          <a href="#" class="nav__link">Glasses</a>
        </nav>
        <div class="header__cart">
          <div class="header__cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <div class="header__cart-quantity">0</div>

        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'MyNavbar'
}
</script>

<style>

  .header
  {
    display: flex;
    align-items: center;
    position: fixed;
    height: 64px;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;

  }

  .nav,
  .header__inner
  {
    display: flex;
    align-items: center;
  }

  .logo
  {
    font-size: 24px;
    font-weight: bold;
  }

  .nav__link
  {
    display: block;
    font-size: 14px;
    margin-left: 10px;
    padding: 10px;
    opacity: 0.7;
  }

  .nav__link:hover
  {
    opacity: 1;
    transition: ease-in-out 0.3s;
  }

  .nav__link--active
  {
    opacity: 1;
  }

  .header__cart
  {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    margin-left: auto;
    background-color: #000000;
    cursor: pointer;
    border-radius: 20px;
  }

  .header__cart-icon
  {
    display: inline-block;
    width: 23px;
    height: 24px;
    color: #ffffff;
  }

  .header__cart-quantity
  {
    color: #ffffff;
  }


</style>
