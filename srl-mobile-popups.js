(function () {
  "use strict";

  var NEWSLETTER_KEY = "srl_newsletter_popup_seen";
  var MOBILE_QUERY = "(max-width: 1279px)";
  var page = window.location.pathname.split("/").pop() || "index.html";
  var securityPages = [
    "digitale-freiheit-weltweit.html",
    "sicherheit-afrika.html",
    "sicherheit-asien.html",
    "sicherheit-europa.html",
    "sicherheit-nordamerika-karibik.html",
    "sicherheit-ozeanien-pazifik.html",
    "sicherheit-suedamerika.html"
  ];
  var emigrationPages = [
    "auswandern.html",
    "auswandern-afrika.html",
    "auswandern-asien.html",
    "auswandern-europa.html",
    "auswandern-mittelamerika-karibik.html",
    "auswandern-suedamerika.html",
    "auswandern-suedpazifik-ozeanien.html"
  ];
  var affiliates = [];
  var newsletterOpen = false;
  var newsletterResolved = storageHas(NEWSLETTER_KEY);
  var affiliateOpen = false;
  var activeAffiliate = null;
  var mediaQuery = window.matchMedia(MOBILE_QUERY);

  if (securityPages.indexOf(page) !== -1) {
    affiliates = [
      {
        partner: "staatenlos",
        threshold: 0.30,
        image: "affiliate-staatenlos-mobile.jpg",
        href: "https://www.digistore24.com/redir/461920/tiramcreations/",
        alt: "Staatenlos Auswander-Lexikon"
      },
      {
        partner: "proton-vpn",
        threshold: 0.65,
        image: "affiliate-proton-vpn-mobile.png",
        href: "https://go.getproton.me/SH2x3",
        alt: "Proton VPN"
      }
    ];
  } else if (emigrationPages.indexOf(page) !== -1) {
    affiliates = [
      {
        partner: "discovercars",
        threshold: 0.30,
        image: "affiliate-discovercars-mobile.png",
        href: "https://www.discovercars.com/?a_aid=Smart-Remote-Life",
        alt: "DiscoverCars Mietwagenvergleich"
      },
      {
        partner: "staatenlos",
        threshold: 0.65,
        image: "affiliate-staatenlos-mobile.jpg",
        href: "https://www.digistore24.com/redir/234406/tiramcreations/",
        alt: "Staatenlos Auswander-Lexikon"
      }
    ];
  } else if (page === "tiktok-instagram-setup.html" || page === "homeoffice-gadgets-remote-work.html") {
    affiliates = [
      {
        partner: "temu",
        threshold: 0.30,
        image: "affiliate-temu-mobile.png",
        href: "https://temu.to/k/eofku2xqfx2",
        alt: "Temu Creator Deals"
      },
      {
        partner: "amazon",
        threshold: 0.65,
        image: "affiliate-amazon-mobile.png",
        href: "https://amzn.eu/d/0bA4JIeU",
        alt: "Amazon Creator Must Haves"
      }
    ];
  } else if (page === "remote-jobs-finden.html") {
    affiliates = [
      {
        partner: "remote-rocketship",
        threshold: 0.30,
        image: "affiliate-rocketship-mobile.png",
        href: "https://tolt.link/smartremotelife",
        alt: "Remote Rocketship Remote Jobs"
      },
      {
        partner: "remotive",
        threshold: 0.65,
        image: "affiliate-remotive-mobile.png",
        href: "https://remotive.com/join?via=SmartRemoteLife",
        alt: "Remotive Remote Jobs"
      }
    ];
  }

  function storageHas(key) {
    try {
      return window.sessionStorage.getItem(key) === "1";
    } catch (error) {
      return false;
    }
  }

  function storageSet(key) {
    try {
      window.sessionStorage.setItem(key, "1");
    } catch (error) {
      return;
    }
  }

  function affiliateKey(partner) {
    return "srl_affiliate_popup_seen_" + partner;
  }

  function createNewsletterPopup() {
    var popup = document.createElement("aside");
    popup.className = "newsletter-popup";
    popup.id = "newsletter-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-labelledby", "newsletter-popup-title");
    popup.setAttribute("aria-describedby", "newsletter-popup-text");
    popup.setAttribute("aria-live", "polite");
    popup.hidden = true;
    popup.innerHTML =
      '<button class="newsletter-popup-close" type="button" aria-label="Newsletter-Hinweis schließen">×</button>' +
      '<h2 id="newsletter-popup-title">Nichts Wichtiges verpassen</h2>' +
      '<p id="newsletter-popup-text">Melde dich zu unserem Newsletter an, um nichts Wichtiges zu verpassen. Spannende Themen rund um Sicherheit und Auswandern.</p>' +
      '<a class="newsletter-popup-cta" href="newsletter.html">JETZT ANMELDEN</a>';
    document.body.appendChild(popup);
    return popup;
  }

  function createAffiliatePopup() {
    var popup = document.createElement("aside");
    popup.className = "srl-affiliate-popup";
    popup.id = "srl-affiliate-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-label", "Werbung und Affiliate-Empfehlung");
    popup.hidden = true;
    popup.innerHTML =
      '<span class="srl-affiliate-popup-label">Werbung · Affiliate</span>' +
      '<button class="srl-affiliate-popup-close" type="button" aria-label="Werbung schließen">×</button>' +
      '<a class="srl-affiliate-popup-link" target="_blank" rel="sponsored noopener noreferrer">' +
      '<img class="srl-affiliate-popup-image" loading="lazy" decoding="async" alt="">' +
      "</a>";
    document.body.appendChild(popup);
    return popup;
  }

  var newsletterPopup = createNewsletterPopup();
  var affiliatePopup = affiliates.length ? createAffiliatePopup() : null;

  function showNewsletter() {
    if (newsletterResolved || storageHas(NEWSLETTER_KEY)) {
      newsletterResolved = true;
      checkAffiliates();
      return;
    }
    storageSet(NEWSLETTER_KEY);
    newsletterOpen = true;
    newsletterPopup.hidden = false;
    newsletterPopup.setAttribute("aria-hidden", "false");
    window.requestAnimationFrame(function () {
      newsletterPopup.classList.add("is-visible");
    });
  }

  function closeNewsletter() {
    if (!newsletterOpen) return;
    newsletterPopup.classList.remove("is-visible");
    newsletterPopup.setAttribute("aria-hidden", "true");
    newsletterOpen = false;
    newsletterResolved = true;
    window.setTimeout(function () {
      newsletterPopup.hidden = true;
      checkAffiliates();
    }, 220);
  }

  function scrollDepth() {
    var root = document.documentElement;
    var available = Math.max(1, root.scrollHeight - window.innerHeight);
    return Math.min(1, Math.max(0, window.scrollY / available));
  }

  function nextEligibleAffiliate() {
    var depth = scrollDepth();
    for (var i = 0; i < affiliates.length; i += 1) {
      if (depth >= affiliates[i].threshold && !storageHas(affiliateKey(affiliates[i].partner))) {
        return affiliates[i];
      }
    }
    return null;
  }

  function showAffiliate(config) {
    if (!affiliatePopup || affiliateOpen || !config) return;
    var link = affiliatePopup.querySelector(".srl-affiliate-popup-link");
    var image = affiliatePopup.querySelector(".srl-affiliate-popup-image");
    link.href = config.href;
    link.setAttribute("aria-label", config.alt + " ansehen");
    image.src = config.image;
    image.alt = config.alt;
    storageSet(affiliateKey(config.partner));
    activeAffiliate = config;
    affiliateOpen = true;
    affiliatePopup.hidden = false;
    affiliatePopup.setAttribute("aria-hidden", "false");
    window.requestAnimationFrame(function () {
      affiliatePopup.classList.add("is-visible");
    });
  }

  function closeAffiliate() {
    if (!affiliatePopup || !affiliateOpen) return;
    affiliatePopup.classList.remove("is-visible");
    affiliatePopup.setAttribute("aria-hidden", "true");
    affiliateOpen = false;
    activeAffiliate = null;
    window.setTimeout(function () {
      affiliatePopup.hidden = true;
      checkAffiliates();
    }, 220);
  }

  function checkAffiliates() {
    if (!mediaQuery.matches || !newsletterResolved || newsletterOpen || affiliateOpen) return;
    showAffiliate(nextEligibleAffiliate());
  }

  newsletterPopup.querySelector(".newsletter-popup-close").addEventListener("click", closeNewsletter);
  if (affiliatePopup) {
    affiliatePopup.querySelector(".srl-affiliate-popup-close").addEventListener("click", closeAffiliate);
    window.addEventListener("scroll", checkAffiliates, { passive: true });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (newsletterOpen) closeNewsletter();
    else if (affiliateOpen) closeAffiliate();
  });

  if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", checkAffiliates);
  else if (mediaQuery.addListener) mediaQuery.addListener(checkAffiliates);

  if (newsletterResolved) checkAffiliates();
  else window.setTimeout(showNewsletter, 5000);
})();
