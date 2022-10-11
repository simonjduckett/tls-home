window.onload = (event) => {
    console.log('page is fully loaded!');

    function run() {
        let experimentContent = document.createElement('div')
        experimentContent.classList.add('rwd-bs')

        experimentContent.appendChild(createHero())
        experimentContent.appendChild(createTopCards())
        experimentContent.appendChild(createCategories())
        experimentContent.appendChild(createWorksSection())
        experimentContent.appendChild(createWhoSection())
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

        new Glide('.glide', {
            type: 'carousel',
            autoplay: 500,
            perView: 4,
            gap: 25,
            breakpoints: {
                768: {
                    perView: 1
                }
            }
        }).mount()
    }

    function createHero() {
        let hero = document.createElement('div')
        hero.id = 'hero'
        let c = createContainer()
        c.classList.add('heroContainer')

        c.innerHTML += '<div><h1>The legal comparison website</h1><p>Helping you save money on legal bills</p><div class="trusted"><i class="fa-solid fa-circle-check"></i><p>Trusted by over 50,000 customers</p></div></div>'

        hero.appendChild(c)
        return hero
    }

    function createTopCards() {
        let topCards = document.createElement('div')
        topCards.id = 'topCards'
        topCards.classList.add('py-3')
        let c = createContainer()
        let h = document.createElement('h2')
        h.classList.add('mb-2')
        h.innerHTML = 'Compare and get legal quotes'
        c.appendChild(h)
        let row = document.createElement('div')
        row.classList.add('row')

        let o = [
            {
                title: 'start divorce proceedings',
                img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Divorce_1.jpg',
                content: 'Find lawyers for Break up Advice',
                link: '/personal/family/break-up-advice/starting-divorce-proceedings/compare/c86f546a-a12d-4473-907c-f3b55e2f7d8d/question/27985138-cbb8-4b7a-b47e-f9f9846c4026/who-will-start-the-divorce-proceedings'
            },
            {
                title: 'power of attorney for an individual',
                img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Wills_Probate_1.jpg',
                content: 'Find lawyers for wills',
                link: '/personal/wills-probate/protecting-others/power-of-attorney-for-an-individual/compare/dfb726df-7574-4b4d-ab2f-f4a516848463/question/b40b3d92-cd8b-4c11-816f-1643d033b491/are-you-resident-in-england-or-wales'
            },
            {
                title: 'draft an individual will',
                img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Wills_Probate_2.jpg',
                content: 'We know how important it is to write a will.',
                link: '/personal/wills-probate/wills/draft-individual-will/compare/95120d9b-ef21-450e-880a-a7b361e4efe8/question/b6decd04-ddcf-4790-a435-1b07d2900a93/do-you-live-in-england-or-wales'
            },
            {
                title: 'equity transfer',
                img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Property_1.jpg',
                content: 'Find lawyers for equity transfer',
                link: '/personal/property/equity-matters/equity-transfer/compare/425d2849-5d42-4f48-882e-9f74931050b3/question/727a49d1-a6f8-402d-aa25-9f95e1b21daf/is-the-property-in-england-or-wales'
            }
        ]

        o.forEach(item => {
            let col = document.createElement('div')
            col.classList.add('col-12', 'col-md-3')
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

            let card = document.createElement('div')
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
        p.innerHTML = 'We cover a wide variety of legal services, ranging from Property to Personal Injury, and Buisness Employment to Buisness Disputes.'
        c.appendChild(p)

        let row = document.createElement('div')
        row.classList.add('row')
        c.appendChild(row)

        let o = [
            { 
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            },
            {
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            },
            {
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            },
            {
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            },
            {
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            },
            {
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            },
            {
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            },
            {
                icon: '<i class="fa-solid fa-wheelchair-move"></i>',
                name: 'Personal Injury',
                content: 'Some content about this category',
                link: '/wills'
            }
        ]

        o.forEach(cat => {
            let x = new category(cat)
            row.appendChild(x)
        })

        function category(data = {}) {
            this.icon       = data.icon
            this.name       = data.name
            this.content    = data.content
            this.link       = data.link

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

    function  createWorksSection() {
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

        c1.appendChild(new point({ icon: '<i class="fa-solid fa-1"></i>', text: 'Pick the legal service you need.'}))
        c1.appendChild(new point({ icon: '<i class="fa-solid fa-2"></i>', text: 'Fill in a few details on our quick quote form.'}))
        c1.appendChild(new point({ icon: '<i class="fa-solid fa-3"></i>', text: 'Get instant quotes to your inbox.'}))

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
        c2.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/UwFs9CLJUFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

        row.appendChild(c2)
        c.appendChild(row)
        
        return works
    }
    function  createWhoSection() {
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
        leftPara.innerHTML = "The Law Superstore is the UK\’s biggest legal comparison website. We\’re making it quick and easy to find lawyers. <br /> </br />With over 130 legal services on offer, from divorce to personal injury claims, we\’ve got you covered."
        c1.appendChild(leftPara)

        let checkList = document.createElement('ul')

        checkList.appendChild(new checkPoint('Find the lawyer who works best for you'))
        checkList.appendChild(new checkPoint('<b>Save time</b> by getting instant quotes instead of going from provider to provider'))
        checkList.appendChild(new checkPoint('Get the best deal by finding the cheapest lawyer'))
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

        c2.appendChild(new boldPoint({ icon: '<i class="fa-solid fa-sterling-sign"></i>', title: 'Save money', text: 'Find the cheapest deal by comparing legal service providers.' }))

        //add everything to c2 and then append to row
        function boldPoint(data) {
            this.icon = data.icon
            this.title = data.title
            this.text = data.text

            let x = document.createElement('div')
            x.classList.add('bold-point')
            x.innerHTML = `<div>${this.icon}</div> <div><b>${this.title}</b><p>${this.text}</p></div>`
            return x
        }

        row.appendChild(c2)
        c.appendChild(row)
        
        return who
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

        for(let i = 0; i < slides.length; i++) {
            let x = document.createElement('li')
            x.innerHTML = slides[i].innerHTML
            x.classList.add('glide__slide')
            let z = x.querySelector('.testimonial__blockquote')
            let y = document.createElement('div')
            let j = 0
            while(j < 5) {
                y.innerHTML += '<i class="fa-solid fa-star"></i>'
                j++
            }
            z.appendChild(y)
            glideUl.appendChild(x)
        }

        let bullets = document.createElement('div')
        bullets.classList.add('glide__bullets')
        bullets.setAttribute('data-glide-el', 'controls[nav]')
        for (let i = 0; i < slides.length; i++) {
            let button = document.createElement('button')
            button.classList.add('glide__bullet')
            button.setAttribute('data-glide-dir', `=${i}`)
            bullets.appendChild(button)
        }


        glide.appendChild(bullets)
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
        heading.innerHTML = 'All our legal professionals are accredited or regulated.'
        let subHeading = document.createElement('p')
        subHeading.innerHTML = 'We cover a wide vaiety of legal services'

        c.appendChild(heading)
        c.appendChild(subHeading)

        let logosDiv = document.createElement('div')
        logosDiv.id = 'logosDiv'

        let images = [
            'https://via.placeholder.com/200',
            'https://via.placeholder.com/200',
            'https://via.placeholder.com/200',
            'https://via.placeholder.com/200',
        ]
        images.forEach(image => {
            let x = document.createElement('img')
            x.src = image
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
        h.innerHTML = 'Haven\’t found what you\’re looking for? We compare over 130 legal services.'
        let p = document.createElement('p')
        p.innerHTML = 'All advices are listed below'

        c.appendChild(h)
        c.appendChild(p)

        c.appendChild(createRow({
            title: 'Disputes',
            col1:   [
                '<a href="/disputes/money-disputes/bankruptcy-proceedings">Bankruptcy Proceedings</a>',
                '<a href="/disputes/general-disputes/consumer-disputes">Consumer Disputes</a>'
            ],
            col2:   [
                '<a href="/disputes/money-disputes/money-disputes">Money Disputes</a>',
                '<a href="/disputes/general-disputes/neighbour-disputes">Neighbour Disputes</a>'
            ],
            col3:   [
                '<a href="/disputes/general-disputes/other-disputes">Other Disputes</a>'
            ],
        }))
        c.appendChild(createRow({
            title: 'Employment',
            col1:   [
                '<a href="/employment/employment-disputes/disciplinary-hearings">Disciplinary Hearings</a>',
                '<a href="/employment/employment-disputes/discrimination-claim">Discrimination Claim</a>',
            ],
            col2:   [
                '<a href="/employment/employment-disputes/equal-pay-claim">Equal Pay Claim</a>',
                '<a href="/employment/employment-disputes/redundancy-claim">Redundancy Claim</a>',
                '<a href="/employment/employment-disputes/settlement-agreements">Settlement Agreements</a>',
            ],
            col3:   [
                '<a href="/employment/employment-disputes/tupe">TUPE</a>',
                '<a href="/employment/employment-disputes/unfair-dismissal-claim">Unfair Dismissal Claim</a>',
                '<a href="/employment/employment-disputes/unpaid-wages-claim">Unpaid Wages Claim</a>'
            ],
        }))
        c.appendChild(createRow({
            title: 'Family',
            col1:   [
                '<a href="/family/children-advice/child-abduction">Child Abduction</a>',
                '<a href="/family/children-advice/child-holiday-arrangements">Child Holiday Arrangements</a>',
                '<a href="/family/children-advice/child-residency-contact">Child Residency &amp; Contact</a>',
                '<a href="/family/break-up-advice/civil-partnership-breakdown">Civil Partnership Breakdown</a>',
                '<a href="/family/relationship-advice/cohabitation-advice">Cohabitation</a>',
            ],
            col2:   [
                '<a href="/family/break-up-advice/cohabitation-breakdown">Cohabitation Breakdown</a>',
                '<a href="/family/break-up-advice/domestic-violence">Domestic Violence</a>',
                '<a href="/family/break-up-advice/family-mediation">Family Mediation</a>',
                '<a href="/family/relationship-advice/gender-recognition-advice">Gender Recognition</a>',
                '<a href="/family/children-advice/other-child-issues">Other Child Issues</a>',
            ],
            col3:   [
                '<a href="/family/children-advice/parental-responsibility">Parental Responsibility</a>',
                '<a href="/family/relationship-advice/prenup-postnup-advice">Prenup / Postnup Advice</a>',
                '<a href="/family/break-up-advice/respond-to-a-divorce-petition">Respond to a Divorce Petition</a>',
                '<a href="/family/break-up-advice/starting-divorce-proceedings">Start Divorce proceedings</a>'
            ],
        }))
        c.appendChild(createRow({
            title: 'Motor Offences',
            col1:   [
                '<a href="/motor-offences/driving-offences/careless-dangerous-driving">Careless / Dangerous Driving</a>',
                '<a href="/motor-offences/driving-offences/drinks-drug-driving">Drinks / Drug Driving</a>',
                
            ],
            col2: ['<a href="/motor-offences/driving-offences/speeding-offences">Speeding Offences</a>'],
            col3:   [],
        }))
        c.appendChild(createRow({
            title: 'Personal injury',
            col1:   [
                '<a href="/personal-injury/accidents/accidents-at-work-claim">Accidents at work claim</a>',
                '<a href="/personal-injury/accidents/accidents-in-a-public-place-claim">Accidents in a public place claim</a>',
                
            ],
            col2: ['<a href="/personal-injury/accidents/road-traffic-accident-claim">Road traffic accident claim</a>'],
            col3:   [],
        }))
        c.appendChild(createRow({
            title: 'Property',
            col1:   [
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
            col3:   [
                '<a href="/property/property-ownership/remortgaging-a-property">Remortgaging a Property</a>',
                '<a href="/property/property-ownership/selling-a-property">Selling a Property</a>',
                '<a href="/property/disputes/tenancy-disputes-for-landlord">Tenancy Disputes (for Landlord)</a>',
                '<a href="/property/disputes/tenancy-disputes-for-tenant">Tenancy Disputes (for Tenant)</a>',
            ],
        }))
        c.appendChild(createRow({
            title: 'Wills and probate',
            col1:   [
                '<a href="/wills-probate/dealing-with-an-estate/administer-an-estate">Administer an estate</a>',
                '<a href="/wills-probate/dispute/contest-a-will">Contest a will</a>',
                '<a href="/wills-probate/protecting-others/court-of-protection-deputyship">Court of Protection deputyship</a>',
                '<a href="/wills-probate/wills/draft-individual-will">Draft an individual will</a>',
                
            ],
            col2: [
                '<a href="/wills-probate/wills/draft-joint-wills">Draft joint wills</a>',
                '<a href="/wills-probate/dealing-with-an-estate/obtain-a-grant">Obtain a grant</a>',
            ],
            col3:   [
                '<a href="/wills-probate/protecting-others/power-of-attorney-for-a-couple">Power of Attorney for a couple</a>',
                '<a href="/wills-probate/protecting-others/power-of-attorney-for-an-individual">Power of Attorney for an individual</a>'
            ],
        }))


        function createRow(data) {
            this.title = data.title
            this.col1  = data.col1
            this.col2  = data.col2
            this.col3  = data.col3

            let row = document.createElement('div')
            row.classList.add('row')

            makeCol([], this.title)
            makeCol(this.col1)
            makeCol(this.col2)
            makeCol(this.col3)

            //need 4 cols
            function makeCol(c = [], title = null){
                let col = document.createElement('div')
                col.classList.add('col-12', 'col-md-3')

                if(title) {
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
    
};

function expandCat(el) {
    console.log(el)
    let x = el.parentElement.parentElement
    let cols = x.getElementsByClassName('col-12')
    console.log(cols)
    for (let i = 0; i < cols.length; i++) {
        if(i === 0) continue
        cols[i].classList.toggle('show')
    }
}