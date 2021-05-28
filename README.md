ReactJS
==============================================================================================
https://github.com/avamsykiran/ReactJS_24May2021_04Jun2021_14001800.git
==============================================================================================

Pre-Requites
----------------------------------------
    HTML 5
        New Form Elements and Validation Attribues
        Web Storage
            LocalStorage
            SessionStorage

    CSS3 & Bootstrap 4

    JavaScript (ES6)
        Std Javascript's
            Arrays
            Object
            Math
            Window
            document
            String
        Function
            IIFE
            Arrow Functions
            Closures
            bind vs call vs invoke
        Array Prototype Functions
        Asynchronous Programming
            setTimeout
            setInterval
            Promise
            async and await      
        OOPs
            this
            Class
            Member Fucntion
            Inheretence
            construcotrs
        Sugar Syntex
            Tempalte Literals
            Multi Line Strings
            Spread and Rest Operatior
            Optional Parameter
            Default Parameter
            Destructured Assignemnt

    Lab Setup
    ----------------------------------------------------------------
        VS Code     for an IDE
        NodeJS      for an Development Platform  https://nodejs.org/en/
        Chrome      for a browser

    NodeJS
    ----------------------------------------------------------------

        Javascript run time environment.

        This enables to execute JS scripts without a browser.

        NodeJS mostly to support javascript development, even if the javascript app has
        to execute on the cleint machein (or a browser).

        The develpment process itself might need some thrid party tools like
            
                                        Java            Javascript
            dependency management      maven            npm (node package manager)
            testing                    junit            Jest
            packaging                  jar              Webpack
            ....etc

            npm,jest,webpack and other are also written in javascript.
            these tools must run while developing on the developer machine and hence NodeJS
            is used as a dev platform.

        Any javascript library or application is called a package.

        Check node installaton
                        node --version

        Create a NodeJS project :
                create a folder for the proejct
                and inside that folder we run 'npm init'  or  'npm init -y'

                the project folder will have a 'package.json' created
                which is similar to 'pom.xml of maven'
                whoes purpose is hold the meta-data of the proejct and the list of dependencies.

    ReactJS
    ------------------------------------------------------------------------------------------------------

        Is a javascript library to construct SPAs.


        SPA?
            Single Page Application

                Applciation that have only one page, and the page (.html) is composed of
                smart interchagnagable sections/units called Components


        Web Application Evolution
            Static Websites                 just a collection staticly written html files (pages).
            Dynamic Web Applcation          comprises of programes written like (Servlets/ASP/PHP...etc)
                                            and View Engins like (JSP/ASPX/JJSF.,..etc) are capable
                                            of generating html on the fly and that generated html + js + css
                                            is sent in response to any incoming request.

                                            Limitation
                                                each and every req has a newly and entirely generated html as response

                                                which inevitable once receved by the browser had to loaded
                                                completly after unloading the existing page - even if
                                                both of thsoe pages share 80 to 90% of common content.

                                                this made the user wait or
                                                the app is inresposnive until the new html is laoded and rendred.

                            WebServer                                                   Browser
                                Servlet+JSP/        <-----REQ------------------
                                Spring MVC + JSP
                                                    ------Resp(HTML + JS + CSS)---->    the old page is unloaded an 
                                                                                        new one is loaded

            Single Page Appliction            Applciation that have only one page, and the page (.html) is composed 
                                                of smart interchagnagable sections/units called Components

                                            This entire SPA is written in a client-side executable form usign
                                            javasciprt libraries like reactjs/angualr/vuejs ...etc.

                                            On the first client req, the entier appliation bundle
                                            gets served to the client and from then onwards, only
                                            the requried data is served from the server and html generation
                                            happens on the client itself providing a chance of
                                            generating only that part the page to be repalced
                                            rather than replacing the entire page.

                            WebServer                                                   Browser


                                SPA App Bundle      <-----REQ-----------------------
                                (index.html 
                                + app.js + otherjs 
                                + css)              -----------SPA Bundle ---------------> Load the SPA bundle
                                                                                        and render the index.html 

                                REST API as 
                                Servlet /       <-----REQ------------------
                                Spring MVC/..
                                                ------Resp (xml/json))---->             the client side JS will
                                                                                        receive the data and 
                                                                                        renders the relevant changes 
                                                                                        to the html page. 

            PWA - Progressive Web Application

                            SPA applciations that are capable of
                            1. Load faster
                            2. Work offline (if not all features but atleast a few of them)
                            3. capable of accessing native devices (like cam/mic/storage..etc)
                            4. capable of running with their own window without a browser.

        ReactJS Features
        ------------------------------------------------------------------------------------

            1. Component Based Archetecture (HTML Extendability)
            2. JSX  -   JavaScript Syntax Extended      (Javascript + HTML)
                        
                        let v1 = <h1>Hello</h1>

                        let unm = "Vamsy Kiran"

                        let element =  <h1>Hello {unm} </h1>

                    1. JSX is to be written and return only in the render() method of a ReactJS Component
                    2. The render method should return only one root element.

                                render(){
                                    return <h1>Hello {this.unm}</h1>
                                } //valid

                                render(){
                                    return (
                                        <h1>Hello {this.unm}</h1>
                                        <p>This is amazin</p>
                                    )
                                } //this is invalid

                                render(){
                                    return (
                                        <div>
                                            <h1>Hello {this.unm}</h1>
                                            <p>This is amazin</p>
                                        </div>
                                    )
                                } //this is valid
                    
                    3. The 'class' attribute is not allowed instead 'className' attribute has to be used.
                    4. All html attributes must follow camel case
                                readonly        readOnly
                                onclick         onClick
                                colspan         colSpan
                    5. All html elements shoudl be completely in lowercase and the elements represeting
                        react components must be initial-capitalized.
            
            3. One-Way Binding

                    happens in the form of interpolation, {varibleName}

                    if it si that we are displaying a variable or an expression 
                    using interpolation, each time the value of the varaible 
                    changes, the screen is rendered autoamtically to reflect the change.


            4. VDOM (Virtual Document Object Model)

                    <html>
                        <head>
                            <title>PageTitle</title>
                        </head>
                        <body>
                            <h1>Hello</h1>
                        </body>
                    </html>

                        DOM -------->
                                    document
                                        |
                                        html
                                         |
                                -----------------------------
                                |                           |
                                head                        body
                                |                            |
                                title                       h1
                                |                            |
                                (PageTitle)                 (Hello)


                    React keeps a copy of the DOM called VDOM in its memory,

                        making changes to VDOM is faster than
                        directly makign chagnes to real DOM because, when real DOM is modified
                        the screen has to update accordingly where as the VDOM modification
                        will not trigger any screnn changes.

                        Once VDOM is settled, react compares 
                        VDOM with DOM and makes only the applicable
                        changes to DOM so that the entire dom need not be rewritten
                        thus making the changes to the screen faster.

        ReactJS Components
        ------------------------------------------------------------------------------------

            Each component serves as a new HTML Element.
            
            1. Class Components

                        class Header extends React.Component{
                            constructor(props){
                                super(props)
                                //any component state initilization must happen here
                            }

                            //event handling methods
                            //react component life cycle methods

                            render(){
                                return (
                                    <header>
                                        <h2>My First React App</h2>
                                    </header>
                                );
                            }
                        }

            2. Functional Components

                        any javascript function that accepts a props parameter and
                        returns a JSX element is also treated as a Component

                        cosnt Footer = (props) => (
                            <footer>
                                <h6>All rights reserved</h6>
                            </footer>
                        );

            3. High Order Components

                        any javascript function, that accepts  a component as parameter
                        and returns a component.

        First ReactJS Applciation
        ------------------------------------------------------------------------------------

            Create # Method1
            ---------------------------------
                1. create a project-folder 
                2. inside that folder
                    a) npm init -y              the project is innitilized
                    b) install third party libraries like
                                react
                                react-dom
                                react-scripts
                                jest
                                ........etc
                            using 'npm install' command like
                             npm install --save react react-dom react-scripts jest
                3. Create the project structure .

            
            Create # Method2
            -----------------------------------

                npx create-react-app app-name
        
        Component's state and props
        ------------------------------------------------------------------------------------

            state       is the collection of data assosiated with a component.
                        state can be modified only through a method called 'setState'
                        as per the on-way binding strategy, any changes to the state will
                            trigger render method, which result in the page content updation.

            props       is short for Properties
                        the attributes of a tag are passed as props to its respective Component.
                         

        Integrating Bootstrap and font-awesome With React
        -----------------------------------------------------------------------------------

            method#1
                        npm install --save bootstrap font-awesome

                        in index.js
                        -------------------------------------
                        import 'bootstrap/dist/css/boostrap.min.css'
                        import 'font-awesome/dist/font-awesome.min.css'


            method#2
                        public/index.html
                        ----------------------------------------------

                            include the bootstrap CDN

                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>

                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">

        ReactJs Forms
        -----------------------------------------------------------------------------------

            Managed Component

                The form input element is directly 
                bound to the state of the component.

                Writing a form needs a lot of event handling,
                but is safe and faster.

            UnManaged Component                 (MOSTLY NOT RECOMMENDED)

                The form input element is mapped to
                something called a 'ref'

                Writing a form is eaiser , but bvecause we have
                create on ref for each form input, it becomes costlier on
                memory and performence.
        
        Event Bubbling
        ------------------------------------

            The event that occured in child
            can be handled by the parent.

            the parent must create a function (say f1)
            and should share it with the child through attriubtes.

            the child component can receive that function in props like props.f1()
            and call it when the event occures.

                                   

            




