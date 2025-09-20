const blockedUrl = "reddit.com";

document.querySelectorAll("a").forEach(link => {
  try {
    const url = new URL(link.href);

    if (url.hostname.includes(blockedUrl)) {
      link.remove();
    }
  } catch (e) {
    // ignore invalid urls
  }
});
