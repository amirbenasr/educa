<script>
  import whitelogo from "$lib/logos/whitelogo.png";
  import facebook from "$lib/svgs/facebook.svg";
</script>

<footer>
  <div class="box logo-address">
    <img src={whitelogo} alt="educa-logo" srcset="" class="logo" />
    <div class="address">
      <a
        href="https://www.google.com/maps/dir/36.8665383,10.22637/36.8482342,10.2703983/@36.852128,10.2056903,13z/"
      >
        <p>Tunis, Tunisie</p>

        <p>Lac 2, Immeuble Saphir</p>
        <p>Local B.3.2 Rue De La Bourse</p>
      </a>
    </div>
  </div>

  <div class="box contact">
    <h4>Contact</h4>

    <h5><a href="mailto:educaus@gmail.com">educaus@gmail.com</a></h5>
    <h5><a href="tel:+21655961771">+216.55.961.771</a></h5>
  </div>
  <div class="box contact">
    <h4>About us</h4>
    <h5>Educa us</h5>
    <h5>Travel & Education</h5>
  </div>
  <div class="box contact">
    <h4>Follow Us</h4>
    <ul>
      <a target="_blank" href="https://www.facebook.com/EducaUS.tn/"
        ><li class="rc fb" /></a
      >
      <a target="_blank" href="https://www.instagram.com/educa_us/"
        ><li class="rc ig" /></a
      >
      <a target="_blank" href="https://www.linkedin.com/in/educa-us-5883521b3/"
        ><li class="rc li" /></a
      >
      <a target="_blank" href="#"><li class="rc tw" /></a>
    </ul>
  </div>
</footer>

<style lang="scss">
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 1rem;
    * {
      background-repeat: no-repeat !important;
      color: white !important;
    }
    svg {
      color: white;
    }
  }

  .rc {
    width: 1.5rem;
    height: 1.5rem;
    background: white;
  }
  .fb {
    background: url("$lib/svgs/facebook.svg");
  }
  .tw {
    background: url("$lib/svgs/twitter.svg");
  }
  .ig {
    background: url("$lib/svgs/instagram.svg");
  }
  .li {
    background: url("$lib/svgs/linkedin.svg");
  }

  @media screen and (max-width: 750px) {
    footer {
      display: grid !important;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      align-items: center;
      justify-content: center;
    }
  }
  footer {
    border-top: 0.5px solid hsl(200, 100, 90%);
    padding: 2rem;
    text-align: left;
    // background: black;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-around;
    .contact {
      a {
        color: white;
      }
    }
  }
  .logo-address {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    a {
      color: white;
      font-weight: 500;
    }
    p {
      line-height: 1.5;
    }
    .address {
      margin-top: 0.8rem;
    }
  }
  .logo {
    width: 80px;
  }
</style>
