import React from 'react'
import PropTypes from 'prop-types';
import styles from './Footer.scss';
import SocialIcons from '../SocialIcons/SocialIcons.jsx';
import Info from './Info.jsx';
let infoArray = [
    {
        title: "Training Options",
        records: [
            {
                text: "Live Online",
                link: "/"
            }, {
                text: "Self-paced",
                link: "/"
            }, {
                text: "Customized Onsite",
                link: "/"
            }, {
                text: "Enterprise Solutions",
                link: "/"
            }, {
                text: "All Training Options",
                link: "/"
            },
        ]
    }, {
        title: "About Us",
        records: [
            {
                text: "Testimonials",
                link: "/"
            }, {
                text: "Client List",
                link: "/"
            }, {
                text: "Company",
                link: "/"
            }, {
                text: "Privacy Policy",
                link: "/"
            }, {
                text: "In The ",
                link: "/"
            }, {
                text: "Community",
                link: "/"
            }, {
                text: "Train for Us",
                link: "/"
            }, {
                text: "Cancelation Policy",
                link: "/"
            }, {
                text: "Make a Payment",
                link: "/"
            }
        ]
    }, {
        title: "Microsoft",
        records: [
            {
                text: "Certified Microsoft ",
                link: "/"
            }, {
                text: "Courses",
                link: "/"
            }, {
                text: "Software Assurance Training",
                link: "/"
            }
        ]
    }
    , {
        title: "Resources",
        records: [
            {
                text: "Newsletter",
                link: "/"
            }, {
                text: "Webucator Blog",
                link: "/"
            }, {
                text: "How-To Articles",
                link: "/"
            }, {
                text: "Free Tutorials",
                link: "/"
            }
        ]
    }
]

class Footer extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        return <footer className="footer">
            <Info data = {infoArray}/>
            <SocialIcons/>
            <div className="footer__copyright">© 2004-2019 Webucator, Inc. All Rights Reserved.</div>
        </footer>
    }
}
export default Footer;