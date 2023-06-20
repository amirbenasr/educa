
<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
  


  onMount(()=> {
    if(browser)
    {
        var chatbox = document.getElementById('fb-customer-chat');
         chatbox.setAttribute("page_id", "106274557824503");
         chatbox.setAttribute("attribution", "biz_inbox");
    }
  })

  
</script>




<div id="fb-root"></div>
<div id="fb-customer-chat" class="fb-customerchat">
</div>