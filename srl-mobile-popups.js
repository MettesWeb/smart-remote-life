(function(){
  "use strict";

  var NEWSLETTER_KEY="srl_newsletter_popup_seen";
  var page=window.location.pathname.split("/").pop()||"index.html";
  var countryPages=[
    "auswandern-europa.html",
    "auswandern-montenegro.html",
    "auswandern-albanien.html",
    "auswandern-portugal.html",
    "auswandern-kroatien.html",
    "auswandern-bulgarien.html",
    "auswandern-nordmazedonien.html",
    "auswandern-rumaenien.html",
    "auswandern-griechenland.html"
  ];
  if(countryPages.indexOf(page)===-1)return;

  var newsletterOpen=false;
  var affiliateOpen=false;
  var affiliateClosed=false;

  function storageHas(key){
    try{return window.sessionStorage.getItem(key)==="1"}catch(error){return false}
  }
  function storageSet(key){
    try{window.sessionStorage.setItem(key,"1")}catch(error){return}
  }
  function createNewsletterPopup(){
    var popup=document.createElement("aside");
    popup.className="newsletter-popup";
    popup.setAttribute("role","dialog");
    popup.setAttribute("aria-labelledby","newsletter-popup-title");
    popup.setAttribute("aria-describedby","newsletter-popup-text");
    popup.hidden=true;
    popup.innerHTML='<button class="newsletter-popup-close" type="button" aria-label="Newsletter-Hinweis schließen">×</button><h2 id="newsletter-popup-title">Nichts Wichtiges verpassen</h2><p id="newsletter-popup-text">Melde dich zum Smart-Remote-Life-Newsletter an und erhalte neue Länderchecks und praktische Auswanderungs-Tipps.</p><a class="newsletter-popup-cta" href="newsletter.html">JETZT ANMELDEN</a>';
    document.body.appendChild(popup);
    return popup;
  }
  function createAffiliatePopup(){
    var popup=document.createElement("aside");
    popup.className="srl-affiliate-popup";
    popup.setAttribute("role","dialog");
    popup.setAttribute("aria-label","Werbung: Simsima eSIM");
    popup.hidden=true;
    popup.innerHTML='<span class="srl-affiliate-popup-label">Werbung</span><button class="srl-affiliate-popup-close" type="button" aria-label="Werbung schließen">×</button><a class="srl-affiliate-popup-link" href="https://www.awin1.com/cread.php?s=4904574&v=130956&q=616068&r=3050765" target="_blank" rel="sponsored noopener noreferrer" aria-label="Simsima eSIM-Angebot ansehen"><img class="srl-affiliate-popup-image" src="https://www.awin1.com/cshow.php?s=4904574&v=130956&q=616068&r=3050765" loading="lazy" decoding="async" alt="Simsima eSIM-Werbung"></a>';
    document.body.appendChild(popup);
    return popup;
  }
  var newsletterPopup=createNewsletterPopup();
  var affiliatePopup=createAffiliatePopup();

  function reveal(popup){
    popup.hidden=false;
    popup.setAttribute("aria-hidden","false");
    window.requestAnimationFrame(function(){popup.classList.add("is-visible")});
  }
  function hide(popup,done){
    popup.classList.remove("is-visible");
    popup.setAttribute("aria-hidden","true");
    window.setTimeout(function(){popup.hidden=true;if(done)done()},220);
  }
  function showAffiliate(){
    if(affiliateOpen||affiliateClosed||newsletterOpen)return;
    affiliateOpen=true;
    reveal(affiliatePopup);
  }
  function closeAffiliate(){
    if(!affiliateOpen)return;
    affiliateOpen=false;
    affiliateClosed=true;
    hide(affiliatePopup);
  }
  function showNewsletter(){
    if(storageHas(NEWSLETTER_KEY)){
      window.setTimeout(showAffiliate,2500);
      return;
    }
    storageSet(NEWSLETTER_KEY);
    newsletterOpen=true;
    reveal(newsletterPopup);
  }
  function closeNewsletter(){
    if(!newsletterOpen)return;
    newsletterOpen=false;
    hide(newsletterPopup,function(){window.setTimeout(showAffiliate,2200)});
  }

  newsletterPopup.querySelector(".newsletter-popup-close").addEventListener("click",closeNewsletter);
  affiliatePopup.querySelector(".srl-affiliate-popup-close").addEventListener("click",closeAffiliate);
  document.addEventListener("keydown",function(event){
    if(event.key!=="Escape")return;
    if(newsletterOpen)closeNewsletter();
    else if(affiliateOpen)closeAffiliate();
  });

  window.setTimeout(showNewsletter,5000);
  window.setTimeout(showAffiliate,11000);
})();
