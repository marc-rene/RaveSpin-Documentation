---
hide:
  - toc
---

<video class="rave-spin-bg-video" src="assets/Website_SneakPeak.mp4" muted loop playsinline preload="auto" aria-hidden="true"></video>

<div class="rave-spin-hero">
  <span class="line line-rave">RAVE</span>
  <span class="line line-spin">SPIN<span class="xr">XR</span></span>
</div>

<p class="rave-spin-subtitle">With the power of <i><b>Extended Reality (XR)</i></b> <br>Become a DJ: <b>ANYWHERE</b>, <b>ANYTIME</b>, and mix <b>on-the-go!</b></p>
<p class="rave-spin-subtitle">Import your own songs and record your sessions in .WAV format</p>
<p class="rave-spin-subtitle">Based off the famous <a class="plain-link" href="https://www.pioneerdj.com/en/product/dj-controllers/ddj-flx4/">Pioneer DDJ-FLX4</a></p>

<p class="rave-spin-trailer-link">
  <a href="https://youtu.be/AOChBT_xzik" target="_blank" rel="noopener">
    <img src="assets/youtube.png" alt="" class="rave-spin-youtube-icon" />
    <span>Watch the RaveSpin XR Trailer here!</span>
  </a>
</p>

<script>
(
  function () 
  {
    const v = document.querySelector('.rave-spin-bg-video');
    if (!v) 
      return;
    
    v.muted = true;
    const THRESHOLD = 10;
    let started = false;
    const tryPlay = () => 
    {
      if (started) 
        return;
      
      const buffered = v.buffered.length ? v.buffered.end(v.buffered.length - 1) : 0;
    
      if (buffered >= THRESHOLD || (v.duration && buffered >= v.duration)) 
      {
        started = true;
        v.play().catch(() => {});
      }
    };
    v.addEventListener('progress', tryPlay);
    v.addEventListener('canplaythrough', () => { started = true; v.play().catch(() => {}); });
    v.load();
})();
</script>
