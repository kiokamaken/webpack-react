import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

class Card extends Component {
    componentDidMount() {}

    render() {
        const { children: ExtendedUI, renderHeaderFn, renderContentFn } = this.props;
        return (
            <div className="card">
                <div class="card-block">
                    {typeof renderHeaderFn === 'function' ? (
                        renderHeaderFn()
                    ) : (
                        <CardHeader title={this.props.title} subTitle={this.props.subTitle} />
                    )}
                    {typeof renderContentFn === 'function' ? (
                        renderContentFn()
                    ) : (
                        <CardContent>{this.props.component}</CardContent>
                    )}
                </div>
                {ExtendedUI ? <ExtendedUI /> : null}
            </div>
        );
    }
}

export default Card;
