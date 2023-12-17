import React, { Component } from 'react';
import logo from './logonew.png'
import './Splash.css';

//gaya untuk elemen splash
const splashStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '100%'
};

//gaya untuk elemen gambar
const imgStyle = {
    maxWidth: '10%',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

//fungsi yang mengembalikan elemen splash
function SplashMessage() {
    return (
        <div style={splashStyle}>
            <img src={logo} alt="logo" style={imgStyle} />
        </div>
    );
}

//komponen dengan splash screen
export default function SplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,

            };
        }

        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            if (this.state.loading) return SplashMessage();

            return <WrappedComponent {...this.props} />;
        }
    };
}