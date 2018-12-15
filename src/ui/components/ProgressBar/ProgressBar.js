import React from 'react';

export default function ProgressBar(props) {
    const style = {
        width: props.valueNow + '%',
        ...props.style
    };

    return (
        <div class="progress">
            <div
                className={'progress-bar ' + props.class}
                role="progressbar"
                aria-valuenow={props.valueNow}
                aria-valuemin="0"
                aria-valuemax="100"
                style={style}
            >
                <span class="sr-only">{props.text}</span>
            </div>
        </div>
    );
}
