// Mobile menu toggle
document.querySelector('.menu')?.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Keep UTM params when sending folks to Shopify
(function preserveUTM(){
  const qs = window.location.search;
  if(!qs) return;
  document.querySelectorAll('[data-outbound]').forEach(a => {
    try{
      const url = new URL(a.href);
      if(!url.search) url.search = qs;
    }catch(e){}
  });
})();
