window.onload = (event) => {
    console.log('page is fully loaded!');

    function run() {
        let experimentContent = document.createElement('div')
        experimentContent.classList.add('rwd-bs')

        //create hero
        experimentContent.appendChild(createHero())
        experimentContent.appendChild(createTopCards())
        experimentContent.appendChild(createCategories())
        experimentContent.appendChild(createWorksSection())
        experimentContent.appendChild(createWhoSection())
        
        let header = document.querySelector('header')
        header.after(experimentContent)

        removeExsiting()
    }

    function createHero() {
        let hero = document.createElement('div')
        hero.id = 'hero'
        let c = createContainer()
        c.classList.add('heroContainer')

        c.innerHTML += '<div><h1>Headline Text</h1><p>intro text intro text intro text intro text intro text</p><div class="trusted"><i class="fa-solid fa-circle-check"></i><p>Trusted by over 50,000 customers who used us to get legal quotes</p></div></div>'

        hero.appendChild(c)
        return hero
    }

    function createTopCards() {
        let topCards = document.createElement('div')
        topCards.id = 'topCards'
        topCards.classList.add('py-3')
        let c = createContainer()
        let h = document.createElement('h3')
        h.classList.add('mb-2')
        h.innerHTML = 'Compare and get legal quotes'
        c.appendChild(h)
        let row = document.createElement('div')
        row.classList.add('row')

        let o = [
            {
                title: 'wills and probate',
                img: 'https://via.placeholder.com/150',
                content: 'info about product',
                link: '/wills'
            },
            {
                title: 'divorce',
                img: 'https://via.placeholder.com/150',
                content: 'info about product',
                link: '/wills'
            },
            {
                title: 'property',
                img: 'https://via.placeholder.com/150',
                content: 'info about product',
                link: '/wills'
            },
            {
                title: 'child maintenace',
                img: 'https://via.placeholder.com/150',
                content: 'info about product',
                link: '/wills'
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

            card.innerHTML = `<strong>${this.title}</strong><img src='${this.img}' /><p>${this.content}</p><a class='btn btn--orange' href='${this.link}'>${this.title}</a>`

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
        h.innerHTML = 'How The Law Superstore Works'
        c1.appendChild(h)

        c1.appendChild(new point({ icon: '<i class="fa-solid fa-1"></i>', text: 'blah blah blah'}))
        c1.appendChild(new point({ icon: '<i class="fa-solid fa-2"></i>', text: 'blah blah blah'}))
        c1.appendChild(new point({ icon: '<i class="fa-solid fa-3"></i>', text: 'blah blah blah'}))

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
        h.innerHTML = 'Who Are The Law Superstore?'
        c1.appendChild(h)

        let leftPara = document.createElement('p')
        leftPara.innerHTML = "The Law Superstore is an independent and impartial comparison website for legal services. We\'ve made it our business to make finding legal services as simple and transparent as possible."
        c1.appendChild(leftPara)

        let checkList = document.createElement('ul')

        checkList.appendChild(new checkPoint('Compare the best'))
        checkList.appendChild(new checkPoint('<b>Instant results</b>, compare on what matters to you'))
        checkList.appendChild(new checkPoint('Quality checked legal service providers'))
        checkList.appendChild(new checkPoint('Hear from your chosen provider within 4 hours'))
        checkList.appendChild(new checkPoint('Only pay when you\'ve spoken and agree terms'))
        checkList.appendChild(new checkPoint('Prices available for initial advice only and full service'))

        c1.appendChild(checkList)

        function checkPoint(text) {
            this.text = text
            let x = document.createElement('li')
            x.innerHTML = this.text
            return x
        }

        row.appendChild(c1)

        let c2 = document.createElement('div')
        c2.classList.add('col-12', 'col-md-6')

        c2.appendChild(new boldPoint({ icon: '<i class="fa-solid fa-certificate"></i>',title: 'Trusted Partners', text: 'Quality checked and fully regulated or accredited legal service providers' }))
        c2.appendChild(new boldPoint({ icon: '<i class="fa-solid fa-minimize"></i>',title: 'Compare Instantly', text: 'Quality checked and fully regulated or accredited legal service providers' }))
        c2.appendChild(new boldPoint({ icon: '<i class="fa-solid fa-sterling-sign"></i>',title: 'Flexible Pricing', text: 'Quality checked and fully regulated or accredited legal service providers' }))

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


        //c2.innerHTML = 'hfdshdshdshfh'
        

        row.appendChild(c2)
        c.appendChild(row)
        
        return who
    }

    function removeExsiting() {
        document.querySelector('.slideshow').remove()
    }

    //don't include in production
    console.log(document.querySelector('head').innerHTML += '<style>.tls-cookie-popup {display: none !important;}</style>')

    function createContainer() {
        let c = document.createElement('div')
        c.classList.add('container')
        return c
    }

    run()
};