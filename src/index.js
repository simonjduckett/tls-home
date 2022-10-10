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
            autoplay: 3000,
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
                title: 'divorce lawyers',
                img: 'https://via.placeholder.com/150',
                content: 'Find lawyers for Break up Advice',
                link: '/family/break-up-advice'
            },
            {
                title: 'property solicitors',
                img: 'https://via.placeholder.com/150',
                content: 'Property law covers all matters relating to the ownership or use of land and real estate.',
                link: '/property'
            },
            {
                title: 'wills and probate',
                img: 'https://via.placeholder.com/150',
                content: 'We know how important it is to write a will.',
                link: '/wills-probate/wills'
            },
            {
                title: 'family',
                img: 'https://via.placeholder.com/150',
                content: 'Family law specialises in relationships including financial provision and arrangements for children.',
                link: '/family'
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

            card.innerHTML = `<h3>${this.title}</h3><img src='${this.img}' /><p>${this.content}</p><a class='btn btn--orange' href='${this.link}'>${this.title}</a>`

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
            title: '<i class="fa-solid fa-house"></i> Property',
            col1:   [
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
            col2:   [
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
            col3:   [
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
        }))
        c.appendChild(createRow({
            title: '<i class="fa-solid fa-family"></i> Family',
            col1:   [
                "<a href='/'>link textt</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
            col2:   [
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
            col3:   [
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
        }))
        c.appendChild(createRow({
            title: 'Wills & Probate',
            col1:   [
                "<a href='/'>wills</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
            col2:   [
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
            ],
            col3:   [
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
                "<a href='/'>link text</a>",
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