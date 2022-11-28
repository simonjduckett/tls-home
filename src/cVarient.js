//window.onload = (event) => {
console.log('page is fully loaded!');

function run() {
    let experimentContent = document.createElement('div')
    experimentContent.classList.add('rwd-bs')

    experimentContent.appendChild(createHero())
    // experimentContent.appendChild(createTopCards())
    experimentContent.appendChild(createCategories())
    experimentContent.appendChild(createWorksSection())
    experimentContent.appendChild(createWhoSection())
    experimentContent.appendChild(createFaqsSection())
    experimentContent.appendChild(createReviewsSection())
    experimentContent.appendChild(createLogosSection())
    experimentContent.appendChild(createTopFooter())


    // experimentContent.appendChild(buildNesting([
    //     { el: 'div', classname: 'container' },
    //     { el: 'div', classname: 'row' },
    //     { el: 'div', classname: 'col-12' },
    //     { el: 'div', classname: 'col-12', sib: true }
    // ]))

    let header = document.querySelector('header')
    header.after(experimentContent)

    removeExsiting()

    $('.accordion').click(function () {
        $(this).toggleClass('accordion--open')
        $('.accordion__txt', this).toggleClass('showFaq')
    })

    setTimeout(() => {
        console.log('trying glide')
        new Glide('.glide', {
            type: 'carousel',
            autoplay: 8000,
            perView: 4,
            gap: 25,
            breakpoints: {
                768: {
                    perView: 1
                },
                992: {
                    perView: 3
                }
            }
        }).mount()
    }, 1000);
}

function createHero() {
    let hero = document.createElement('div')
    hero.id = 'hero'
    let c = createContainer()
    c.classList.add('heroContainer')

    c.innerHTML += '<div><h1>The UK’s first legal comparison site</h1><p>Save time and money finding a legal expert</p><div class="trusted"><i class="fa-solid fa-circle-check"></i><p>We’ve helped over 50,000 people find a law firm that was right for them</p></div></div>'

    hero.appendChild(c)
    return hero
}

function createTopCards() {
    let topCards = document.createElement('div')
    topCards.id = 'topCards'
    topCards.classList.add('py-3')
    let c = createContainer()
    let h = document.createElement('h2')
    h.classList.add('mb-3')
    h.innerHTML = 'Compare costs and get quotes for popular legal services'
    c.appendChild(h)
    let row = document.createElement('div')
    row.classList.add('row')

    let o = [
        {
            title: 'draft an individual will',
            img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Wills_Probate_2.jpg',
            content: 'Have your will written by our specialist legal experts.',
            link: '/personal/wills-probate/wills/draft-individual-will/compare'
        },
        {
            title: 'power of attorney for an individual',
            img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/TLS%20Homepage/MicrosoftTeams-image-5.png',
            content: 'If you need to make a power of attorney, we can help.',
            link: '/personal/wills-probate/protecting-others/power-of-attorney-for-an-individual/compare'
        },
        {
            title: 'equity transfer',
            img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Property_1.jpg',
            content: 'We have specialist conveyancing firms who can transfer equity in your home.',
            link: '/personal/property/equity-matters/equity-transfer/compare/'
        },
        {
            title: 'start divorce proceedings',
            img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Divorce_1.jpg',
            content: 'Our specialist family law firms will guide you through the divorce process.',
            link: '/personal/family/break-up-advice/starting-divorce-proceedings/compare'
        }
    ]

    o.forEach(item => {
        let col = document.createElement('div')
        col.classList.add('col-12', 'col-md-6', 'col-lg-3')
        let c = new card(item)
        col.appendChild(c)
        row.appendChild(col)
    })

    c.appendChild(row)

    topCards.appendChild(c)

    function card(data) {
        this.title = data.title
        this.img = data.img
        this.content = data.content
        this.link = data.link

        //make link
        let card = document.createElement('a')
        card.href = this.link
        card.classList.add('top-card')

        card.innerHTML = `<h3>${this.title}</h3><img src='${this.img}' /><p>${this.content}</p><a class='btn btn--orange' href='${this.link}'>Get quotes</a>`

        return card
    }

    return topCards
}

function createCategories() {
    let cats = document.createElement('section')
    cats.id = 'categories'
    let c = createContainer()
    cats.appendChild(c)

    let sectionTitle = document.createElement('h2')
    sectionTitle.innerHTML = 'Compare and get legal quotes for many types of legal services'
    c.appendChild(sectionTitle)
    let p = document.createElement('p')
    p.innerHTML = 'We cover a wide variety of legal services, ranging from Property to Personal Injury, and Business Employment to Business Disputes.'
    c.appendChild(p)

    let row = document.createElement('div')
    row.classList.add('row')
    c.appendChild(row)

    let o = [
        {
            icon: '<i class="fa-solid fa-book"></i>',
            name: 'Wills & Probate',
            content: 'Write a will, contest a will, power of attorney, and more … ',
            link: '/wills-probate'
        },
        {
            icon: '<i class="fa-solid fa-house-user"></i>',
            name: 'Property',
            content: 'Equity release, transferring equity, leases and more … ',
            link: 'https://www.thelawsuperstore.co.uk/property/equity-matters'
        },
        {
            icon: '<i class="fa-solid fa-house"></i>',
            name: 'Conveyancing',
            content: 'Buying a property, selling a property, re-mortgaging a property, and more … ',
            link: 'https://www.thelawsuperstore.co.uk/property/property-ownership'
        },
        {
            icon: '<i class="fa-solid fa-people-roof"></i>',
            name: 'Family',
            content: 'Divorce, child arrangements, financial settlements, and more … ',
            link: 'https://www.thelawsuperstore.co.uk/family'
        },
        {
            icon: '<i class="fa-solid fa-briefcase"></i>',
            name: 'Business Property',
            content: 'Buying commercial property, selling commercial property, leases, and more … ',
            link: 'https://www.thelawsuperstore.co.uk/business/business-property'
        },
        {
            icon: '<i class="fa-solid fa-person-harassing"></i>',
            name: 'Personal Disputes',
            content: 'Neighbour disputes, money disputes, consumer disputes, and more … ',
            link: 'https://www.thelawsuperstore.co.uk/disputes'
        },
        {
            icon: '<i class="fa-solid fa-car"></i>',
            name: 'Motor Offences',
            content: 'Dangerous driving charges, careless driving charges, speeding offences, and more … ',
            link: 'https://www.thelawsuperstore.co.uk/motor-offences'
        },
        {
            icon: '<i class="fa-solid fa-user-nurse"></i>',
            name: 'Employment',
            content: 'Unfair dismissal, discrimination claims, disciplinary hearings, and more … ',
            link: 'https://www.thelawsuperstore.co.uk/employment'
        }
    ]

    o.forEach(cat => {
        let x = new category(cat)
        row.appendChild(x)
    })

    function category(data = {}) {
        this.icon = data.icon
        this.name = data.name
        this.content = data.content
        this.link = data.link

        //need a row and each a col
        let cat = document.createElement('div')
        cat.classList.add('col-12', 'col-md-6')

        let link = document.createElement('a')
        link.classList.add('tls-cat-link')
        link.href = this.link
        link.innerHTML = `<div>${this.icon}</div><div><strong>${this.name}</strong><p>${this.content}</p></div><div><i class="fa-solid fa-arrow-right"></i></div>`

        cat.appendChild(link)

        return cat
    }
    return cats
}

function createWorksSection() {
    let works = document.createElement('section')
    works.id = 'works'
    let c = createContainer()
    works.appendChild(c)

    let row = document.createElement('div')
    row.classList.add('row')
    let c1 = document.createElement('div')
    c1.classList.add('col-12', 'col-md-6')

    //add everything to c1 and then append to row
    let h = document.createElement('h2')
    h.innerHTML = 'Compare lawyers in three simple steps'
    c1.appendChild(h)

    c1.appendChild(new point({ icon: '<i class="fa-solid fa-1"></i>', text: 'Pick the legal service you need.' }))
    c1.appendChild(new point({ icon: '<i class="fa-solid fa-2"></i>', text: 'Fill in a few details on our quick quote form.' }))
    c1.appendChild(new point({ icon: '<i class="fa-solid fa-3"></i>', text: 'Get instant quotes to your inbox.' }))

    function point(data) {
        this.icon = data.icon
        this.text = data.text

        let d = document.createElement('div')
        d.classList.add('works-point')
        d.innerHTML = `${this.icon} <p>${this.text}</p>`
        return d
    }


    row.appendChild(c1)

    let c2 = document.createElement('div')
    c2.classList.add('col-12', 'col-md-6')

    //add everything to c2 and then append to row
    c2.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/MC-JKSOu0Ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    row.appendChild(c2)
    c.appendChild(row)

    return works
}
function createWhoSection() {
    let who = document.createElement('section')
    who.id = 'who'
    let c = createContainer()
    who.appendChild(c)

    let row = document.createElement('div')
    row.classList.add('row')
    let c1 = document.createElement('div')
    c1.classList.add('col-12', 'col-md-6')

    //add everything to c1 and then append to row
    let h = document.createElement('h2')
    h.innerHTML = 'Who is The Law Superstore?'
    c1.appendChild(h)

    let leftPara = document.createElement('p')
    leftPara.innerHTML = "The Law Superstore is the UK’s first legal comparison site, designed to save you money when looking for a lawyer. Get instant quotes, compare prices, locations and features and choose the law firm that’s right for you. And we’re completely free to use.<br /><br />With over 130 legal services on offer, from divorce to personal injury claims, we can help you get a great deal on your legal fees. You compare everything else, why not lawyers?"
    c1.appendChild(leftPara)

    let checkList = document.createElement('ul')

    checkList.appendChild(new checkPoint('Save money by comparing costs'))
    checkList.appendChild(new checkPoint('We only work with quality, experienced and regulated legal firms '))
    checkList.appendChild(new checkPoint('Competitive prices across lots of locations'))
    //checkList.appendChild(new checkPoint('Hear from your chosen provider within 4 hours'))
    //checkList.appendChild(new checkPoint('Only pay when you\'ve spoken and agree terms'))
    //checkList.appendChild(new checkPoint('Prices available for initial advice only and full service'))

    c1.appendChild(checkList)

    function checkPoint(text) {
        this.text = text
        let x = document.createElement('li')
        x.innerHTML = `<div>${this.text}</div>`
        return x
    }

    row.appendChild(c1)

    let c2 = document.createElement('div')
    c2.classList.add('col-12', 'col-md-6')

    c2.appendChild(new boldPoint({ icon: '<i class="fa-solid fa-certificate"></i>', title: 'Find expert lawyers', text: 'All our legal service providers are regulated, accredited, and strictly vetted.' }))

    c2.appendChild(new boldPoint({ icon: '<i class="fa-solid fa-minimize"></i>', title: 'Get instant quotes', text: 'Start comparing lawyers in 30 seconds.' }))

    c2.appendChild(new boldPoint({ icon: '<i class="fa-solid fa-sterling-sign"></i>', title: 'Save money', text: 'Choose a law firm that meets your needs.' }))

    //add everything to c2 and then append to row
    function boldPoint(data) {
        this.icon = data.icon
        this.title = data.title
        this.text = data.text

        let x = document.createElement('div')
        x.classList.add('bold-point')
        x.innerHTML = `<div>${this.icon}</div> <div><h3>${this.title}</h3><p>${this.text}</p></div>`
        return x
    }

    row.appendChild(c2)
    c.appendChild(row)

    return who
}

function createFaqsSection() {
    let faqs = document.createElement('section')
    faqs.id = 'faqs'

    let c = createContainer()
    let h = document.createElement('h2')
    h.innerHTML = 'Frequently asked questions'
    c.appendChild(h)
    let p = document.createElement('p')
    p.innerHTML = 'Whilst you might have used a comparison site for lots of other things, you might not have used one for legal services. Here are the answers to our top questions.'
    c.appendChild(p)

    c.innerHTML += `<div class="faq-search-results">
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">Are you a law firm?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We’re not a law firm, we’re a comparison site. We help you find lawyers in your area, for the service you need. We share a lot of information to help you make your decision and find experts, but we’re not lawyers ourselves.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">What happens when I get a quote?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>When you submit your details, you’ll receive an email with the details of up to four legal experts who cover your area and the service you need. At the same time, your details will be shared with those firms so they can offer you more details. We will only ever share your details with those firms you’ve received quotes for.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">Are my details secure?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We know how important data security and privacy is, especially around legal matters. We will only ever share the details of what you require and your contact information with the firms who quoted for you. This will never be more than four firms.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">What do The Law Superstore charge?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We are a free service to help people find legal services. We know that for many people finding a lawyer is stressful. And if you don’t really know what service you need, it’s hard to know what to ask for, and how much it’s going to cost. Our business model is based on a small fee being paid by the legal firms to appear on our site. They all pay the same, and no firm is given preferential treatment or priority. We recommend firms to you based on their location and service offerings. Nothing else.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">How do I know the lawyers are any good?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We only work with experts who can give you a great experience. We thoroughly vet our partners, ensuring they’re fully regulated by trustworthy bodies including SRA, BSB, CLC, IPW, IoP or CILEX. We check accreditations, review ratings, business finances, online presence, and credit checks. We only partner with firms who have a redress scheme, so if you do need to complain for any reason, there’s always an option available to you. We also do ongoing checks and ask our users for reviews to ensure we’re only working with the very best.</p>
      </div>
   </div>
</div>`

    faqs.appendChild(c)
    return faqs
}

function createReviewsSection() {
    let slides = document.getElementsByClassName('testimonial__item')
    let reviewsSection = document.createElement('section')
    reviewsSection.id = 'tls-reviews'
    let con = createContainer()

    let heading = document.createElement('h2')
    heading.classList.add('mb-2')
    heading.innerHTML = 'What our clients say'

    con.appendChild(heading)

    let glide = document.createElement('div')
    glide.classList.add('glide')
    let glideTrack = document.createElement('div')
    glideTrack.classList.add('glide__track')
    glideTrack.setAttribute('data-glide-el', 'track')
    let glideUl = document.createElement('ul')
    glideUl.classList.add('glide__slides')

    glideTrack.appendChild(glideUl)
    glide.appendChild(glideTrack)

    for (let i = 0; i < slides.length; i++) {
        let x = document.createElement('li')
        x.innerHTML = slides[i].innerHTML
        x.classList.add('glide__slide')
        let z = x.querySelector('.testimonial__blockquote')
        let y = document.createElement('div')
        let j = 0
        while (j < 5) {
            y.innerHTML += '<i class="fa-solid fa-star"></i>'
            j++
        }
        z.appendChild(y)
        glideUl.appendChild(x)
    }

    // let bullets = document.createElement('div')
    // bullets.classList.add('glide__bullets')
    // bullets.setAttribute('data-glide-el', 'controls[nav]')
    // for (let i = 0; i < slides.length; i++) {
    //     let button = document.createElement('button')
    //     button.classList.add('glide__bullet')
    //     button.setAttribute('data-glide-dir', `=${i}`)
    //     bullets.appendChild(button)
    // }


    // glide.appendChild(bullets)
    con.appendChild(glide)
    reviewsSection.appendChild(con)

    return reviewsSection
}

function createLogosSection() {
    let logos = document.createElement('section')
    logos.id = 'creditations'

    let c = createContainer()
    logos.appendChild(c)

    let heading = document.createElement('h2')
    heading.innerHTML = 'Legal professionals you can trust'
    let subHeading = document.createElement('p')
    subHeading.innerHTML = 'All our legal professionals are accredited or regulated.'

    c.appendChild(heading)
    c.appendChild(subHeading)

    let logosDiv = document.createElement('div')
    logosDiv.id = 'logosDiv'

    let images = [
        { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/cilex-cpq-logo.png', link: 'https://www.cilex.org.uk/' },
        { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/sra.png', link: 'https://www.sra.org.uk/' },
        { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/logo.png', link: 'https://www.clc-uk.org/' },
        { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/IPW_logo.svg', link: 'https://www.ipw.org.uk/' }
    ]
    images.forEach(image => {
        //let a = document.createElement('a')
        //a.href = image.link
        let x = document.createElement('div')
        let i = document.createElement('img')
        i.src = image.img
        x.appendChild(i)
        //a.appendChild(x)
        logosDiv.appendChild(x)
    })
    c.appendChild(logosDiv)

    return logos
}

function createTopFooter() {
    let topFooter = document.createElement('section')
    topFooter.id = 'topFooter'

    let c = createContainer()
    topFooter.appendChild(c)

    let h = document.createElement('h2')
    h.innerHTML = 'Can’t find what you’re looking for?'
    let p = document.createElement('p')
    p.innerHTML = 'We provide quotes for over 130 legal services. But we’ve also got lots of helpful guides and advice for whatever your legal needs are.'

    c.appendChild(h)
    c.appendChild(p)

    c.appendChild(new createRow({
        title: 'Disputes',
        col1: [
            '<a href="/disputes/money-disputes/bankruptcy-proceedings">Bankruptcy Proceedings</a>',
            '<a href="/disputes/general-disputes/consumer-disputes">Consumer Disputes</a>'
        ],
        col2: [
            '<a href="/disputes/money-disputes/money-disputes">Money Disputes</a>',
            '<a href="/disputes/general-disputes/neighbour-disputes">Neighbour Disputes</a>'
        ],
        col3: [
            '<a href="/disputes/general-disputes/other-disputes">Other Disputes</a>'
        ],
    }))
    c.appendChild(new createRow({
        title: 'Employment',
        col1: [
            '<a href="/employment/employment-disputes/disciplinary-hearings">Disciplinary Hearings</a>',
            '<a href="/employment/employment-disputes/discrimination-claim">Discrimination Claim</a>',
            '<a href="/employment/employment-disputes/equal-pay-claim">Equal Pay Claim</a>'
        ],
        col2: [
            '<a href="/employment/employment-disputes/redundancy-claim">Redundancy Claim</a>',
            '<a href="/employment/employment-disputes/settlement-agreements">Settlement Agreements</a>',
            '<a href="/employment/employment-disputes/tupe">TUPE</a>'
        ],
        col3: [
            '<a href="/employment/employment-disputes/unfair-dismissal-claim">Unfair Dismissal Claim</a>',
            '<a href="/employment/employment-disputes/unpaid-wages-claim">Unpaid Wages Claim</a>'
        ],
    }))
    c.appendChild(new createRow({
        title: 'Family',
        col1: [
            '<a href="/family/children-advice/child-abduction">Child Abduction</a>',
            '<a href="/family/children-advice/child-holiday-arrangements">Child Holiday Arrangements</a>',
            '<a href="/family/children-advice/child-residency-contact">Child Residency &amp; Contact</a>',
            '<a href="/family/break-up-advice/civil-partnership-breakdown">Civil Partnership Breakdown</a>',
            '<a href="/family/relationship-advice/cohabitation-advice">Cohabitation</a>',
        ],
        col2: [
            '<a href="/family/break-up-advice/cohabitation-breakdown">Cohabitation Breakdown</a>',
            '<a href="/family/break-up-advice/domestic-violence">Domestic Violence</a>',
            '<a href="/family/break-up-advice/family-mediation">Family Mediation</a>',
            '<a href="/family/relationship-advice/gender-recognition-advice">Gender Recognition</a>',
            '<a href="/family/children-advice/other-child-issues">Other Child Issues</a>',
        ],
        col3: [
            '<a href="/family/children-advice/parental-responsibility">Parental Responsibility</a>',
            '<a href="/family/relationship-advice/prenup-postnup-advice">Prenup / Postnup Advice</a>',
            '<a href="/family/break-up-advice/respond-to-a-divorce-petition">Respond to a Divorce Petition</a>',
            '<a href="/family/break-up-advice/starting-divorce-proceedings">Start Divorce proceedings</a>'
        ],
    }))
    c.appendChild(new createRow({
        title: 'Motor Offences',
        col1: [
            '<a href="/motor-offences/driving-offences/careless-dangerous-driving">Careless / Dangerous Driving</a>',
            '<a href="/motor-offences/driving-offences/drinks-drug-driving">Drinks / Drug Driving</a>',

        ],
        col2: ['<a href="/motor-offences/driving-offences/speeding-offences">Speeding Offences</a>'],
        col3: [],
    }))
    c.appendChild(new createRow({
        title: 'Personal injury',
        col1: [
            '<a href="/personal-injury/accidents/accidents-at-work-claim">Accidents at work claim</a>',
            '<a href="/personal-injury/accidents/accidents-in-a-public-place-claim">Accidents in a public place claim</a>',

        ],
        col2: ['<a href="/personal-injury/accidents/road-traffic-accident-claim">Road traffic accident claim</a>',
            '<a href="/personal-injury/accidents/accidents-and-illness-abroad-claim">Accidents and Illness Abroad Claim</a>'],
        col3: [],
    }))
    c.appendChild(new createRow({
        title: 'Property',
        col1: [
            '<a href="/property/property-ownership/buying-selling-a-property">Buying &amp; Selling a Property</a>',
            '<a href="/property/property-ownership/buying-a-property">Buying A Property</a>',
            '<a href="/property/leases/enfranchisement">Enfranchisement</a>',
            '<a href="/property/equity-matters/equity-release">Equity Release</a>',

        ],
        col2: [
            '<a href="/property/equity-matters/equity-transfer">Equity Transfer</a>',
            '<a href="/property/leases/lease-extension-landlord">Lease Extension (Landlord)</a>',
            '<a href="/property/leases/lease-extension-tenant">Lease Extension (Tenant)</a>',
            '<a href="/property/disputes/possession-claims">Possession Claims</a>',
        ],
        col3: [
            '<a href="/property/property-ownership/remortgaging-a-property">Remortgaging a Property</a>',
            '<a href="/property/property-ownership/selling-a-property">Selling a Property</a>',
            '<a href="/property/disputes/tenancy-disputes-for-landlord">Tenancy Disputes (for Landlord)</a>',
            '<a href="/property/disputes/tenancy-disputes-for-tenant">Tenancy Disputes (for Tenant)</a>',
        ],
    }))
    c.appendChild(new createRow({
        title: 'Wills and probate',
        col1: [
            '<a href="/wills-probate/dealing-with-an-estate/administer-an-estate">Administer an estate</a>',
            '<a href="/wills-probate/dispute/contest-a-will">Contest a will</a>',
            '<a href="/wills-probate/protecting-others/court-of-protection-deputyship">Court of Protection deputyship</a>',
            '<a href="/wills-probate/wills/draft-individual-will">Draft an individual will</a>',

        ],
        col2: [
            '<a href="/wills-probate/wills/draft-joint-wills">Draft joint wills</a>',
            '<a href="/wills-probate/dealing-with-an-estate/obtain-a-grant">Obtain a grant</a>',
        ],
        col3: [
            '<a href="/wills-probate/protecting-others/power-of-attorney-for-a-couple">Power of Attorney for a couple</a>',
            '<a href="/wills-probate/protecting-others/power-of-attorney-for-an-individual">Power of Attorney for an individual</a>'
        ],
    }))
    c.appendChild(new createRow({
        title: 'Business Services',
        col1: [
            '<a href="/business/business-disputes">Business Disputes</a>',
            '<a href="/business/business-employment">Business Employment</a>',
        ],
        col2: [
            '<a href="/business/business-property">Business Property</a>',
            '<a href="/business/business-services">Business Services</a>'
        ],
        col3: [],
    }))


    function createRow(data) {
        this.title = data.title
        this.col1 = data.col1
        this.col2 = data.col2
        this.col3 = data.col3

        let row = document.createElement('div')
        row.classList.add('row')

        makeCol([], this.title)
        makeCol(this.col1)
        makeCol(this.col2)
        makeCol(this.col3)

        //need 4 cols
        function makeCol(c = [], title = null) {
            let col = document.createElement('div')
            col.classList.add('col-12', 'col-md-3')

            if (title) {
                col.innerHTML = `<h3 onclick='expandCat(this)'>${title}</h3>`
            } else {
                c.forEach(item => {
                    col.innerHTML += item
                })
            }
            row.appendChild(col)
        }

        return row
    }

    return topFooter
}



// function buildNesting(data){
//     let topEl = null
//     let myEls = []

//     data.forEach((item, i) => {
//         let x = document.createElement(item.el)
//         x.classList.add(item.classname)
//         if(item.sib) x.classList.add('sib')
//         myEls.push(x)
//     })

//     for (let i = 0; i < myEls.length; i++) {
//         if(i === 0) {
//             topEl = myEls[i]
//             continue
//         }
//         if(myEls[i].classList.contains('sib')) {
//             myEls[i - 2].appendChild(myEls[i])
//             myEls[i].classList.remove('sib')
//         } else {
//             myEls[i - 1].appendChild(myEls[i])
//         }
//     }
//     return topEl
// }

function removeExsiting() {
    //document.querySelector('.slideshow').remove()
}

//don't include in production
console.log(document.querySelector('head').innerHTML += '<style>.tls-cookie-popup {display: none !important;}.footer{display:none;}</style>')

function createContainer() {
    let c = document.createElement('div')
    c.classList.add('container')
    return c
}

run()

//};

function expandCat(el) {
    console.log(el)
    let x = el.parentElement.parentElement
    x.classList.toggle('active')
    let cols = x.getElementsByClassName('col-12')
    console.log(cols)
    for (let i = 0; i < cols.length; i++) {
        if (i === 0) continue
        cols[i].classList.toggle('show')
    }
}