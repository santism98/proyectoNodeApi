async function searchPcComponentes() {
    const scrapped = await Scraped;
    try {
   
      const browser = await puppeteer.launch();
  
  
      const page = await browser.newPage();
  

      await page.goto("https://www.pccomponentes.com");
  
    
      await page.click("#onetrust-accept-btn-handler");
  
      
      await page.type("#search-input", "monitores");
      await page.click(".search-action");
  
    
      await page.waitForNavigation();
  
    
      const monitors = await page.$$eval(".c-product-card__content", (cards) =>
        cards.map((card) => {
          const title = card.querySelector(".c-product-card__title").innerText;
          const price = card.querySelector(".c-product-card__prices span").innerText;
          const img = card.querySelector(".c-product-card__img img").src;
          return { title, price, img };
        })
      );
  
      console.log(monitors);
  
     
      await browser.close();
    } catch (error) {
      console.log(error);
    }
  }
  
  module.exports = {
    searchPcComponentes,
  };
  