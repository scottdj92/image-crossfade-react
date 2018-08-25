import React, { CSSProperties, HTMLAttributes } from "react";
import { TransitionTimingFunctionProperty } from "./node_modules/csstype/index";

type Props = {
    src: string;
    duration?: number;
    className?: string;
    timingFunction?: TransitionTimingFunctionProperty;
    delay?: number;
    alt?: string;
    style?: CSSProperties;
};

type State = {
    topSrc: string;
    bottomOpacity: number;
    bottomSrc: string;
};

class CrossFadeImage extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        delay: 0,
        duration: 500,
        timingFunction: "ease",
    };

    constructor (props) {
        super(props);
        this.state = {
            bottomOpacity: 0,
            bottomSrc: props.src,
            topSrc: props.src,
        };
    }

    public componentDidUpdate (prevProps: Props) {
        if (prevProps.src !== this.props.src) {
            this.setState({ bottomSrc: "", topSrc: ""}, () =>
                this.setState({ bottomSrc: prevProps.src, topSrc: this.props.src, bottomOpacity: 0.99 }, () => {
                    // if (!this.timeout) {
                    //     clearTimeout(this.timeout);
                    // }
                }),
            );
        }
    }

    public render () {
        const { duration, timingFunction, delay, style, alt, className } = this.props;
        const { topSrc, bottomOpacity, bottomSrc } = this.state;

        return (
            <div style={{ maxWidth: "100%", maxHeight: "100%" }} className={className}>
                { topSrc &&
                    <img style={{ maxWidth: "100%", maxHeight: "100%", position: "absolute", ...style }}
                        src={topSrc}
                        alt={alt}
                    />
                }
                { bottomSrc &&
                    <img style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        opacity: bottomOpacity,
                        transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s`,
                        ...style,
                    }}
                    src={bottomSrc}
                    />
                }
            </div>
        );
    }

    private timeout () {
        setTimeout( () => this.setState({ bottomOpacity: 0 }), 20);
    }
}

export default CrossFadeImage;
