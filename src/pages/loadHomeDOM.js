const loadHomeDOM = () => {
    const createDivElement = (identifier,identifierName) => {
        const div = document.createElement('div');
        if(identifier==='class'){
            div.classList.add(identifierName);
            return div;
        }else if(identifier==='id'){
            div.setAttribute(identifier,identifierName);
            return div;
        }
    }
    const createImageElement = (source,alternativeText) => {
        const img = document.createElement('img');
        img.setAttribute('src',source);
        img.setAttribute('alt',alternativeText);
        return img;
    }

    const createLogoElement = () => {
        const logo = createDivElement('class','logo');
        const restaurantLogo = createImageElement('./restaurant-logo.png','Restaurant Logo');
        logo.appendChild(restaurantLogo)
        return logo;
    }

    const createListElement = () => {
        const list = createDivElement('class','list');
        const home = createDivElement('id','home');
        home.textContent = 'Home';
        const menu = createDivElement('id','menu');
        menu.textContent = 'Menu';
        const contact = createDivElement('id','contact');
        contact.textContent = 'Contact';
        list.appendChild(home);
        list.appendChild(menu);
        list.appendChild(contact);
        return list;
    }

    const createSocialMediaElement = () => {
        const socialMediaDiv = createDivElement('class','social-media');
        const facebookDiv = createDivElement('id','facebook');
        const facebookLogo = createImageElement('./social-media-icons/facebook.png','Facebook');
        facebookDiv.appendChild(facebookLogo);
        const instagramDiv = createDivElement('id','instagram');
        const instagramLogo = createImageElement('./social-media-icons/instagram.png','Instagram');
        instagramDiv.appendChild(instagramLogo);
        const tiktokDiv = createDivElement('id','tiktok');
        const tiktokLogo = createImageElement('./social-media-icons/tiktok.png','Tiktok');
        tiktokDiv.appendChild(tiktokLogo);
        const youtubeDiv = createDivElement('id','youtube');
        const youtubeLogo = createImageElement('./social-media-icons/youtube.png','Youtube');
        youtubeDiv.appendChild(youtubeLogo);
        socialMediaDiv.appendChild(facebookDiv);
        socialMediaDiv.appendChild(instagramDiv);
        socialMediaDiv.appendChild(tiktokDiv);
        socialMediaDiv.appendChild(youtubeDiv);
        return socialMediaDiv;
    }

    const createNavBarElement = () => {
        const navBar = createDivElement('class','nav-bar');
        const logo = createLogoElement();
        const list = createListElement();
        const socialMedia = createSocialMediaElement();
        navBar.appendChild(logo);
        navBar.appendChild(list);
        navBar.appendChild(socialMedia);
        return navBar;
    }

    const createSpanHighlightElement = () => {
        const spanContainer = document.createElement('span');
        spanContainer.classList.add('highlight-container');
        const regularSpan = document.createElement('span');
        regularSpan.classList.add('highlight');
        regularSpan.textContent = 'One ';
        spanContainer.appendChild(regularSpan);
        return spanContainer;
    }

    const createTitleElement = () => {
        const title = createDivElement('class','title');
        const text = document.createElement('h1');
        const spanContainer = createSpanHighlightElement();
        text.appendChild(document.createTextNode('The Number '));
        text.appendChild(spanContainer);
        text.appendChild(document.createTextNode('Pasta Restaurant In The World'));
        title.appendChild(text);
        return title;
    }

    const createSubTitleElement = () => {
        const subTitle = createDivElement('class','subtitle');
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Get a unique culinary experience. Reserve a table to satisfy your hunger and enjoy a gourmet dish prepared by one of the best chefs in the world.';
        subTitle.appendChild(paragraph);
        return subTitle;
    }

    const createAwardSection = () => {
        const award = createDivElement('class','award');
        const awardText = createDivElement('class', 'award-text');
        const awardTitle = createDivElement('class', 'award-title');

        const titleText = document.createElement('h1');
        titleText.textContent = 'Awards winner';
        awardTitle.appendChild(titleText);

        const awardParagraph = document.createElement('p');
        awardParagraph.textContent = "Best pasta restaurant in the world for 107th consecutive years. Best lasagna restaurant for second consecutive year, even we don't have lasagna!";
        awardText.appendChild(awardTitle);
        awardText.appendChild(awardParagraph);

        const awardImageDiv = createDivElement('class', 'award-image');
        const awardImage = createImageElement('./award.png','Restaurant Logo');
        awardImageDiv.appendChild(awardImage);

        award.appendChild(awardText);
        award.appendChild(awardImageDiv);

        return award;
    }

    const createTextSection = () => {
        const textContainer = createDivElement('class','text-container');

        const title = createTitleElement();
        const subTitle = createSubTitleElement();
        const awardSection = createAwardSection();

        textContainer.appendChild(title);
        textContainer.appendChild(subTitle);
        textContainer.appendChild(awardSection);

        return textContainer;
    }

    const createBannerSection = () => {
        const bannerContainer = createDivElement('class','banner-container');
        const bannerImage = createImageElement('./pastas.png','Pasta Banner');
        bannerContainer.appendChild(bannerImage);
        return bannerContainer;
    }

    const createHomeContent = () => {
        const contentContainer = createDivElement('class','content-container');
        const textContainer = createTextSection();
        const bannerContainer = createBannerSection();

        contentContainer.appendChild(textContainer);
        contentContainer.appendChild(bannerContainer);

        return contentContainer;
    }

    const content = document.querySelector('#content');
    const navBar = createNavBarElement();
    const contentContainer = createHomeContent();

    content.appendChild(navBar);
    content.appendChild(contentContainer);
    
}

export {loadHomeDOM};