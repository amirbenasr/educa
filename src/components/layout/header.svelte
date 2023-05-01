<script>
  import logo from "$lib/logos/logo.png";
  import hamburger from "$lib/svgs/hamburger.svg";
  import close from "$lib/svgs/close.svg";
  let mobileMenu;
  let hamburgerElement;
  let closeElement;
  function showMobileMenu() {
    mobileMenu.classList.toggle("hide");
    hamburgerElement.style.display = "none";
    closeElement.style.display = "inline-block";
  }
  function closeMobileMenu() {
    mobileMenu.classList.toggle("hide");
    hamburgerElement.style.display = "inline-block";
    closeElement.style.display = "none";
  }
</script>

<nav class="nav">
  <div class="logo">
    <img src={logo} alt="educa-us logo" srcset="" />
  </div>
  <div class="burger-area">
    <button
      id="burger"
      type="button"
      on:click={() => showMobileMenu()}
      bind:this={hamburgerElement}
    >
      <img src={hamburger} class="hamburger" alt="burger" srcset="" />
    </button>
    <button
      id="close"
      type="button"
      style="display: none;"
      on:click={() => closeMobileMenu()}
      bind:this={closeElement}
    >
      <img src={close} class="hamburger" alt="burger" srcset="" />
    </button>
  </div>
  <ul>
    <li><a href="http://">home</a></li>
    <li><a href="http://">about</a></li>
    <li><a href="http://">articles</a></li>
    <li class="action"><a href="http://">apply</a></li>
  </ul>
</nav>
<div class="mobile-menu hide" bind:this={mobileMenu}>
  <li class="action"><a href="http://">apply</a></li>
  <ul>
    <li><a href="http://">home</a></li>
    <li><a href="http://">about</a></li>
    <li><a href="http://">articles</a></li>
  </ul>
</div>

<style lang="scss">
  button {
    cursor: pointer;
    vertical-align: top;
    line-height: 0;
    font-size: 1.1rem;
    height: 1.7rem;
    padding: 0;
    background: transparent;
    border: none;
    img {
      width: 25px;
      height: 25px;
    }
  }
  .burger-area {
    display: none !important;
  }
  @media (max-width: 800px) {
    nav {
      ul {
        display: none !important;
      }
    }
    .burger-area {
      display: inline-block !important;
    }
  }
  a {
    padding: 1rem;
    text-decoration: none;
    color: white;
  }
  li {
    list-style: none !important;
    text-decoration: none !important;
  }
  .hide {
    transform: translateX(-100%);
  }
  .mobile-menu {
    min-height: 100vh;
    z-index: 2;
    transition: all 300ms;
    text-transform: uppercase;
    text-align: center;
    color: white;
    width: 100%;
    background-color: var(--primary-color);
    position: absolute;
    top: 60px;
    .action {
      width: 100%;
      background-color: var(--accent-color);
    }
    li {
      padding: 1rem;
      width: 50%;
      float: left;
      border-right: 0.5px var(--primary-color-lighter) solid;
      border-bottom: 0.5px var(--primary-color-lighter) solid;
    }
  }
  nav.nav {
    position: relative !important;

    height: 60px;
    font-weight: 500;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--primary-color);

    .logo {
      height: 50px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    ul {
      display: flex;
      gap: 1rem;
    }

    li.action {
      background-color: var(--accent-color);
      border-radius: 30px;
    }
  }
</style>
