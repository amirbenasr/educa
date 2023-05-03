<script lang="ts">
  import type { Testimonial } from "$lib/testimonial.type";

  export let testimonial: Testimonial = {
    content: "",
    name: "",
    pic: "",
    profession: "",
  };
</script>

<div class="testimonial__card">
  <svg
    width="30px"
    height="30px"
    class="u-svg-content"
    viewBox="0 0 95.333 95.332"
    x="0px"
    y="0px"
    fill="var(--primary-color-lighter)"
    style="enable-background:new 0 0 95.333 95.332;"
    ><g
      ><g
        ><path
          d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"
        /><path
          d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"
        />
      </g>
    </g></svg
  >
  <div class="content">
    <p>
      {testimonial.content}
    </p>
  </div>
  <div class="testimonial__header">
    <div class="avatar">
      <img src={testimonial.pic} alt="" class="img" />
    </div>
    <div class="info">
      <h5 style:line-height={1}>{testimonial.name}</h5>
      <h6 style:line-height={1.5} style:font-weight={"500"}>
        {testimonial.profession}
      </h6>
    </div>
  </div>
</div>

<style lang="scss">
  .testimonial__card {
    padding: 1rem;
    background: white;
    color: black;
    width: 80%;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .content {
      //   max-height: 3rem;
    }
    .testimonial__header {
      align-self: self-end;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: start;
    }
    .avatar {
      //   border: 1px solid red;
      background: #dcdcdc;
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      text-align: center;
      overflow: hidden;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
