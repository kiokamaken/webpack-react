import React, {Component} from 'react';

class CardHeader extends Component {
    render() {
        const { title, subTitle } = this.props;
        return (
            <>
                <h3 className="card-title">{title}</h3>
                <h6 className="card-subtitle">{subTitle}</h6>
            </>
        )
    }
}

export default CardHeader;