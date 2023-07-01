import {FaqSubtext, FaqText, StyledItem} from "./FaqItem.styles";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList, faTasks, faThumbtack} from "@fortawesome/free-solid-svg-icons";
import ColoredAnchor from "../ColoredAnchor/ColoredAnchor";

const FaqItem = ({animate, type}) => {

    return (
        <StyledItem animate={animate}>
            {
                type === 'add' &&
                <>
                    <FontAwesomeIcon
                        icon={faThumbtack}
                        color={'#8F0406'}
                        style={{width: 50, height: 50}}
                    />
                    <FaqText>{'Rozgrywki ligowe'}</FaqText>
                    <FaqSubtext>{'Poczynia klubu można śledzić podczas rozgrywek żabeńskiej B-klasy '}</FaqSubtext>
                </>
            }
            {
                type === 'manage' &&
                <>
                    <FontAwesomeIcon
                        icon={faClipboardList}
                        color={'#8F0406'}
                        style={{width: 50, height: 50}}
                    />
                    <FaqText>{'Social media'}</FaqText>
                    <FaqSubtext>{'Zapraszamy na nasze social media, gdzie wrzucane są aktualności z ostatnich spotkań'}</FaqSubtext>
                </>
            }
            {
                type === 'summary' &&
                <>
                    <FontAwesomeIcon
                        icon={faTasks}
                        color={'#8F0406'}
                        style={{width: 50, height: 50}}
                    />
                    <FaqText>{'Sponsorzy'}</FaqText>
                    <FaqSubtext>{'FT Burzec, RADBET, Tomasz Magiera, Sanit-Bud, OSKP - PHUT Marian Szajor'}</FaqSubtext>
                </>
            }
        </StyledItem>
    );
};

export default FaqItem;
