'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

class CrossFadeImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottomOpacity: 0,
            bottomSrc: props.src,
            topSrc: props.src,
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.src !== this.props.src) {
            this.setState({ bottomSrc: "", topSrc: "" }, () => this.setState({ bottomSrc: prevProps.src, topSrc: this.props.src, bottomOpacity: 0.99 }));
        }
    }
    render() {
        const { duration, timingFunction, delay, style, alt, className } = this.props;
        const { topSrc, bottomOpacity, bottomSrc } = this.state;
        return (React.createElement("div", { style: { maxWidth: "100%", maxHeight: "100%" }, className: className },
            topSrc &&
                React.createElement("img", { style: Object.assign({ maxWidth: "100%", maxHeight: "100%", position: "absolute" }, style), src: topSrc, alt: alt, onLoad: () => this.onLoad(), onError: (e) => this.onError(topSrc, e) }),
            bottomSrc &&
                React.createElement("img", { style: Object.assign({ maxHeight: "100%", maxWidth: "100%", opacity: bottomOpacity, transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s` }, style), src: bottomSrc })));
    }
    onLoad() {
        this.setState({ bottomOpacity: 0 });
    }
    onError(src, error) {
        console.warn(`There is an error with ${src}: ${error}`);
    }
}
CrossFadeImage.defaultProps = {
    delay: 0,
    duration: 500,
    timingFunction: "ease",
};

module.exports = CrossFadeImage;
