class Page extends React.Component {

    render() {
        switch (this.props.currentPage) {
            case 'home':
                return <HomePage/>
            case 'about':
                return <AboutPage/>
            case 'contact':
                return <ContactPage/>
        }
    }
}