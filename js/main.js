


const windowName = window.location.pathname;
console.log(windowName)
allPages();
function allPages(){
    preloader();
    navMenu();
    navBarResponsive();
    Footer();
    scrollToTop();
}

if(windowName == "/gymnast-gym/index.html" || windowName == "/gymnast-gym/"){
    sliderHome();
    JoinNow();
    modals();
    featuresStart();
    gymFeatureStart();
    subscription();
    classTable();
    bmiForm();
    ourTrainers();
    testimonials();
    latestBlogs();
}

else if(windowName == "/gymnast-gym/about.html"){
    ourTrainers();
    gallery();
}

else if(windowName == "/gymnast-gym/feature.html"){
    gymFeatureStart();
    testimonials();
}

else if(windowName == "/gymnast-gym/class.html"){
    JoinNow();
    modals();
    classTable();
    bmiForm();
}

else if(windowName == "/gymnast-gym/single.html"){
    comment();
}

else if(windowName == "/gymnast-gym/contact.html"){
    contact();
}



//Functions that all pages contain -------- Start

//Preloader function
function preloader(){
    $(window).on('load', function() {
        $('#preloader').css('display', 'none');
    });
}
//Dynamic navigation
function navMenu(){
    //Array of menu items
    let menuItems = [
        {
            text: `Home`,
            url: `index.html`
        },
        {
            text: `About us`,
            url: `about.html`
        },
        {
            text: `Our Features`,
            url: `feature.html`
        },
        {
            text: `Classes`,
            url: `class.html`
        },
        {
            text: `Blog`,
            url: `single.html`
        },
        {
            text: `Contact`,
            url: `contact.html`
        },
        {
            text: `Author`,
            url: `author.html`
        }
    ]

    //Loop for creating dynamic navigation menu

    let ul = $(`<ul>`);
    ul.addClass(`navbar-nav`);

    for(let i = 0; i<menuItems.length; i++){
        let li = $(`<li>`);

        let a = $(`<a>`);
        a.addClass(`nav-item nav-link`);
        a.attr(`href`,`${menuItems[i].url}`)
        a.text(menuItems[i].text);

        let currentPage = `/${menuItems[i].url}` == windowName ? true : false;
        if(currentPage){
            a.addClass(`active`);
        }
        li.append(a);
        ul.append(li);
    }
    $(`.navM`).append(ul);
}
//Nav menu responsive
function navBarResponsive(){
    $(`.navbar-toggler`).click(function(){
        $(`#navbarCollapse`).toggle(`collapse`);
    })
}
//Dynamic elements of Footer
function Footer(){

    let headings = [`Get In Touch`, `Quick Links`, `Popular Links`, `Opening Hours`];

    //Get in Touch elements - START
    let contactEl = [
        {
            iconClass1:`fa`,
            iconClass2:`fa-map-marker-alt`,
            text:`123 Street, New York, USA`
        },
        {
            iconClass1:`fa`,
            iconClass2:`fa-phone-alt`,
            text:`+012 345 67890`
        },
        {
            iconClass1:`fa`,
            iconClass2:`fa-envelope`,
            text:`gymnast1@gmail.com`
        }
    ]
    let socialsEl = [
        {
            href:`https://twitter.com/`,
            iconClass1:`fab`,
            iconClass2:`fa-twitter`
        },
        {
            href:`https://www.facebook.com/`,
            iconClass1:`fab`,
            iconClass2:`fa-facebook-f`
        },
        {
            href:`https://www.linkedin.com/`,
            iconClass1:`fab`,
            iconClass2:`fa-linkedin-in`
        },
        {
            href:`https://www.instagram.com/`,
            iconClass1:`fab`,
            iconClass2:`fa-instagram`
        }
    ]

    //Get in Touch elements - END

    //Quick Links elements - START
    let quickLinks = [
        {
            href: `index.html`,
            text:`Home`
        },
        {
            href: `about.html`,
            text:`About us`
        },
        {
            href: `feature.html`,
            text:`Our Features`
        },
        {
            href: `class.html`,
            text:`Classes`
        },
        {
            href: `contact.html`,
            text:`Contact Us`
        },
    ]
    //Quick Links elements - END

    //Popular Links elements - START
    let popularLinks = [
        {
            href: `feature.html`,
            text:`Our Features`
        },
        {
            href: `class.html`,
            text:`Classes`
        },
        {
            href: `single.html`,
            text:`Blog`
        }
    ]
    //Popular Links elements - END

    //Opening Hours elements - START
    let openingHours = [
        {
            heading:`Monday - Friday`,
            time:`8.00 AM - 8.00 PM`
        },
        {
            heading:`Saturday - Sunday`,
            time:`2.00 PM - 8.00 PM`
        }
    ]
    //Opening Hours elements - END

    //icon for Footer Menu links
    let iconClasses = [`fa`, `fa-angle-right`]

    let row = $(`.footerRow`)
    for(let i = 0; i<headings.length; i++){

        let col = $(`<div>`);
        col.addClass(`col-lg-3 col-md-6 mb-6`);
        row.append(col);
        //heading
        let h = $(`<h4>`);
        h.addClass(`text-primary mb-4`);
        h.text(headings[i]);
        col.append(h);
        //Get in touch part of the footer
        if(i==0){
            //Contact via mail and number
            for(let j = 0; j<contactEl.length; j++){
                let p = $(`<p>`);
                col.append(p);

                let icon = $(`<i>`);
                icon.addClass(`${contactEl[j].iconClass1} ${contactEl[j].iconClass2} mr-2`);
                p.append(icon);
                let text = document.createTextNode(`${contactEl[j].text}`);
                p.append(text);
            }
            //Contact via socials
            let socials = $(`<div>`);
            socials.addClass(`d-flex justify-content-start mt-4`);
            col.append(socials);
            
            for(let j = 0; j<socialsEl.length; j++){
                let a = $(`<a>`);
                a.addClass(`btn btn-outline-light rounded-circle text-center mr-2 px-0 icon40`);
                a.attr(`href`, `${socialsEl[j].href}`);
                socials.append(a);
                //icon
                let icon = $(`<i>`);
                icon.addClass(`${socialsEl[j].iconClass1} ${socialsEl[j].iconClass2}`);
                a.append(icon);
            }
        }
        else if(i==1){
            //Block that contain links
            let block = $(`<div>`);
            block.addClass(`d-flex flex-column justify-content-start`);
            col.append(block);

            for(let j = 0; j<quickLinks.length; j++){
                let a = $(`<a>`);
                a.addClass(`text-white`);
                if(j!=(quickLinks.length-1)){
                    a.addClass(`mb-2`);
                }
                a.attr(`href`, `${quickLinks[j].href}`);
                block.append(a);

                //icon
                let icon = $(`<i>`);
                icon.addClass(`${iconClasses[0]} ${iconClasses[1]} mr-2`);
                a.append(icon);

                //Link text
                let text = document.createTextNode(`${quickLinks[j].text}`);
                a.append(text);
            }
        }
        //Popular Links
        else if(i==2){
            //Block that contain links
            let block = $(`<div>`);
            block.addClass(`d-flex flex-column justify-content-start`);
            col.append(block);

            for(let j = 0; j<popularLinks.length; j++){
                let a = $(`<a>`);
                a.addClass(`text-white`);
                if(j!=(popularLinks.length-1)){
                    a.addClass(`mb-2`);
                }
                a.attr(`href`, `${popularLinks[j].href}`);
                block.append(a);
                //icon
                let icon = $(`<i>`);
                icon.addClass(`${iconClasses[0]} ${iconClasses[1]} mr-2`);
                a.append(icon);
                //Link text
                let text = document.createTextNode(`${popularLinks[j].text}`);
                a.append(text);
            }
        }
        //Opening Hours
        else{
            for(let j = 0; j<openingHours.length; j++){
                let days = $(`<h5>`);
                days.addClass(`text-white`);
                days.text(openingHours[j].heading);
                col.append(days);

                let time = $(`<p>`);
                time.text(openingHours[j].time);
                col.append(time);
            }
        }
    }
}
// scroll to top button
function scrollToTop(){

    $(window).on(`scroll`, function(){
        if(window.scrollY > 500){
            $(`.back-to-top`).addClass(`show`);
        }
        else{
            $(`.back-to-top`).removeClass(`show`);
        }
    })
}

//Functions that all pages contains -------- End





//Other functions that are responsible for page contents ------- Start


//First slider on a home page 
function sliderHome() {
    let slider = $(`.sliderH`);

    let elements = [
        {
            src: `img/carousel-1.jpg`,
            alt: `Man doing barbell curl`,
            heading1: `Gym & Fitness Center`,
            heading2: `Best Gym In Town`,
            href: `#gym-classes`,
            btnText: `Join Us Now`
        },
        {
            src: `img/carousel-2.jpg`,
            alt: `Man doing cable fly machine`,
            heading1: `Gym & Fitness Center`,
            heading2: `Get Body In Shape`,
            href: `#gym-classes`,
            btnText: `Join Us Now`
        }
    ]
    //Slides creation
    for(let i = 0; i<elements.length; i++){
        let slide = $(`<div>`);
        slide.addClass(`carousel-item`);
        if(i==0){
            slide.addClass(`active`);
        }
        slider.append(slide);
        //image of the slide
        let img = $(`<img>`);
        img.addClass(`w-100`);
        img.attr({"src":`${elements[i].src}`,"alt":`${elements[i].alt}`});
        slide.append(img);
        //Block that contain headings and button join us now
        let headings = $(`<div>`);
        headings.addClass(`carousel-caption d-flex flex-column align-items-center justify-content-center`);
        slide.append(headings);
        //headings
        let h3 = $(`<h3>`);
        h3.addClass(`text-primary text-capitalize m-0`);
        h3.text(elements[i].heading1);
        headings.append(h3);

        let h2 = $(`<h2>`);
        h2.addClass(`display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize`);
        h2.text(elements[i].heading2);
        headings.append(h2);
        //Button
        let a = $(`<a>`);
        a.addClass(`btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5`);
        a.attr(`href`,`${elements[i].href}`);
        a.text(elements[i].btnText);
        headings.append(a);
    }

    //Slider function
    let slides = $(`.sliderH .carousel-item`);

    let currentSlide = 0;

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }
        updateSlider();
    }
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        for (let i = 0; i < slides.length; i++) {
          $(slides[i]).hide();
        }
        $(slides[currentSlide]).show();
    }

    updateSlider();

    $(`.carousel-control-prev`).click(prevSlide);
    $(`.carousel-control-next`).click(nextSlide);

    let interval = 5000;

    let slideshow = setInterval(nextSlide, interval);
    
}
//Gym classes join now
function JoinNow(){
    let row = $(`.joinNow`);

    let elements = [
        {
            icon: `flaticon-six-pack`,
            heading: `Cardio and Fitness`,
            text: `Cardio and CrossFit are both popular forms of exercise that can improve physical health and fitness. Cardio involves activities that increase the heart rate and breathing rate, while CrossFit is a high-intensity workout program that combines elements of cardio, strength training, and gymnastics. Both can be effective tools for improving physical health and fitness.`,
            href: `#modal1`,
            btnText: `Join Now`,
            id: `modalNo1`
        },
        {
            icon: `flaticon-bodybuilding`,
            heading: `Power and Strength`,
            text: `Powerlifting and bodybuilding are both popular sports that involve lifting weights and increasing muscle size and strength. Powerlifting involves performing the three main lifts (squat, bench press, and deadlift) in a competition setting, while bodybuilding involves posing and displaying muscle development in front of a panel of judges. Join now and become legend!`,
            href: `#modal2`,
            btnText: `Join Now`,
            id: `modalNo2`
        }
    ]

    for(let i = 0; i<elements.length; i++){
        let col = $(`<div>`);
        col.addClass(`col-md-6 p-0`);
        row.append(col);

        //Block inside col block that contain everything
        let block = $(`<div>`);
        if(i==0){
            block.addClass(`gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5`);
        }
        else{
           block.addClass(`gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5`);
        }
        col.append(block);

        //icon
        let icon = $(`<i>`);
        icon.addClass(`${elements[i].icon}`);
        block.append(icon);

        //heading
        let h = $(`<h3>`);
        h.addClass(`display-4 mb-3 text-white font-weight-bold`);
        h.text(elements[i].heading);
        block.append(h);

        //Text
        let p = $(`<p>`);
        p.text(elements[i].text);
        block.append(p);

        //Join now button
        let a = $(`<a>`);
        a.addClass(`btn btn-lg btn-outline-light mt-4 px-4 position-relative`);
        a.attr({"href":`${elements[i].href}`, "id":`${elements[i].id}`});
        a.text(elements[i].btnText);
        block.append(a);
    }
}
//Dynamic features on the home page
function featuresStart(){
    let row = $(`.fRow`);

    let features = [
        {
            icon:`flaticon-training`,
            heading:`Progression`,
            text: `Progression is the biggest factor in staying consistent. Let's progress together.`
        },
        {
            icon:`flaticon-weightlifting`,
            heading:`Workout`,
            text: `Workout must be intense and fun. Otherwise you are just wasting your time.`
        },
        {
            icon:`flaticon-treadmill`,
            heading:`Nutrition`,
            text: `The X factor in getting those abs for summer. Combine this with workout and progression and you'll have unbreakable body.`
        }
    ]

    for(let i = 0; i<features.length; i++){
        let col = $(`<div>`);
        col.addClass(`col-lg-4 p-0`);

        let colBlock = $(`<div>`);
        //icon part
        let icon = $(`<i>`);
        icon.addClass(features[i].icon);
        //odd ones have different background color and different icon color
        if(i%2!=0){
            colBlock.addClass(`d-flex align-items-center bg-primary text-white px-5 fM300`);
            icon.addClass(`display-3 text-secondary mr-3`);
        }
        else{
            colBlock.addClass(`d-flex align-items-center bg-secondary text-white px-5 fM300`);
            icon.addClass(`display-3 text-primary mr-3`);
        }
        colBlock.append(icon);

        //text part
        let featuresContentBlock = $(`<div>`);
        //heading part
        let heading = $(`<h2>`);
        heading.addClass(`text-white mb-3`);
        heading.text(features[i].heading);
        featuresContentBlock.append(heading);
        //paragraph part
        let textP = $(`<p>`);
        textP.text(features[i].text);
        featuresContentBlock.append(textP);

        colBlock.append(featuresContentBlock);

        col.append(colBlock);
        row.append(col);
    }
}
//Gym Features 
function gymFeatureStart(){
    let row = $(`.gymFstart`);

    let gymFarray = [
        {
            src:`img/feature-1.jpg`,
            alt: `Image`,
            icon:`flaticon-barbell`,
            heading:`Videos Instruction`,
            text:`Our gym offer you the video instructions which can be really helpful if you are not sure if you are doing exercises the right way.`
        },
        {
            src:`img/feature-2.jpg`,
            alt: `Image`,
            icon:`flaticon-training`,
            heading:`Training Calendar`,
            text:`Training calendar helped many of our members to stay consistent through out holidays and rough times. It will push you to do your activities.`
        },
        {
            src:`img/feature-3.jpg`,
            alt: `Image`,
            icon:`flaticon-trends`,
            heading:`Free Apps & WiFi`,
            text:`We offer free WiFi anywhere in our gym with a very low latency. Free app is very helpful and you can check training schedule and video instructions in it.`
        },
        {
            src:`img/feature-4.jpg`,
            alt: `Image`,
            icon:`flaticon-support`,
            heading:`Community Support`,
            text:`We have the best community and it is growing each day. Become a member right now and you are going to enjoy your life starting tomorrow.`
        }
    ]

    for(let i = 0; i<gymFarray.length; i++){
        
        let col = $(`<div>`);
        col.addClass(`col-md-6 mb-5`);

        let colRow = $(`<div>`);
        colRow.addClass(`row align-items-center`);

        //block that contains img and icons
        let colImg = $(`<div>`);
        colImg.addClass(`col-sm-5`);
        //image part
        let img = $(`<img>`);
        img.addClass(`img-fluid mb-3 mb-sm-0`);
        img.attr({"src":`${gymFarray[i].src}`, "alt":`${gymFarray[i].alt}`});
        colImg.append(img);
        //icon part

        let icon = $(`<i>`);
        icon.addClass(gymFarray[i].icon);
        colImg.append(icon);


        //block that contains heading and text
        let colText = $(`<div>`);
        colText.addClass(`col-sm-7`);
        //heading part
        let colHeading = $(`<h4>`);
        colHeading.addClass(`font-weight-bold`);
        colHeading.text(gymFarray[i].heading);
        colText.append(colHeading);
        //text part
        let colP = $(`<p>`);
        colP.text(gymFarray[i].text);
        colText.append(colP);


        colRow.append(colImg);
        colRow.append(colText);
        col.append(colRow);
        row.append(col);
    }
}
// validation of an email subscription
function subscription(){
    let emailRe = /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    let subButton = $(`.subs`);

    let spanSub = $(`#subscriptionSpan`);
    subButton.click(function(event){
        event.preventDefault();
        let email = $(`#mail`).val();
        if(emailRe.test(email)){
            spanSub.text(`You've successfully subscribed!`);
            spanSub.css(`color`,`green`);
            $(`#mail`).val(``);
        }
        else{
            spanSub.text(`Email is incorrect!`);
            spanSub.css(`color`,`red`);
        }
        let spanTimer = setTimeout(function(){
            spanSub.text(``);
        },8000)
    })
}
// Class timetable
function classTable(){

    //Class selection part
    let ulList = $(`.tableUl`);

    let ulItems = [
        {
            href:`#class-all`,
            text:`All Classes`,
        },
        {
            href:`#class-cardio`,
            text:`Cardio`
        },
        {
            href:`#class-crossfit`,
            text:`Crossfit`
        },
        {
            href:`#class-powerlifting`,
            text:`Powerlifting`
        }
    ]

    //creating dynamic list for table selection
    for(let i = 0; i<ulItems.length; i++){
        let li = $(`<li>`);
        li.addClass(`nav-item`);

        let a = $(`<a>`);
        a.addClass(`nav-link`);
        if(i==0){
            a.addClass(`active`);
        }
        a.attr(`href`,`${ulItems[i].href}`);
        a.text(ulItems[i].text);

        li.append(a);
        ulList.append(li);
    }

    //Table part

    let tablesContainer = $(`.tab-content`);

    let dayOfWeek = [`Time`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]

    let schedules = [
        {
            time:`6.00am - 8.00am`,
            Monday: {
                activity: `Cardio`,
                instructor: `John Deo`
            },
            Wednesday: {
                activity: `Crossfit`,
                instructor: `Adam Phillips`
            },
            Friday:{
                activity:`Power Lifting`,
                instructor: `James Alien`
            },
            Sunday:{
                activity:`Cardio`,
                instructor: `John Deo`
            }
        },
        {
            time:`10.00am - 12.00am`,
            Tuesday:{
                activity: `Power Lifting`,
                instructor: `James Alien`
            },
            Thursday:{
                activity:`Cardio`,
                instructor:`John Deo`
            },
            Saturday:{
                activity:`Crossfit`,
                instructor:`Adam Phillips`
            }
        },
        {
            time:`5.00pm - 7.00pm`,
            Monday: {
                activity: `Crossfit`,
                instructor: `Adamn Phillips`
            },
            Wednesday: {
                activity: `Power Lifting`,
                instructor: `James Alien`
            },
            Friday:{
                activity:`Cardio`,
                instructor: `John Deo`
            },
            Sunday:{
                activity:`Crossfit`,
                instructor: `Adam Phillips`
            }
        },
        {
            time:`7.00pm - 9.00pm`,
            Tuesday:{
                activity: `Cardio`,
                instructor: `John Deo`
            },
            Thursday:{
                activity:`Crossfit`,
                instructor:`Adam Phillips`
            },
            Saturday:{
                activity:`Power Lifting`,
                instructor:`James Alien`
            }
        }
    ]

    let classes = [`class-all`, `class-cardio`, `class-crossfit`, `class-powerlifting`]
    
    for(let i = 0; i<classes.length; i++){
        let container = $(`<div>`);
        container.attr(`id`,`${classes[i]}`);
        container.addClass(`container tab-pane fade p-0`);
        if(i==0){
            container.addClass(`active`);
            container.removeClass(`fade`);
        }
        tablesContainer.append(container);

        //table responsive

        let tRes = $(`<div>`);
        tRes.addClass(`table-responsive`);
        container.append(tRes);

        //creation of the table
        let table = $(`<table>`);
        table.addClass(`table table-bordered table-lg m-0`);
        tRes.append(table);

        //table head

        let tHead = $(`<thead>`);
        tHead.addClass(`bg-secondary text-white text-center`);
        table.append(tHead);

        //table head content
        let tr = $(`<tr>`);
        for(let i = 0; i<dayOfWeek.length; i++){
            let th = $(`<th>`);
            th.text(dayOfWeek[i]);
            tr.append(th);
        }
        tHead.append(tr);

        //table body

        let tBody = $(`<tbody>`);
        tBody.addClass(`text-center`);
        

        //filling schedule
        for(let schedule of schedules){
            let trBody = $(`<tr>`);
            let th = $(`<th>`);
            th.addClass(`bg-secondary text-white align-middle`);
            th.text(schedule.time);
            trBody.append(th);
            for(let i = 1; i<dayOfWeek.length; i++){
                let td = $(`<td>`);
                if(schedule[dayOfWeek[i]]){
                    let h5 = $(`<h5>`);
                    h5.text(schedule[dayOfWeek[i]].activity);
                    td.append(h5);
                    td.append(document.createTextNode(schedule[dayOfWeek[i]].instructor));
                }
                trBody.append(td);
            }
            tBody.append(trBody);
        }
        table.append(tBody);


    }
    
    //Array is created so we can set if statement for adding color to the Classes of the certain tables when they are selected
    let activity = [`ClassAll`, `Cardio`, `Crossfit`, `Power Lifting`]
    let activityIndex = 0;

        let tablesAll = $(`.tab-content > div`);
        for(let table of tablesAll){
            let rows = table.querySelectorAll(`table tbody tr`);
            for(let row of rows){
                let cells = row.querySelectorAll(`td`)
                for(let cell of cells){
                    if(cell.textContent.includes(activity[activityIndex])){
                        cell.classList.add(`bg-primary`, `text-white`);
                        let h5 = cell.querySelector(`h5`);
                        h5.classList.add(`text-white`);
                    }
                }
            }
            activityIndex++;
        }
        

    //I selected all "a" tag in Classes selection list
    let allA = $(`.tableUl li a`);

    for(let i = 0; i<allA.length; i++){
        $(allA[i]).click(function(){
            //changing the active class in table
            let tableClass = $(`.tab-content > div`);
            for(let table of tableClass){
                if(allA[i].href.includes(table.id)){
                    table.classList.add(`active`);
                    table.classList.remove(`fade`);
                }
                else{
                    table.classList.add(`fade`);
                    table.classList.remove(`active`);
                }
            }
            //changing the active class in class selection above the table
            for(let i = 0; i<allA.length; i++){
                $(allA[i]).removeClass(`active`);
            }
            $(allA[i]).addClass(`active`);
        })
    }
    
}
//BMI from creation and validation
function bmiForm(){

    let form = $(`#bmi`);

    let formElements = [
        {
            type:`text`,
            placeholder:`Weight (KG)`,
            id: `weight`
        },
        {
            type:`text`,
            placeholder:`Height (CM)`,
            id: `height`
        },
        {
            type:`text`,
            placeholder:`Age`,
            id: `age`
        },
        {
            type: `button`,
            value: `Calculate Now`
        }

    ]

    let selectEl = [
        {
            value:`0`,
            text:`Gender`
        },
        {
            value:`Male`,
            text:`Male`
        },
        {
            value:`Female`,
            text:`Female`
        }
    ]


    for(let i = 0; i<3; i++){
        let row = $(`<div>`);
        row.addClass(`form-row`)
        if(i==0){
            for(let j=0; j<2; j++){
                let inputDiv = $(`<div>`);
                inputDiv.addClass(`col form-group`);

                //creating input element
                let weightHeight = $(`<input>`);
                weightHeight.addClass(`form-control form-control-lg bg-dark text-white`);
                weightHeight.attr({"type":`${formElements[j].type}`, "placeholder":`${formElements[j].placeholder}`, "id":`${formElements[j].id}`});

                inputDiv.append(weightHeight);
                row.append(inputDiv);
            }
        }
        else if(i==1){
            for(let j=0; j<2; j++){
                let inputDiv = $(`<div>`);
                inputDiv.addClass(`col form-group`);

                if(j==0){
                    let age = $(`<input>`);
                    age.addClass(`form-control form-control-lg bg-dark text-white`);
                    age.attr({"type":`${formElements[2].type}`, "placeholder":`${formElements[2].placeholder}`, "id":`${formElements[2].id}`});

                    inputDiv.append(age);
                    row.append(inputDiv);
                }
                else{
                    let select = $(`<select>`);
                    select.addClass(`custom-select custom-select-lg bg-dark text-muted`);
                    select.attr(`id`, `gender`);

                    for(let z = 0; z<selectEl.length; z++){
                        let option = $(`<option>`);
                        option.attr(`value`, `${selectEl[z].value}`);
                        option.text(selectEl[z].text);

                        select.append(option);
                        inputDiv.append(select);
                    }

                    row.append(inputDiv);
                }
            }
        }
        else{
            let inputDiv = $(`<div>`);
            inputDiv.addClass(`col`);

            let button = $(`<input>`);
            button.addClass(`btn btn-lg btn-block btn-dark border-light bmiBtn`);
            button.attr({"type":`${formElements[3].type}`, "value":`${formElements[3].value}`});

            inputDiv.append(button);
            row.append(inputDiv);
        }
        form.append(row);
    }

    //form validation

    let weightRe = /^\d{2,3}\.?\d*$/;
    let heightRe = /^\d{3}\.?\d*$/;
    let ageRe = /^\d{2}$/;

    let btn = $(`.bmiBtn`);
    btn.click(function(event){
        event.preventDefault();
        let weight = $(`#weight`).val();
        let height = $(`#height`).val();
        let age = $(`#age`).val();
        let gender = $(`#gender`).val();

        let spanVal = $(`#bmiValidation`);
        if(!weightRe.test(weight)||!heightRe.test(height)||!ageRe.test(age)||gender==0){
            spanVal.text(`You must insert correct values.`);
            spanVal.css(`color`,`red`);
        }
        else{
            let BMI = Math.round((weight / (Math.pow(height*0.01,2)))*10)/10;
            let bmiMessage;
            if(BMI<=18.5){
                bmiMessage = `underweight`;
            }
            else if(BMI>18.5 && BMI<= 24.9){
                bmiMessage = `normal weight`;
            }
            else if(BMI>=25 && BMI <=29.9){
                bmiMessage = `overweight`;
            }
            else{
                bmiMessage = `obese`
            }
            spanVal.text(`Your BMI is ${BMI}. You are ${bmiMessage}.`);
            spanVal.css(`color`,`green`);
        }
    })
}
//Dynamic creation of our trainers part
function ourTrainers(){
    let row = $(`.trainersRow`);

    let elements = [
        {
            src: `img/team-1.jpg`,
            alt: `Picture of the James Alien.`,
            name: `James Alien`,
            trainer: `Power Lifting`
        },
        {
            src: `img/team-2.jpg`,
            alt: `Picture of the James Alien.`,
            name: `James Alien`,
            trainer:`Bodybuilding`
        },
        {
            src: `img/team-3.jpg`,
            alt: `Picture of the John Deo.`,
            name: `John Deo`,
            trainer:`Cardio`
        },
        {
            src: `img/team-4.jpg`,
            alt: `Picture of the Adam Phillips.`,
            name: `Adam Phillips`,
            trainer:`Crossfit`
        }
    ]
    let icons = [
        {
            href:`https://twitter.com/`,
            iconc1: `fab`,  //classes of the icon elements
            iconc2: `fa-twitter`
        },
        {
            href:`https://www.facebook.com/`,
            iconc1: `fab`,
            iconc2: `fa-facebook`
        },
        {
            href:`https://www.linkedin.com/`,
            iconc1: `fab`,
            iconc2: `fa-linkedin-in`
        },
        {
            href:`https://www.instagram.com/`,
            iconc1: `fab`,
            iconc2: `fa-instagram`
        }
    ]

    for(let i = 0; i<elements.length; i++){
        let col = $(`<div>`);
        col.addClass(`col-lg-3 col-md-6 mb-5`);
        
        let contentDiv = $(`<div>`);
        contentDiv.addClass(`card border-0 bg-secondary text-center text-white`);
        col.append(contentDiv);

        //image creation
        let img = $(`<img>`);
        img.addClass(`card-img-top`);
        img.attr({"src":`${elements[i].src}`, "alt":`${elements[i].alt}`});
        contentDiv.append(img);

        //icon block creation
        let iconDiv = $(`<div>`);
        iconDiv.addClass(`card-social d-flex align-items-center justify-content-center`);
        
        for(let j = 0; j<icons.length; j++){
            //a tag
            let a = $(`<a>`);
            a.addClass(`btn btn-outline-light rounded-circle text-center mr-2 px-0 icon40`);
            a.attr(`href`,`${icons[j].href}`);

            //icon tag
            let i = $(`<i>`);
            i.addClass(`${icons[j].iconc1} ${icons[j].iconc2}`);
            a.append(i);

            iconDiv.append(a);
        }
        contentDiv.append(iconDiv);

        //Trainer name and training specialty
        
        let nameDiv = $(`<div>`);
        nameDiv.addClass(`card-body bg-secondary`);

        contentDiv.append(nameDiv);

        let h4 = $(`<h4>`);
        h4.addClass(`card-title text-primary`);
        h4.text(elements[i].name);
        nameDiv.append(h4);

        let p = $(`<p>`);
        p.addClass(`card-text`);
        p.text(elements[i].trainer);

        nameDiv.append(p);

        row.append(col);
    }
}
//Testimonial slider
function testimonials(){
    //Slider switching bubttons

    let ol = $(`.testimonialBtn`);
    for(let i = 0; i<3; i++){
        let li = $(`<li>`);
        li.attr(`id`, `slide${i+1}`);
        if(i==0){
            li.addClass(`active`);
        }
        ol.append(li);
    }

    //Creating testimonials / Slider content

    let elements = [
        {
            src:`img/testimonial-1.jpg`,
            alt:`Profile picture of the Marcus Camby`,
            heading:`Marcus Camby`,
            profession:`Teacher`,
            text:`I have been a member of this gym for years, and I absolutely love it! The staff are friendly and welcoming, and the equipment is always well-maintained. I have seen tremendous progress in my fitness since joining, and I highly recommend this gym to anyone looking to get in shape.`
        },
        {
            src:`img/testimonial-2.jpg`,
            alt:`Profile picture of the Bill Bryant`,
            heading:`Bill Bryant`,
            profession:`Software engineer`,
            text:`I was hesitant to join a gym because I wasn't sure if I would stick with it. However, the variety of classes and personal training options at this gym have kept me motivated and engaged. I have made so many great friends here, and I am so glad I took the plunge and joined. It has truly been a game-changer for my fitness journey.`
        },
        {
            src:`img/testimonial-3.jpg`,
            alt:`Profile picture of the Bill Kayosaki`,
            heading:`Bill Kayosaki`,
            profession:`Real Estate broker`,
            text:`As a busy professional, I wasn't sure if I would have the time to commit to a gym routine. However, the flexible hours and convenient location of this gym have made it easy for me to fit in my workouts. I have already noticed an improvement in my energy levels and overall health, and I am grateful to have found such a supportive and welcoming community at this gym.`
        }
    ]

    let slider = $(`.testimonialSlider`);

    for(let i = 0; i<elements.length; i++){
        
        let wrapper = $(`<div>`);
        wrapper.addClass(`carousel-item`);
        if(i==0){
            wrapper.addClass(`active`);
        }
        slider.append(wrapper);

        //Block that contains image and block with Client name and profession

        let personalDiv = $(`<div>`);
        personalDiv.addClass(`d-flex align-items-center mb-4 text-white`);
        wrapper.append(personalDiv);
        //image

        let img = $(`<img>`);
        img.addClass(`rounded-circle bg-dark p-2 circleWidth80`);
        img.attr({"src": elements[i].src, "alt": elements[i].alt});
        personalDiv.append(img);
        //block with name and profession

        let nameDiv = $(`<div>`);
        nameDiv.addClass(`pl-4`);
        personalDiv.append(nameDiv);
        //name
        
        let name = $(`<h4>`);
        name.addClass(`text-primary`);
        name.text(elements[i].heading);
        nameDiv.append(name);

        //profession
        let profession = $(`<p>`);
        profession.addClass(`m-0`);
        profession.text(elements[i].profession);
        nameDiv.append(profession);

        //Block for the clients text
        let txtDiv = $(`<div>`);
        txtDiv.addClass(`testimonial-text position-relative border bg-dark text-white mb-5 p-4`);
        txtDiv.text(elements[i].text);
        wrapper.append(txtDiv);
    }

    //Slider functionality
    //we already selected slider Block in the previous creation of slides

    let slides = slider.children();
    let sliderBtns = $(`ol`).children();

    let currentSlide = 0;

    for(let i = 0; i<sliderBtns.length; i++){
        $(sliderBtns[i]).click(function(){
            $(slides[currentSlide]).removeClass(`active`);
            $(sliderBtns[currentSlide]).removeClass(`active`);
            if(i==0){
                currentSlide = 0;
            }
            else if(i==1){
                currentSlide = 1;
            }
            else{
                currentSlide = 2;
            }
            $(slides[currentSlide]).addClass(`active`);
            $(sliderBtns[currentSlide]).addClass(`active`);
        })
    }

    //slider automation

    setInterval(function(){
        $(slides[currentSlide]).removeClass('active');
        $(sliderBtns[currentSlide]).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        $(slides[currentSlide]).addClass('active');
        $(sliderBtns[currentSlide]).addClass('active');
      }, 5000);
}
//Dynamic creation of the Latest article on the home page
function latestBlogs(){
    let row = $(`.latestBlogs`);

    let elements = [
        {
            src:`img/blog-1.jpg`,
            alt:`Woman training at the gym.`,
            date:`12`,
            month:`Nov`,
            year:`2022`,
            heading:`Women and Fitness`,
            author:` Jessa Lorm`,
            topic:` Fitness`,
            comments:` 3 Comments`,
            authorIcon1:`fa`,     //This are two classes for the <i> elements used
            authorIcon2:`fa-user`,
            topicIcon1:`fa`,
            topicIcon2:`fa-folder`,
            commentsIcon1:`fa`,
            commentsIcon2:`fa-comments`,
            text:`Fitness is an important aspect of overall health and well-being for women of all ages. Regular exercise can help improve physical strength and endurance, reduce the risk of chronic diseases such as obesity, heart disease, and type 2 diabetes, and promote mental health and stress management.`,
            readMore:`Read More `,
            readMoreIcon1:`fa`,
            readMoreIcon2:`fa-angle-right`,
            readMoreLink: `single.html`
        },
        {
            src:`img/blog-2.jpg`,
            alt:`Man picking up dumbbells in the gym.`,
            date:`5`,
            month:`Jul`,
            year:`2022`,
            heading:`Ronnie Coleman and bodybuilding`,
            author:` Michael Scott`,
            topic:` Bodybuilding`,
            comments:` 1 Comments`,
            authorIcon1:`fa`,
            authorIcon2:`fa-user`,
            topicIcon1:`fa`,
            topicIcon2:`fa-folder`,
            commentsIcon1:`fa`,
            commentsIcon2:`fa-comments`,
            text:`Ronnie Coleman is a retired professional bodybuilder who is widely regarded as one of the greatest bodybuilders of all time. He is a 8-time Mr. Olympia champion, and his impressive physique and dedication to the sport have made him a fan favorite and an inspiration to many.`,
            readMore:`Read More `,
            readMoreIcon1:`fa`,
            readMoreIcon2:`fa-angle-right`,
            readMoreLink: `single.html`
        }
    ]

    for(let i = 0; i<elements.length; i++){
        let col = $(`<div>`);
        col.addClass(`col-lg-6 mb-5 blog-item`);
        row.append(col);

        //img creation
        let img = $(`<img>`);
        img.addClass(`img-fluid mb-4`);
        img.attr({"src":elements[i].src, "alt":elements[i].alt});
        col.append(img);

        //div that contains some information about the article
        let divContent = $(`<div>`);
        divContent.addClass(`d-flex align-items-center mb-4`);
        col.append(divContent);

        //Block with date of publishing the article
        let dateBlock = $(`<div>`);
        dateBlock.addClass(`d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white circleWidth80`);
        divContent.append(dateBlock);

        //Day
        let day = $(`<small>`);
        day.text(elements[i].date);
        dateBlock.append(day);

        //Month
        let month = $(`<p>`);
        month.addClass(`text-uppercase m-0 text-white font-weight-bold`);
        month.text(elements[i].month);
        dateBlock.append(month);
        
        //Year
        let year = $(`<small>`);
        year.text(elements[i].year);
        dateBlock.append(year);

        //Block with heading, author, topic, and number of comments
        let desc = $(`<div>`);
        desc.addClass(`pl-3`);
        divContent.append(desc);

        //heading
        let h = $(`<h3>`);
        h.addClass(`font-weight-bold`);
        h.text(elements[i].heading);
        desc.append(h);

        //Block for everything other than heading
        let divOther = $(`<div>`);
        divOther.addClass(`d-flex`);
        desc.append(divOther);

        //icons and text
        //author
        let author = $(`<small>`);
        author.addClass(`mr-2 text-muted`);
        divOther.append(author);
        
        let authorIcon = $(`<i>`);
        authorIcon.addClass(`${elements[i].authorIcon1} ${elements[i].authorIcon2}`);
        author.append(authorIcon);
        let authorText = document.createTextNode(elements[i].author);
        author.append(authorText);
        

        //Topic
        let topic = $(`<small>`);
        topic.addClass(`mr-2 text-muted`);
        divOther.append(topic);
        
        let topicIcon = $(`<i>`);
        topicIcon.addClass(`${elements[i].topicIcon1} ${elements[i].topicIcon2}`);
        topic.append(topicIcon);
        let topicText = document.createTextNode(elements[i].topic);
        topic.append(topicText);

        //Comments
        let com = $(`<small>`);
        com.addClass(`mr-2 text-muted`);
        divOther.append(com);
        
        let comIcon = $(`<i>`);
        comIcon.addClass(`${elements[i].commentsIcon1} ${elements[i].commentsIcon2}`);
        com.append(comIcon);
        let comText = document.createTextNode(elements[i].comments);
        com.append(comText);

        //text of the Article
        let p = $(`<p>`);
        p.text(elements[i].text);
        col.append(p);

        //Read more button
        let a = $(`<a>`);
        a.addClass(`btn btn-outline-primary mt-2 px-3`);
        a.attr(`href`, elements[i].readMoreLink);
        a.text(elements[i].readMore);
        col.append(a);

        //arrow icon on a read more button
        let readMoreIcon = $(`<i>`);
        readMoreIcon.addClass(`${elements[i].readMoreIcon1} ${elements[i].readMoreIcon2}`);
        a.append(readMoreIcon);
    }
}
//Modal for Join now
function modals(){

    //First modal function
    let modal1Button = $(`#modalNo1`);
    let modal1 = $(`#modal1`);

    modal1Button.click(function(e){
        e.preventDefault();
        modal1.toggleClass(`active`);
    })
    //Close btn function for both modals
    let close = $(`.close-btn`);

    for(let i = 0; i<close.length; i++){
        if(i==0){
            $(close[i]).click(function(){
                modal1.toggleClass(`active`);
            })
        }
        else{
            $(close[i]).click(function(){
                modal2.toggleClass(`active`);
            })
        }
    }
    //Second modal function

    let modal2Button = $(`#modalNo2`);
    let modal2 = $(`#modal2`);

    modal2Button.click(function(e){
        e.preventDefault();
        modal2.toggleClass(`active`);
    })


    //form regulation inside modals

    let nameRe = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
    let mailRe = /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let telRe = /^\+?[\d\s-]{6,}$/;
    //Input selection

    let nameIn = $(`.nameIn`);
    let mailIn = $(`.mailIn`);
    let telIn = $(`.telIn`);

    //Span selection
    let spanName = $(`.fullName`);
    let spanEmail = $(`.mailSub`);
    let spanTel = $(`.telSub`);
    let spanRadio = $(`.radioBtnRe`);
    let spanBtn = $(`.btnSubJoin`);

    let formSub = $(`.formSubJoin`);
    console.log(formSub);

    for(let i = 0; i<formSub.length; i++){
        $(formSub[i]).click(function(e){
            e.preventDefault();
            //Name validation
            let allGood = 0;

            let name = $(nameIn[i]).val();
            if(!nameRe.test(name)){
                $(spanName[i]).html(`Name is incorrect. Exemple: Branko Pualic.`);
                $(spanName[i]).css(`color`,`red`);
                allGood++;
            }
            else{
                $(spanName[i]).html(`&check;`);
                $(spanName[i]).css(`color`,`green`);
            }
            //mail validation
            let mail = $(mailIn[i]).val();
            if(!mailRe.test(mail)){
                $(spanEmail[i]).html(`Mail is incorrect. Use full mail expression.`);
                $(spanEmail[i]).css(`color`, `red`);
                allGood++;
            }
            else{
                $(spanEmail[i]).html(`&check;`);
                $(spanEmail[i]).css(`color`, `green`);
            }
            //telephone validation
            let tel = $(telIn[i]).val();
            if(!telRe.test(tel)){
                $(spanTel[i]).html(`Insert more than 5 numbers.`);
                $(spanTel[i]).css(`color`, `red`);
                allGood++;
            }
            else{
                $(spanTel[i]).html(`&check;`);
                $(spanTel[i]).css(`color`, `green`);
            }
            //radio validation

            let form = $(formSub[i]).parent();
            let radios = form.find(`input[name="fitness"]`);


            let radioNu;
            for(let j = 0; j<radios.length; j++){

                if(radios[j].checked == true){
                    $(spanRadio[i]).html(`&check;`);
                    $(spanRadio[i]).css(`color`, `green`);
                    radioNu = j;
                }
                else if(radios[0].checked == false && radios[1].checked == false){
                    $(spanRadio[i]).html(`Must check one!`);
                    $(spanRadio[i]).css(`color`, `red`);
                    allGood++;
                }
            }

            if(allGood==0){
                $(spanBtn[i]).html(`Successfully joined!`);
                $(spanBtn[i]).css(`color`, `green`);
                let spanTimer = setTimeout(function(){
                    $(spanName[i]).html(``);
                    $(nameIn[i]).val(``);
                    $(spanEmail[i]).html(``);
                    $(mailIn[i]).val(``);
                    $(spanTel[i]).html(``);
                    $(telIn[i]).val(``);
                    $(spanRadio[i]).html(``);
                    radios[radioNu].checked = false;
    
                    $(spanBtn[i]).html(``);
    
                },4000)
            }
        })
    }
}
//Gallery creation
function gallery(){
    let row = $(`.imagesRow`);

    let images = [
        {
            src:`img/gal1.jpg`,
            alt:`Man is carrying weight plate across the gym.`
        },
        {
            src:`img/gal2.jpg`,
            alt:`Man is doing cable fly machine.`
        },
        {
            src:`img/gal3.jpg`,
            alt:`Man is doing a bench press with spoter.`
        },
        {
            src:`img/gal4.jpg`,
            alt:`Girl is exercising with kettlebell.`
        },
        {
            src:`img/gal5.jpg`,
            alt:`Man is doing clean and jerk.`
        },
        {
            src:`img/gal6.jpg`,
            alt:`Stacks of kettlebells.`
        }
    ]

    let zoom = `Zoom In`;
    //Creating gallery - Start

    for(let i = 0; i<images.length; i++){
        let col = $(`<div>`);
        col.addClass(`m-3 position-relative imageContainer`);
        row.append(col);
        //image
        let img = $(`<img>`);
        img.addClass(`h-100 imagesG`);
        img.attr({"src":images[i].src, "alt":images[i].alt});
        col.append(img);

        //Zoom in - blocks
        let hoverBlock = $(`<div>`);
        hoverBlock.addClass(`darkCover position-absolute h-100 d-flex align-items-center justify-content-center`);
        col.append(hoverBlock);

        let zoomInBlock = $(`<div>`);
        zoomInBlock.addClass(`zoomInText`);
        hoverBlock.append(zoomInBlock);
        zoomInBlock.html(zoom);
    }
    //Creating gallery - End

    //Gallery zoom in slider for screen width above 768px
    //this will not work only if you open wep page on the screen width below 768px
    if(window.innerWidth>765){
        let zoomIn = $(`.darkCover`);
        let allImages = $(`.imageContainer`);
        let imageView = $(`.image-view`);
        let nextBtn = $(`.nextImageBtn`);
        let prevBtn = $(`.prevImageBtn`);
        let imageBox = $(`.image-box`);
    
    
        let currentImageIndex = 0;
    
        imageView.click(function(){
            imageView.css(`display`, `none`);
            imageBox.css(`display`, `none`);
        })
    
        $.each(zoomIn, function(index, btn){
            $(btn).click(function(){
                imageView.css(`display`, `block`);
    
                imageBox.css(`display`, `block`);
                currentImageIndex = index + 1;
                currentImageDisplay(currentImageIndex);
            })
        })
    
        function currentImageDisplay(position){
            imageBox.css(`background`, `url(img/gal${currentImageIndex}.jpg) center/cover no-repeat`);
        }
    
        prevBtn.click(function(){
            currentImageIndex--;
            if(currentImageIndex == 0){
                currentImageIndex = allImages.length;
            }
            currentImageDisplay(currentImageIndex);
        })
        nextBtn.click(function(){
            currentImageIndex++;
            if(currentImageIndex == 7){
                currentImageIndex = 1;
            }
            currentImageDisplay(currentImageIndex);
        })
    }

    
}

//Contact Form - Dynamic creation of some elements and validation
function contact(){
    //Dynamic creation of icons - address, phone and email

    let row = $(`.contactPage`);

    let elements = [
        {
            iconClass1:`fa`,
            iconClass2:`fa-2x`,
            iconClass3:`fa-map-marker-alt`,
            heading:`Address`,
            text:`123 Street, New York, USA`
        },
        {
            iconClass1:`fa`,
            iconClass2:`fa-2x`,
            iconClass3:`fa-phone-alt`,
            heading:`Phone`,
            text:`+012 345 6789`
        },
        {
            iconClass1:`far`,
            iconClass2:`fa-2x`,
            iconClass3:`fa-envelope`,
            heading:`Email`,
            text:`gymnast1@gmail.com`
        }
    ]

    for(let i = 0; i<elements.length; i++){
        let col = $(`<div>`);
        col.addClass(`col-sm-4 text-center mb-3`);
        row.append(col);

        //icon
        let icon = $(`<i>`);
        icon.addClass(`${elements[i].iconClass1} ${elements[i].iconClass2} ${elements[i].iconClass3} mb-3 text-primary`);
        col.append(icon);
        //heading
        let h = $(`<h4>`);
        h.addClass(`font-weight-bold`);
        h.html(elements[i].heading);
        col.append(h);
        //information
        let p = $(`<p>`);
        p.html(elements[i].text);
        col.append(p);
    }

    //Dynamic creation of icons - End


    //Contact form

    //Subject selection - Start
    let subject = $(`.subjectSelect`);

    let options = [`Choose a subject` ,`Training`, `Staff`, `Classes`, `Coaching`, `Opinion`];

    let select = $(`<select>`);
    select.attr(`id`,`subject`);
    select.addClass(`form-control`);
    subject.append(select);

    for(let i = 0; i<options.length; i++){
        let option = $(`<option>`);
        if(i==0){
            option.val(0);
            option.html(options[i]);
        }
        else{
            option.val(options[i]);
            option.html(options[i]);
        }
        select.append(option);
    }
    let textBlock = $(`<p>`);
    textBlock.addClass(`help-block text-danger`);
    textBlock.attr(`id`, `invalidSubject`);
    subject.append(textBlock);

    //Subject selection - End

    //Radio buttons - Start

    let radioBlock = $(`.genderSelect`);

    let genders = [`Male`, `Female`];

    for(let i = 0; i<genders.length; i++){

        let container = $(`<div>`);
        
        //label
        let label = $(`<label>`);
        label.attr(`for`, genders[i]);
        label.addClass(`widthLabel`);
        label.html(genders[i]);
        container.append(label);

        //radio btn
        let radio = $(`<input>`);
        radio.attr({"type":"radio", "name":"Genders", "id":genders[i], "value":genders[i]});
        radio.addClass(`ml-3`)
        
        container.append(radio);

        radioBlock.append(container);

    }

    let uncheckedRadioBlock = $(`<p>`);
    uncheckedRadioBlock.addClass(`help-block text-danger`);
    uncheckedRadioBlock.attr(`id`, `invalidRadio`);
    radioBlock.append(uncheckedRadioBlock);

    //Radio buttons - End



    //Contact form validation on click - Start

    let nameRe = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
    let mailRe = /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    //all input are selected
    let btn  = $(`#sendMessageButton`);
    let nameIn = $(`#name`);
    let emailIn = $(`#email`);
    let radios = $(`input[type="radio"]`);
    let selectIn = $(`#subject`);
    let textIn = $(`#message`);

    //all blocks for invalid message are slected
    let nameM = $(`#invalidName`);
    let emailM = $(`#invalidEmail`);
    let radioM = $(`#invalidRadio`);
    let selectM = $(`#invalidSubject`);
    let textM = $(`#invalidTextBox`);
    let messageSent = $(`#messageSent`);
    let checkBoxInput = $(`#checkBox`);

    btn.click(function(e){
        e.preventDefault();

        let allGood = 0;

        //name validation
        let name = nameIn.val();
        if(!nameRe.test(name)){
            nameM.html(`Name is incorrect. Exemple: Branko Pualic.`);
            allGood++;
        }
        else{
            nameM.html(``);
        }
        //mail validation
        let mail = emailIn.val();
        if(!mailRe.test(mail)){
            emailM.html(`Mail is incorrect. Use full mail expression.`);
            allGood++;
        }
        else{
            emailM.html(``);
        }

        //radio validation
        let radioNu;
        for(let j = 0; j<radios.length; j++){
            if(radios[j].checked == true){
                radioM.html(``);
                radioNu = j;
            }
            else if(radios[0].checked == false && radios[1].checked == false){
                radioM.html(`Must check one!`);
                allGood++;
            }
        }

        //Subject validation
        if(selectIn.value==0){
            selectM.html(`You must choose subject.`);
            allGood++;
        }
        else{
            selectM.html(``);
        }

        //textbox validation
        if(textIn.val() ==``){
            textM.html(`You must write a message.`);
            allGood++;
        }
        else{
            textM.html(``);
        }

        //delete all inserted values and checked box after successfully sending a message
         if(allGood==0){
             messageSent.html(`Successfully sent!`);
             messageSent.css(`color`,`green`);
             let spanTimer = setTimeout(function(){
                 nameM.html(``);
                 nameIn.val(``);
                 emailM.html(``);
                 emailIn.val(``);
                 radioM.html(``);
                 radios[radioNu].checked = false;
                 selectM.html(``);
                 selectIn.val(0);
                 textM.html(``);
                 textIn.val(``);

                 checkBoxInput.checked = false;

                 messageSent.html(``);

             },5000)
        }
    })

    //On click validation - End


    //Textarea - number of characters inserted - validation

    //We already selected textarea in previous on click validation

    let textCountSpan = $(`#textCount`);

    textIn.keyup(function(){
        let max = 200;
        let length = textIn.val().length;
        if(length>max){
            textIn.val(textIn.val().substring(0,200));
        }
        else{
            textCountSpan.html(length);
        }
    })


}
//Create comment
function comment(){

    //Button selection 
    let btn = $(`#leaveComment`);
    //Block in which we are going to store comments
    let block = $(`.commentSection`);
    //Comment count span
    let count = $(`.commentCount`);


    btn.click(function(e){
        e.preventDefault();

        //Input values
        let username = $(`#name`).val();
        let text = $(`#message`).val();

        //Invalid form text
        let val = $(`#invalidComment`);

        //Comment block creation
        if(username!=`` && text!=``){
            let comment = $(`<div>`);
            comment.addClass(`media mb-4`);
            block.append(comment);
    
            //image creation
            let img = $(`<img>`);
            img.attr({"src":"img/user-profile.png", "alt":"Standard universal user profile icon."});
            img.addClass(`mr-3 mt-1 rounded-circle width60`);
            comment.append(img);
    
            //Block with name, time of creation and comment
            let com = $(`<div>`);
            com.addClass(`media-body`);
            comment.append(com);
    
            //Name
            let h = $(`<h4>`);
            com.append(h);
            let name = document.createTextNode(`${username} `);
            h.append(name);
            //Time
            let small = $(`<small>`);
            small.addClass(`font-italic`);
            h.append(small);

            //Current time
            let date = new Date();
            let day = date.getDate();
            let month;
            switch(date.getMonth()+1){
                case 1: month = `Jan`; break;
                case 2: month = `Fen`; break;
                case 3: month = `Mar`; break;
                case 4: month = `Apr`; break;
                case 5: month = `May`; break;
                case 6: month = `Jun`; break;
                case 7: month = `Jul`; break;
                case 8: month = `Aug`; break;
                case 9: month = `Sep`; break;
                case 10: month = `Oct`; break;
                case 11: month = `Nov`; break;
                case 12: month = `Dec`; break;
            }
            let year = date.getFullYear();
            let min = date.getMinutes();
            if(min<10){
                switch(date.getMinutes()){
                    case 0: min = `00` ; break;
                    case 1: min = `01` ; break;
                    case 2: min = `02` ; break;
                    case 3: min = `03` ; break;
                    case 4: min = `04` ; break;
                    case 5: min = `05` ; break;
                    case 6: min = `06` ; break;
                    case 7: min = `07` ; break;
                    case 8: min = `08` ; break;
                    case 9: min = `09` ; break;
                }
            }
            let wholeTime;
            switch(date.getHours()){
                case 1: wholeTime = `01:${min}am`; break;
                case 2: wholeTime = `02:${min}am`; break;
                case 3: wholeTime = `03:${min}am`; break;
                case 4: wholeTime = `04:${min}am`; break;
                case 5: wholeTime = `05:${min}am`; break;
                case 6: wholeTime = `06:${min}am`; break;
                case 7: wholeTime = `07:${min}am`; break;
                case 8: wholeTime = `08:${min}am`; break;
                case 9: wholeTime = `09:${min}am`; break;
                case 10: wholeTime = `10:${min}am`; break;
                case 11: wholeTime = `11:${min}am`; break;
                case 12: wholeTime = `12:${min}pm`; break;
                case 13: wholeTime = `01:${min}pm`; break;
                case 14: wholeTime = `02:${min}pm`; break;
                case 15: wholeTime = `03:${min}pm`; break;
                case 16: wholeTime = `04:${min}pm`; break;
                case 17: wholeTime = `05:${min}pm`; break;
                case 18: wholeTime = `06:${min}pm`; break;
                case 19: wholeTime = `07:${min}pm`; break;
                case 20: wholeTime = `08:${min}pm`; break;
                case 21: wholeTime = `09:${min}pm`; break;
                case 22: wholeTime = `10:${min}pm`; break;
                case 23: wholeTime = `11:${min}pm`; break;
                case 0: wholeTime = `12:${min}am`; break;
            }

            small.html(`${day} ${month} ${year} at ${wholeTime}`);

            //User inserted text
            let p = $(`<p>`);
            p.html(text);
            com.append(p);

            //Comment counter change
            $.each(count, function(index, counter) {
                let num = Number($(counter).html());
                num++;
                $(counter).html(num);
            });

            //Deleting all inserted text and invalid form message after successfully adding comment
            val.html(``);
            $(`#name`).val(``);
            $(`#message`).val(``);
        }
        else{     
            val.html(`You must insert username and comment.`);
        }
    })
}

//Other functions that are responsible for page contents ------- End