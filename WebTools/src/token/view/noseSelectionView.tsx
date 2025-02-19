import React from "react";
import { Token } from "../model/token";
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from "react-redux";
import NoseCatalog from "../model/noseCatalog";
import SwatchButton from "./swatchButton";
import store from "../../state/store";
import { setTokenNasoLabialFoldType, setTokenNoseType } from "../../state/tokenActions";
import NasoLabialFoldCatalog from "../model/nasoLabialFoldCatalog";
import SpeciesRestrictions from "../model/speciesRestrictions";

interface INoseSelectionViewProperties extends WithTranslation {
    token: Token;
}

class NoseSelectionView extends React.Component<INoseSelectionViewProperties, {}> {

    render() {
        const { t, token } = this.props;
        if (SpeciesRestrictions.isRubberHeaded(token.species)) {
            return (<p className="mt-4">No selections available.</p>);
        } else {
            return (<>
            <p className="mt-4">{t('TokenCreator.section.nose.shape')}:</p>
            <div className="d-flex flex-wrap" style={{gap: "0.5rem"}}>
            {NoseCatalog.instance.getSwatches(this.props.token).map(s => <SwatchButton svg={s.svg} title={s.localizedName}
                onClick={() => store.dispatch(setTokenNoseType(s.id))} active={this.props.token.noseType === s.id}
                token={this.props.token}
                key={'nose-swatch-' + s.id }/>)}
            </div>

            <p className="mt-4">{t('TokenCreator.section.nose.nasoLabial')}:</p>
            <div className="d-flex flex-wrap" style={{gap: "0.5rem"}}>
            {NasoLabialFoldCatalog.instance.swatches.map(s => <SwatchButton svg={s.svg} title={s.localizedName}
                onClick={() => store.dispatch(setTokenNasoLabialFoldType(s.id))} active={this.props.token.nasoLabialFold === s.id}
                token={this.props.token}
                key={'naso-labial-swatch-' + s.id }/>)}
            </div>
            </>);
        }
    }

}


function mapStateToProps(state, ownProps) {
    return {
        token: state.token
    };
}

export default withTranslation()(connect(mapStateToProps)(NoseSelectionView));